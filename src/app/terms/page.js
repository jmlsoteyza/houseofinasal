import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | House of Inasal',
  description: 'Terms and Conditions for House of Inasal UAE.'
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f6]">
      {/* Hero */}
      <section className="bg-[#2d9751] text-white py-16 px-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] font-ui font-semibold text-green-200 mb-3">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-primary font-extrabold">Terms & Conditions</h1>
        <p className="mt-4 text-green-200 font-ui text-sm">Last updated: January 2025</p>
      </section>

      <section className="max-w-[820px] mx-auto px-6 py-12 space-y-10">
        {/* Intro */}
        <p className="text-gray-600 font-ui text-base leading-relaxed">
          By visiting the House of Inasal website, you agree to the following terms. This is a
          static informational website — we do not sell products directly, manage accounts, or
          process payments here.
        </p>

        {/* Section 1 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">1. Website Use</h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            This website is provided for informational purposes only — to share our menu, location,
            and contact details. You may not use this website for any unlawful purpose or in a way
            that could damage or disrupt its availability.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">
            2. Ordering & Payments
          </h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            All orders are placed and processed through{' '}
            <a
              href="https://www.talabat.com/uae/restaurant/763104/house-of-inasal-al-nahda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2d9751] underline underline-offset-4"
            >
              Talabat
            </a>
            . We are not responsible for any issues arising from orders placed via third-party
            platforms. Please refer to Talabat's own Terms & Conditions for order disputes, refunds,
            and delivery concerns.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">3. Menu & Pricing</h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            Menu items, prices, and availability are subject to change without notice. For the most
            up-to-date information, please check our Talabat page or call us directly at 600560031.
            If you have a food allergy or dietary requirement, please contact us before ordering.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">
            4. Intellectual Property
          </h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            All content on this website — including the House of Inasal name, logo, images, and
            branding — is owned by House of Inasal. You may not reproduce or use any of it without
            our written permission.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">5. Google Reviews</h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            Customer reviews are hosted on Google and are subject to{' '}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2d9751] underline underline-offset-4"
            >
              Google's Terms of Service
            </a>
            . We welcome honest feedback but are not responsible for the content of reviews posted
            by third parties.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            House of Inasal is not liable for any damages resulting from the use of this website or
            reliance on its content. All external links (e.g. Talabat, Google) are provided for
            convenience — we have no control over their content or services.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">7. Governing Law</h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            These terms are governed by the laws of the United Arab Emirates. Any disputes shall
            fall under the jurisdiction of the courts of the UAE.
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className="text-lg font-primary font-bold text-[#1a1a1a] mb-3">8. Contact</h2>
          <p className="text-gray-600 font-ui text-sm leading-relaxed">
            For any questions, reach us at:
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
            href="/privacy-policy"
            className="text-sm font-ui font-semibold text-[#2d9751] hover:underline underline-offset-4"
          >
            View Privacy Policy →
          </Link>
        </div>
      </section>
    </main>
  );
}
