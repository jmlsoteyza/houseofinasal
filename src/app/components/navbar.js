import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] z-50">
      <div className="max-w-[1450px] mx-auto flex items-center px-6 py-4">
        <div className="flex items-center flex-1">
          <div className="w-full max-w-[10.1875rem] cursor-pointer">
            <Image
              src="/images/logo.svg"
              alt="hof-logo"
              width={163}
              height={59}
              className="w-full rounded-sm"
            />
          </div>

          <ul className="flex gap-3 ml-14 font-bold">
            <li>Menu</li>
            <li>Location</li>
            <li>Home</li>
          </ul>
        </div>

        <div className="flex flex-col font-bold">
          <p>Call Us</p>
          <p>0582416753</p>
        </div>
      </div>
    </div>
  );
}
