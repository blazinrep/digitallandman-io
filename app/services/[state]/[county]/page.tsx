import { Metadata } from 'next';
import { County, Profile } from '@/lib/supabase';
import { mockCounties, mockProfiles, mockProfileServiceAreas } from '@/lib/mock-data';

// ISR: Revalidate every 24 hours
export const revalidate = 86400;

interface PageProps {
  params: Promise<{
    state: string;
    county: string;
  }>;
}

// Generate static params for top 500 counties at build time
export async function generateStaticParams() {
  return mockCounties.map((county) => ({
    state: county.state_code.toLowerCase(),
    county: county.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, county } = await params;
  const stateCode = state.toUpperCase();

  // Fetch county name for metadata
  const countyData = mockCounties.find(
    (c) => c.slug === county && c.state_code === stateCode
  );

  const countyName = countyData?.name || county;

  return {
    title: `Vetted Independent Land Professionals in ${countyName} County, ${stateCode}`,
    description: `Find verified land professionals, real estate agents, and rural property experts in ${countyName} County, ${stateCode}. Connect with vetted independent operators for your land buying and selling needs.`,
    alternates: {
      canonical: `https://digitallandman.io/services/${state}/${county}`,
    },
    openGraph: {
      title: `Vetted Independent Land Professionals in ${countyName} County, ${stateCode}`,
      description: `Find verified land professionals in ${countyName} County, ${stateCode}. Connect with vetted independent operators for your land buying and selling needs.`,
      url: `https://digitallandman.io/services/${state}/${county}`,
      siteName: 'Digital Landman Network',
    },
  };
}

// Fetch county data and verified professionals
async function getCountyData(stateCode: string, countySlug: string) {
  // Fetch county information
  const county = mockCounties.find(
    (c) => c.slug === countySlug && c.state_code === stateCode
  );

  if (!county) {
    return null;
  }

  // Fetch verified professionals for this county
  const serviceAreaIds = mockProfileServiceAreas
    .filter((sa) => sa.county_id === county.id)
    .map((sa) => sa.profile_id);

  const profiles = mockProfiles.filter(
    (p) => p.verification_status === 'Verified' && serviceAreaIds.includes(p.id)
  );

  return { county, profiles };
}

export default async function CountyDirectoryPage({ params }: PageProps) {
  const { state, county: countySlug } = await params;
  const stateCode = state.toUpperCase();

  const data = await getCountyData(stateCode, countySlug);

  if (!data) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">County Not Found</h1>
          <p className="text-zinc-600">The requested county could not be found.</p>
        </div>
      </div>
    );
  }

  const { county: countyData, profiles } = data;

  // Generate JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: profiles.map((profile: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'LocalBusiness',
        name: profile.business_name,
        category: profile.business_type,
        address: {
          '@type': 'PostalAddress',
          addressRegion: stateCode,
          addressLocality: countyData.name,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans antialiased">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-4xl mx-auto px-6 py-4">
          <ol className="flex items-center space-x-2 text-sm text-zinc-600">
            <li>
              <a href="/services" className="hover:text-zinc-900 transition-colors">
                Services
              </a>
            </li>
            <li className="text-zinc-400">/</li>
            <li className="font-medium text-zinc-900">{stateCode}</li>
            <li className="text-zinc-400">/</li>
            <li className="font-medium text-zinc-900">{countyData.name} County</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-2">
            {countyData.name} County, {stateCode}
          </h1>
          <p className="text-lg text-zinc-600">
            Connect with vetted independent land professionals in your area
          </p>
        </header>

        {/* Metrics Grid */}
        <section className="max-w-4xl mx-auto px-6 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
              <div className="text-sm font-medium text-zinc-600 mb-1">Coverage Status</div>
              <div className="text-lg font-semibold text-emerald-600">Active</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
              <div className="text-sm font-medium text-zinc-600 mb-1">Vetted Operators</div>
              <div className="text-lg font-semibold text-zinc-900">{profiles.length}</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-zinc-200 shadow-sm">
              <div className="text-sm font-medium text-zinc-600 mb-1">Regional SLA</div>
              <div className="text-lg font-semibold text-zinc-900">Under 24 Hours</div>
            </div>
          </div>
        </section>

        {/* Directory List */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">Verified Professionals</h2>

          {profiles.length > 0 ? (
            <div className="space-y-4">
              {profiles.map((profile: any) => (
                <article
                  key={profile.id}
                  className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-zinc-900">
                          {profile.business_name}
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          Verified
                        </span>
                      </div>
                      <p className="text-sm text-zinc-600">{profile.business_type}</p>
                    </div>
                    <a
                      href={`/request?provider=${profile.id}&county=${countyData.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
                    >
                      Request Service
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white p-8 rounded-lg border-2 border-dashed border-zinc-300 text-center">
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  No Professionals Currently in This Area
                </h3>
                <p className="text-sm text-zinc-600 mb-4">
                  We don't have any verified professionals directly assigned to {countyData.name} County yet. Your request will be automatically routed to adjacent regional sponsors who cover this area.
                </p>
                <a
                  href={`/request?county=${countyData.slug}`}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
                >
                  Submit Request
                </a>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
