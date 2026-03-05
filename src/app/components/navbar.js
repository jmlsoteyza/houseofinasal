import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] z-50">
      <div className="max-w-[1450px] mx-auto flex items-center px-6 py-2 ">
        <div className="flex items-center flex-1">
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

          <ul className="flex gap-6 ml-14 font-medium font-ui">
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
        </div>

        <div className="flex flex-col font-bold mr-8 text-lg">
          <p className="font-primary tracking-widest text-right">Call Us</p>
          <p className="text-primary text-xl tracking-widest font-heading">0582416753</p>
        </div>
      </div>
    </div>
  );
}
