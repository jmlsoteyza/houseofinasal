import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="">
      <div className="w-full max-w-[10.1875rem] h-full">
        <Image
          src="/images/test.svg"
          alt="hof-logo"
          width={159}
          height={59}
          className="w-full rounded-sm"
        />
      </div>
    </div>
  );
}
