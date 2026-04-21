import { Montserrat, Poetsen_One, Rubik } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
});

const poetsenOne = Poetsen_One({
  subsets: ['latin'],
  variable: '--font-poetsen-one',
  weight: '400'
});

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['300', '400', '500', '600', '700']
});

// SEO Metadata - this applies to all pages as a default
// Individual pages can override this with their own metadata
export const metadata = {
  metadataBase: new URL('https://houseofinasal.ae'), // ← required for canonical/OG URLs to resolve
  title: 'House Of Inasal',
  description:
    'House Of Inasal in Dubai serves authentic Filipino chicken inasal, grilled BBQ, silog meals, and classic Filipino comfort food. Experience the true taste of the Philippines in the UAE!',
  openGraph: {
    siteName: 'House Of Inasal',
    url: 'https://houseofinasal.ae',
    title: 'House Of Inasal | Filipino Restaurant at Sahara Centre, Sharjah UAE',
    // Description shown when sharing link on WhatsApp, Facebook, etc.
    description:
      'Authentic Filipino grilled meals at Sahara Centre, Sharjah UAE. Chicken Inasal, Sisig, Halo-Halo & more. Dine-in, takeout & delivery via Talabat and Noon.',
    images: [
      {
        url: 'https://houseofinasal.ae/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'House Of Inasal - Filipino Restaurant in Dubai'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  // Schema Markup (Structured Data)
  // This tells Google that this website is a Restaurant
  // It helps Google show rich results like ratings, hours, and location
  // in search results — making your listing more visible and informative
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'House Of Inasal',
    url: 'https://houseofinasal.ae',
    servesCuisine: 'Filipino',
    telephone: '+971600560031',
    email: 'info@houseofinasal.ae',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Food Court, 1st Floor, Sahara Centre, Sahara Atrium, East Atrium',
      addressLocality: 'Sharjah',
      addressCountry: 'AE'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '00:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
        opens: '10:00',
        closes: '01:00'
      }
    ],
    hasMenu: 'https://houseofinasal.ae/menu',
    priceRange: 'AED 12–45'
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poetsenOne.variable} ${rubik.variable} scroll-smooth md:scroll-auto`}
    >
      <body className="antialiased">
        {/* Injects the schema markup as a JSON-LD script tag in the page
            Google reads this to understand your business details */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {/* pt - adds top padding so content doesn't hide behind the fixed navbar */}
        <main className="pt-[4.828rem]">{children}</main>
        <Footer />
        {/* Vercel Speed Insights - tracks performance metrics (LCP, FID, CLS) */}
        <SpeedInsights />
        {/* Vercel Analytics - tracks page views and visitor data */}
        <Analytics />
      </body>
    </html>
  );
}
