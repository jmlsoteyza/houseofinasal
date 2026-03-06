import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] save shadow */}
      <div className="max-w-[1250px] mx-auto flex items-center px-6 py-3 justify-between">
        <Link href="/">
          <div className="w-full max-w-[10.1875rem] cursor-pointer">
            <Image
              src="/images/logo.svg"
              alt="hof-logo"
              width={163}
              height={59}
              className="w-full rounded-sm"
            />
          </div>
        </Link>

        <ul className="flex gap-12 mr-4 font-medium font-ui items-center text-[0.938rem]">
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/location">Location</Link>
          </li>
        </ul>

        <div className="flex flex-col font-bold">
          <p className="font-primary tracking-widest text-right font-ui">Call Us</p>
          <p className="text-primary text-lg tracking-[0.2rem] font-heading">0582416753</p>
        </div>
      </div>
    </div>
  );
}
