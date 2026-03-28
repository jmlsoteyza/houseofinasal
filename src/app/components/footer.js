import Image from 'next/image';
import Link from 'next/link';

const navigate = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Location', href: '/location' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' }
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/houseofinasaluae/',
    icon: (
      <svg className="w-3.5 h-3.5" fill="#000" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    )
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/house_of_inasal/',
    icon: (
      <svg className="w-3.5 h-3.5" fill="#000" viewBox="0 0 24 24">
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" fill="none" stroke="#000" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    )
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/600560031',
    icon: (
      <svg className="w-3.5 h-3.5" fill="#000" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    )
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@house_of_inasal',
    icon: (
      <svg className="w-3.5 h-3.5" fill="#000" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    )
  }
];

const deliveryLinks = [
  {
    label: 'Noon',
    href: 'https://www.noon.com',
    img: 'https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg',
    bg: '#feee00'
  },
  {
    label: 'Talabat',
    href: 'https://www.talabat.com/uae/restaurant/763104/house-of-inasal-al-nahda?aid=1518',
    img: 'https://www.talabat.com/assets/images/remix-logo.svg',
    bg: '#ff5900'
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#1b7a40] text-gray-300">
      {/* Main footer content */}
      <div className="max-w-[78.125rem] mx-auto px-6 py-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Branding */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="max-w-[165px]">
            <Image
              src="/images/logo.svg"
              alt="hof-logo"
              width={165}
              height={59}
              className="rounded-sm cursor-pointer"
            />
          </Link>
          {/* Social icons */}
          <div className="flex gap-[.938rem] mt-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-7 h-7 rounded-full bg-white hover:bg-gray-300 hover:text-gray-900 text-gray-400 flex items-center justify-center transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navigate</h4>
          <ul className="flex flex-col gap-3">
            {navigate.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white font-semibold hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-4 text-sm font-semibold text-white">
            <li className="flex gap-2">
              <span className="mt-0.5">📍</span>
              <span>
                Food Court, 1st Floor, Sahara Centre, Sahara Atrium, East Atrium, Sharjah, UAE
              </span>
            </li>
            <li className="flex gap-2">
              <span>📞</span>
              <a href="tel:600560031" className="hover:text-yellow-400 transition-colors">
                +971 600 560 031
              </a>
            </li>
            <li className="flex gap-2">
              <span>✉️</span>
              <a
                href="mailto:houseofinasal@gmail.com"
                className="hover:text-yellow-400 transition-colors break-all"
              >
                houseofinasal@gmail.com
              </a>
            </li>
            <li className="flex gap-2">
              <span>🕐</span>
              <span>
                Mon–Thu: 10:00 AM – 12:00 AM
                <br />
                Fri–Sun: 10:00 AM – 1:00 AM
              </span>
            </li>
          </ul>
        </div>

        {/* Order Online */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
            Order Online
          </h4>
          <div className="flex flex-row gap-3">
            {deliveryLinks.map((d) => (
              <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" className="">
                <div
                  className="h-6 w-full rounded-md flex items-center justify-center p-4"
                  style={{ backgroundColor: d.bg }}
                >
                  <Image src={d.img} alt={`${d.label}-logo`} width={60} height={60} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white w-full mx-auto">
        <div className="max-w-[1250px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs align-center text-white content-center">
          <span className="font-semibold">
            © 2025 House of Inasal. All rights reserved.
            {/* Made with 🤍 by{' '}
            <a
              href="https://jmlsoteyza.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              jmlsoteyza
            </a> */}
          </span>
          <div className="flex gap-4 font-semibold">
            <Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-yellow-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
