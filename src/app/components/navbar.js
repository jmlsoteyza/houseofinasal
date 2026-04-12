'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = [
    { label: 'HOME', href: '/' },
    { label: 'MENU', href: '/menu' },
    { label: 'LOCATION', href: '/location' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] z-50">
      <div
        className="max-w-[78.125rem] mx-auto flex items-center px-6 py-3 
      max-md:px-5
      relative
      "
      >
        <Link href="/" className="cursor-pointer max-w-[163px]">
          <Image
            src="/images/logo.webp"
            alt="hof-logo"
            width={163}
            height={53}
            className="rounded-sm w-[163px] h-[53px]"
            quality={100}
          />
        </Link>
        {/* #2d9751 */}
        {/* Desktop links */}
        <ul className="hidden lg:flex gap-12 text-[#000] font-medium font-ui text-sm absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative flex items-center transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:top-[38px] after:w-full after:h-[3px] after:transition-all after:duration-200 after:pointer-events-none
                ${
                  pathname === link.href
                    ? 'text-[#2d9751] after:bg-[#2d9751]'
                    : 'text-black hover:text-[#2d9751] after:bg-transparent hover:after:bg-[#2d9751]'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Desktop call */}
        <div className="flex flex-row gap-8 items-center ml-auto">
          <a href="tel:600560031" className="hidden lg:flex flex-col cursor-pointer pt-2">
            <p className="text-sm font-semibold text-right font-ui leading-[0.78]">CALL US</p>
            <p className="text-[#3A9D5D] font-primary text-xl tracking-[0.2rem] font-extrabold">
              600560031
            </p>
          </a>
          <a
            className="py-3 px-4 text-xs text-white bg-green-700 rounded-md font-bold hover:bg-[#06481F] transition-colors duration-500 max-[1025px]:hidden
          "
            href="https://www.talabat.com/uae/restaurant/763104/house-of-inasal-al-nahda?aid=1518"
          >
            <button className="cursor-pointer">Order Now</button>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setDrawerOpen(true)}
        >
          <span className="w-6 h-[2px] bg-black block" />
          <span className="w-6 h-[2px] bg-black block" />
          <span className="w-6 h-[2px] bg-black block" />
        </button>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-xl flex flex-col px-8 py-10 gap-8 transition-transform duration-300 lg:hidden
          ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close button */}
        <button className="self-end text-xl cursor-pointer" onClick={() => setDrawerOpen(false)}>
          ✕
        </button>

        {/* Drawer links */}
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setDrawerOpen(false)}
            className={`text-lg font-medium font-ui
              ${pathname === link.href ? 'text-[#2C9751] border-[#2C9751]' : 'text-black'}`}
          >
            {link.label}
          </Link>
        ))}

        <a href="tel:600560031" className="mt-auto flex flex-col">
          <p className="text-sm font-semibold font-ui leading-[0.78]">CALL US</p>
          <p className="text-[#3A9D5D] font-primary text-xl tracking-[0.2rem] font-extrabold">
            600560031
          </p>
        </a>
      </div>
    </nav>
  );
}
