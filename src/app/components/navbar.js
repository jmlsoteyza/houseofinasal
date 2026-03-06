import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] save shadow */}
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

        <ul className="flex gap-12 text-[#000] mr-4 font-medium font-ui items-center text-[0.969rem]">
          <li>
            <Link href="/menu">MENU</Link>
          </li>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/location">LOCATION</Link>
          </li>
        </ul>

        <div className="flex flex-col">
          <p className="tracking-widest text-sm font-semibold text-right font-ui leading-[0.78]">
            Call Us
          </p>
          <p className="text-primary text-lg tracking-[0.2rem] font-normal font-heading">
            0545617393
          </p>
        </div>
      </div>
    </div>
  );
}
