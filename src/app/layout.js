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

export const metadata = {
  title: 'House Of Inasal',
  description:
    'House Of Inasal in Dubai serves authentic Filipino chicken inasal, grilled BBQ, silog meals, and classic Filipino comfort food. Experience the true taste of the Philippines in the UAE!',
  openGraph: {
    siteName: 'House Of Inasal'
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poetsenOne.variable} ${rubik.variable} scroll-smooth md:scroll-auto`}
    >
      <body className="antialiased">
        <Navbar />
        {/* py - means here is about exact spacing between the navbar and the children (height) */}
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
