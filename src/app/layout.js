import { Geist, Geist_Mono, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata = {
  title: 'House Of Inasal',
  description:
    'House Of Inasal in Dubai serves authentic Filipino chicken inasal, grilled specialties, and traditional Filipino dishes.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
