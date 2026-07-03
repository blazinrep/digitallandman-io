const mockCounties = [
  {
    id: '1',
    name: 'Travis',
    slug: 'travis',
    state_code: 'TX',
  },
  {
    id: '2',
    name: 'Williamson',
    slug: 'williamson',
    state_code: 'TX',
  },
  {
    id: '3',
    name: 'Hays',
    slug: 'hays',
    state_code: 'TX',
  },
  {
    id: '4',
    name: 'Bexar',
    slug: 'bexar',
    state_code: 'TX',
  },
  {
    id: '5',
    name: 'Dallas',
    slug: 'dallas',
    state_code: 'TX',
  },
];

const mockProfiles = [
  {
    id: 'p1',
    business_name: 'Texas Land & Ranch Co.',
    business_type: 'Real Estate Brokerage',
    verification_status: 'Verified',
  },
  {
    id: 'p2',
    business_name: 'Lone Star Property Services',
    business_type: 'Land Surveying',
    verification_status: 'Verified',
  },
  {
    id: 'p3',
    business_name: 'Hill Country Land Experts',
    business_type: 'Real Estate Brokerage',
    verification_status: 'Verified',
  },
];

const mockProfileServiceAreas = [
  { profile_id: 'p1', county_id: '1' },
  { profile_id: 'p1', county_id: '2' },
  { profile_id: 'p2', county_id: '3' },
  { profile_id: 'p3', county_id: '4' },
  { profile_id: 'p3', county_id: '5' },
];

const fs = require('fs');
const path = require('path');

const generateCountyPage = (county, profiles) => {
  const stateCode = county.state_code;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: profiles.map((profile, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'LocalBusiness',
        name: profile.business_name,
        category: profile.business_type,
        address: {
          '@type': 'PostalAddress',
          addressRegion: stateCode,
          addressLocality: county.name,
        },
      },
    })),
  };

  const profilesHtml = profiles.length > 0
    ? profiles.map((profile) => `
      <article class="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-lg font-semibold text-zinc-900">${profile.business_name}</h3>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Verified</span>
            </div>
            <p class="text-sm text-zinc-600">${profile.business_type}</p>
          </div>
          <a href="/request?provider=${profile.id}&county=${county.slug}" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-900 hover:bg-zinc-800 transition-colors">Request Service</a>
        </div>
      </article>
    `).join('')
    : `
      <div class="bg-white p-8 rounded-lg border-2 border-dashed border-zinc-300 text-center">
        <div class="max-w-md mx-auto">
          <h3 class="text-lg font-semibold text-zinc-900 mb-2">No Professionals Currently in This Area</h3>
          <p class="text-sm text-zinc-600 mb-4">We don't have any verified professionals directly assigned to ${county.name} County yet. Your request will be automatically routed to adjacent regional sponsors who cover this area.</p>
          <a href="/request?county=${county.slug}" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-900 hover:bg-zinc-800 transition-colors">Submit Request</a>
        </div>
      </div>
    `;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vetted Independent Land Professionals in ${county.name} County, ${stateCode}</title>
  <meta name="description" content="Find verified land professionals, real estate agents, and rural property experts in ${county.name} County, ${stateCode}. Connect with vetted independent operators for your land buying and selling needs.">
  <link rel="canonical" href="https://digitallandman.io/services/${stateCode.toLowerCase()}/${county.slug}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Vetted Independent Land Professionals in ${county.name} County, ${stateCode}">
  <meta property="og:description" content="Find verified land professionals in ${county.name} County, ${stateCode}. Connect with vetted independent operators for your land buying and selling needs.">
  <meta property="og:url" content="https://digitallandman.io/services/${stateCode.toLowerCase()}/${county.slug}">
  <meta property="og:site_name" content="Digital Landman Network">
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body class="bg-zinc-50 text-zinc-900 font-sans antialiased min-h-screen">
  <nav class="max-w-4xl mx-auto px-6 py-4">
    <ol class="flex items-center space-x-2 text-sm text-zinc-600">
      <li><a href="/services" class="hover:text-zinc-900 transition-colors">Services</a></li>
      <li class="text-zinc-400">/</li>
      <li class="font-medium text-zinc-900">${stateCode}</li>
      <li class="text-zinc-400">/</li>
      <li class="font-medium text-zinc-900">${county.name} County</li>
    </ol>
  </nav>
  <header class="max-w-4xl mx-auto px-6 pb-8">
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-2">${county.name} County, ${stateCode}</h1>
    <p class="text-lg text-zinc-600">Connect with vetted independent land professionals in your area</p>
  </header>
  <section class="max-w-4xl mx-auto px-6 pb-8">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
        <div class="text-sm font-medium text-zinc-600 mb-1">Coverage Status</div>
        <div class="text-lg font-semibold text-emerald-600">Active</div>
      </div>
      <div class="bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
        <div class="text-sm font-medium text-zinc-600 mb-1">Vetted Operators</div>
        <div class="text-lg font-semibold text-zinc-900">${profiles.length}</div>
      </div>
      <div class="bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
        <div class="text-sm font-medium text-zinc-600 mb-1">Regional SLA</div>
        <div class="text-lg font-semibold text-zinc-900">Under 24 Hours</div>
      </div>
    </div>
  </section>
  <section class="max-w-4xl mx-auto px-6 pb-12">
    <h2 class="text-xl font-bold text-zinc-900 mb-6">Verified Professionals</h2>
    <div class="space-y-4">${profilesHtml}</div>
  </section>
</body>
</html>`;
};

const main = () => {
  const publicDir = path.join(process.cwd(), 'public');
  const servicesDir = path.join(publicDir, 'services');

  // Create services directory if it doesn't exist
  if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
  }

  mockCounties.forEach((county) => {
    const stateDir = path.join(servicesDir, county.state_code.toLowerCase());
    if (!fs.existsSync(stateDir)) {
      fs.mkdirSync(stateDir, { recursive: true });
    }

    // Get profiles for this county
    const serviceAreaIds = mockProfileServiceAreas
      .filter((sa) => sa.county_id === county.id)
      .map((sa) => sa.profile_id);

    const profiles = mockProfiles.filter(
      (p) => p.verification_status === 'Verified' && serviceAreaIds.includes(p.id)
    );

    const html = generateCountyPage(county, profiles);
    const filePath = path.join(stateDir, `${county.slug}.html`);
    fs.writeFileSync(filePath, html);
    console.log(`Generated: ${filePath}`);
  });

  console.log('Static pages generated successfully!');
};

main();
