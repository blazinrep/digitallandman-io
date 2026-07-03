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
