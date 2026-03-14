import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] z-50">
      <div className="max-w-[1250px] mx-auto flex items-center px-6 py-3 justify-between">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="hof-logo"
            width={163}
            height={59}
            className="rounded-sm"
          />
        </Link>

        <ul className="flex gap-12 text-[#000] font-medium font-ui items-center text-sm">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/menu">MENU</Link>
          </li>
          <li>
            <Link href="/location">LOCATION</Link>
          </li>
        </ul>

        <div className="flex flex-col cursor-pointer">
          <p className="text-sm font-semibold text-right font-ui leading-[0.78]">CALL US</p>
          <p className="text-[#3A9D5D] font-primary text-xl tracking-[0.2rem] font-extrabold">
            600560031
          </p>
        </div>
      </div>
    </nav>
  );
}
