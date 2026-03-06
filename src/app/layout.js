import { Montserrat, Poetsen_One, Rubik } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

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
    'House Of Inasal in Dubai serves authentic Filipino chicken inasal, grilled specialties, and traditional Filipino dishes.'
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poetsenOne.variable} ${rubik.variable} antialiased scroll-smooth md:scroll-auto`}
    >
      <body>
        <Navbar />
        {/* pt - means, exact spacing between the navbar and the children (height) */}
        <main className="pt-[4.625rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
