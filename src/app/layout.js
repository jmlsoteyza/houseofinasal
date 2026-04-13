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
  title: 'House Of Inasal',
  description:
    'House Of Inasal in Dubai serves authentic Filipino chicken inasal, grilled BBQ, silog meals, and classic Filipino comfort food. Experience the true taste of the Philippines in the UAE!',
  openGraph: {
    // Tells Google and social media platforms the name of the site
    // This is what appears above the title in Google search results
    siteName: 'House Of Inasal'
  }
};

export default function RootLayout({ children }) {
  // Schema Markup (Structured Data)
  // This tells Google that this website is a Restaurant
  // It helps Google show rich results like ratings, hours, and location
  // in search results — making your listing more visible and informative
  const jsonLd = {
    '@context': 'https://schema.org', // standard schema format used by Google
    '@type': 'Restaurant', // tells Google this is a restaurant
    name: 'House Of Inasal',
    url: 'https://houseofinasal.ae',
    servesCuisine: 'Filipino', // helps Google categorize your cuisine type
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai', // city
      addressCountry: 'AE' // country code for UAE
    }
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
        <main className="pt-[4.656rem]">{children}</main>
        <Footer />
        {/* Vercel Speed Insights - tracks performance metrics (LCP, FID, CLS) */}
        <SpeedInsights />
        {/* Vercel Analytics - tracks page views and visitor data */}
        <Analytics />
      </body>
    </html>
  );
}
