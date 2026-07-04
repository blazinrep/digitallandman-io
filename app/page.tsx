import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Landman Network | Texas Rural Real Estate Marketplace',
  description: 'The premier digital media network connecting active land buyers with premium rural acreage, ranches, and homesteads across Texas. Access targeted advertising and sponsorships.',
  alternates: {
    canonical: 'https://digitallandman.io',
  },
  openGraph: {
    type: 'website',
    title: 'Digital Landman Network | Texas Rural Real Estate Marketplace',
    description: 'Connecting high-intent buyers with premium rural acreage, ranches, and homesteads across Texas. Discover our managed marketplace platforms.',
    url: 'https://digitallandman.io',
    siteName: 'Digital Landman Network',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Digital Landman Network',
  url: 'https://digitallandman.io',
  logo: 'https://digitallandman.io/logo.png',
  description: 'A premier digital media network specializing in Texas rural real estate, farm, ranch, and acreage marketplaces.',
  email: 'partnerships@digitallandman.io',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Texas',
  },
  knowsAbout: [
    'Texas Real Estate',
    'Rural Land Sales',
    'Farm and Ranch Properties',
    'Digital Marketplace Management',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-slate-50 text-slate-900 font-sans antialiased min-h-screen">
        {/* Header Section */}
        <header className="max-w-4xl mx-auto pt-20 pb-12 px-6 text-center">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
            Digital Media & Marketplaces
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            DIGITAL LANDMAN
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Connecting high-intent buyers with premium rural acreage, ranches, and homesteads across the Lone Star State.
          </p>
        </header>

        <main className="max-w-4xl mx-auto px-6 pb-24">
          {/* Network Assets */}
          <section aria-labelledby="network-heading" className="mb-16">
            <h2 id="network-heading" className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">
              Our Managed Platforms
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Asset 1: Texas Farm & Ranch */}
              <article className="bg-white p-6 rounded-xl shadow-xs border border-slate-200/60 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Texas Farm & Ranch Land
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Our flagship digital marketplace catering to active land buyers, agricultural producers, and rural real estate specialists.
                  </p>
                </div>
                <div className="text-emerald-600 font-semibold text-sm mt-4">
                  <span className="bg-emerald-50 px-2.5 py-1 rounded-md">23,500+ Active Members</span>
                </div>
              </article>

              {/* Asset 2: Texas Hunting & Fishing */}
              <article className="bg-white p-6 rounded-xl shadow-xs border border-slate-200/60 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Texas Hunting & Fishing Exchange
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    A highly targeted niche forum connecting sportsman-ready recreational tracts and rural acreage with avid outdoor buyers.
                  </p>
                </div>
                <div className="text-emerald-600 font-semibold text-sm mt-4">
                  <span className="bg-emerald-50 px-2.5 py-1 rounded-md">11,000+ Active Members</span>
                </div>
              </article>
            </div>
          </section>

          {/* County Services Directory */}
          <section aria-labelledby="services-heading" className="mb-16">
            <h2 id="services-heading" className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">
              County Services Directory
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-xs">
              <p className="text-slate-600 text-sm mb-6 text-center">
                Find vetted independent land professionals by county
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <a href="/services/tx/travis" className="block p-4 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-slate-800">Travis County</h3>
                  <p className="text-xs text-slate-500 mt-1">Austin area</p>
                </a>
                <a href="/services/tx/williamson" className="block p-4 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-slate-800">Williamson County</h3>
                  <p className="text-xs text-slate-500 mt-1">Georgetown area</p>
                </a>
                <a href="/services/tx/hays" className="block p-4 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-slate-800">Hays County</h3>
                  <p className="text-xs text-slate-500 mt-1">San Marcos area</p>
                </a>
                <a href="/services/tx/dallas" className="block p-4 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-slate-800">Dallas County</h3>
                  <p className="text-xs text-slate-500 mt-1">Dallas area</p>
                </a>
                <a href="/services/tx/bexar" className="block p-4 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 transition-colors">
                  <h3 className="font-semibold text-slate-800">Bexar County</h3>
                  <p className="text-xs text-slate-500 mt-1">San Antonio area</p>
                </a>
              </div>
            </div>
          </section>

          {/* Lead Intake Form */}
          <section aria-labelledby="form-heading" className="mb-16">
            <h2 id="form-heading" className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 text-center">
              Get Started
            </h2>
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Submit Your Project</h2>
              <p className="text-slate-600 text-sm mb-6">
                Connect with vetted land professionals for your rural property project
              </p>

              <form 
                action="https://assets.mailerlite.com/jsonp/2342326/forms/192073939365659967/subscribe" 
                method="POST" 
                target="_blank"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fields[fullname]"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="fields[email]"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="fields[phone]"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="stateCounty" className="block text-sm font-medium text-slate-700 mb-1">
                    State & County *
                  </label>
                  <select
                    id="stateCounty"
                    name="fields[state_county]"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select your county</option>
                    <option value="TX - Travis">TX - Travis County</option>
                    <option value="TX - Williamson">TX - Williamson County</option>
                    <option value="TX - Hays">TX - Hays County</option>
                    <option value="TX - Dallas">TX - Dallas County</option>
                    <option value="TX - Bexar">TX - Bexar County</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-slate-700 mb-1">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="fields[project_type]"
                    required
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="Land Purchase">Land Purchase</option>
                    <option value="Land Sale">Land Sale</option>
                    <option value="Property Survey">Property Survey</option>
                    <option value="Title Services">Title Services</option>
                    <option value="Land Development">Land Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-slate-700 mb-1">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="fields[project_description]"
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                    placeholder="Describe your project needs, timeline, and any specific requirements..."
                  />
                </div>

                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                >
                  Submit Request
                </button>
              </form>

              <p className="text-xs text-slate-500 mt-4 text-center">
                By submitting this form, you agree to receive communications from our network operators.
              </p>
            </div>
          </section>

          {/* FAQ Block */}
          <section aria-labelledby="faq-heading" className="mb-16 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-xs">
            <h2 id="faq-heading" className="text-xl font-bold text-slate-800 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-semibold text-slate-900 mb-2">How do I advertise a property on the Digital Landman network?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Real estate agents and independent sellers can secure standalone premium feed posts or permanent title banner sponsorships across our targeted platforms by contacting our partnership desk.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">What is the target audience of the network?</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Our managed marketplaces specifically target high-intent buyers, agricultural operators, homesteaders, and outdoor enthusiasts looking for acreage, rural land, and ranches within the state of Texas.</p>
              </div>
            </div>
          </section>

          <hr className="border-slate-200 my-12" />

          {/* B2B Call to Action / Contact */}
          <section aria-labelledby="cta-heading" className="bg-slate-900 text-white p-8 sm:p-12 rounded-2xl shadow-md text-center">
            <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold mb-3">
              Partner With Us
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base mb-8">
              Boost your listings with premium, main-feed placement or secure our exclusive Monthly Title Banner Slot to command full visibility across our entire audience network.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-800 max-w-xl mx-auto w-full">
              <span className="text-slate-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">
                Media Kit & Inquiries:
              </span>
              <a href="mailto:partnerships@digitallandman.io" className="text-emerald-400 font-mono font-medium hover:text-emerald-300 transition-colors text-sm sm:text-base">
                partnerships@digitallandman.io
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center pb-12 text-xs text-slate-400 font-light">
          &copy; 2026 Digital Landman Network. All rights reserved.
        </footer>
      </div>
    </>
  );
}
