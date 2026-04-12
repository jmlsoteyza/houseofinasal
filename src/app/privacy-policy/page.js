import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | House of Inasal',
  description: 'Privacy Policy for House of Inasal UAE.'
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f6] font-ui">
      {/* Hero */}
      <section className="bg-[#2d9751] text-white py-16 px-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] font-ui font-semibold text-green-200 mb-3">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-primary font-extrabold">Privacy Policy</h1>
        <p className="mt-4 text-green-100 font-ui text-sm">Last updated: January 2025</p>
      </section>

      <section className="max-w-[820px] mx-auto px-6 py-12 space-y-10">
        {/* Intro */}
        <p className="text-gray-600 font-ui text-base leading-relaxed">
          House of Inasal operates a static informational website. We do not run any sign-up forms,
          user accounts, or direct data collection on this site. This page explains the limited ways
          in which data may be collected when you visit us online.
        </p>

        {/* Section 1 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">
            1. Information We Do Not Collect
          </h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            We do not collect your name, email address, phone number, or any other personal
            information directly through this website. There are no contact forms, newsletter
            sign-ups, or login areas on this site.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">
            2. Analytics & Cookies
          </h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            We may use Google Analytics to understand how visitors use our website. This tool
            collects anonymous data such as pages visited, time spent on the site, and general
            location (country/city level). No personally identifiable information is collected.
            Google Analytics uses cookies — small files stored on your browser. You can opt out at
            any time using the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2d9751] underline underline-offset-4"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">
            3. Third-Party Services
          </h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            Our website links to third-party platforms that have their own privacy practices:
          </p>
          <ul className="mt-3 space-y-2 text-gray-600 font-ui text-sm leading-relaxed list-disc list-inside">
            <li>
              <span className="font-semibold">Talabat</span> — When you place an order via Talabat,
              your order and personal data are handled entirely by Talabat. Please refer to{' '}
              <a
                href="https://www.talabat.com/uae/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2d9751] underline underline-offset-4"
              >
                Talabat's Privacy Policy
              </a>
              .
            </li>
            <li>
              <span className="font-semibold">Google Reviews</span> — Reviews are submitted through
              Google's platform. Any data you provide is governed by{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2d9751] underline underline-offset-4"
              >
                Google's Privacy Policy
              </a>
              .
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">
            4. Changes to This Policy
          </h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            We may update this policy from time to time. Any changes will be reflected on this page
            with an updated date at the top.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">5. Contact</h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            If you have any questions about this policy, feel free to reach us at:
            <br />
            <span className="font-semibold">📞 600560031</span>
            <br />
            <span className="font-semibold">📍 Al Nahda, Sharjah, UAE</span>
          </p>
        </div>

        {/* Footer nav */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <Link
            href="/"
            className="text-sm font-ui font-semibold text-[#2d9751] hover:underline underline-offset-4"
          >
            ← Back to Home
          </Link>
          <Link
            href="/terms"
            className="text-sm font-ui font-semibold text-[#2d9751] hover:underline underline-offset-4"
          >
            View Terms & Conditions →
          </Link>
        </div>
      </section>
    </main>
  );
}
