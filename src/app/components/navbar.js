'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { label: 'HOME', href: '/' },
    { label: 'MENU', href: '/menu' },
    { label: 'LOCATION', href: '/location' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] z-50">
      <div className="max-w-[78.125rem] mx-auto flex items-center px-6 py-3 justify-between relative">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="hof-logo"
            width={163}
            height={59}
            className="rounded-sm"
          />
        </Link>

        <ul className="flex gap-12 text-[#000] font-medium font-ui text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative flex items-center after:absolute after:bottom-0 after:left-0 after:top-[40px] after:w-full after:h-[2.5px] after:transition-all after:duration-200 after:pointer-events-none
        ${
          pathname === link.href
            ? 'text-[#2C9751] after:bg-[#2C9751]'
            : 'text-black hover:text-[#2C9751] after:bg-transparent hover:after:bg-[#2C9751]'
        }`}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <a className="flex flex-col cursor-pointer" href="tel:600560031">
          <p className="text-sm font-semibold text-right font-ui leading-[0.78]">CALL US</p>
          <p className="text-[#3A9D5D] font-primary text-xl tracking-[0.2rem] font-extrabold">
            600560031
          </p>
        </a>
      </div>
    </nav>
  );
}
