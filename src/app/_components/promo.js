import Image from 'next/image';

export default function Promo() {
  const promoimage = [
    { src: '/images/promo1.png', alt: 'promo1' },
    { src: '/images/promo2.png', alt: 'promo1' },
    { src: '/images/promo3.png', alt: 'promo1' }
  ];

  return (
    <div className="bg-green-800 w-full py-16">
      <div className=" px-6 max-w-[1250px] w-full mx-auto">
        <div className="inline-flex items-center justify-between w-full mb-2">
          <h1 className="text-[#FFFD34] font-heading text-heading">Promo & Deals</h1>
          <span className="flex items-center gap-1.5 cursor-pointer">
            <p className="text-white font-ui font-semibold text-md">EXPLORE</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3.5"
              stroke="white"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </div>
        <p className="text-white font-ui mb-5">Treat yourself to our delicious promos and meals!</p>
        <div className="flex flex justify-between gap-12">
          {promoimage.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg w-[368px] h-[606px]">
              <Image
                className="object-cover"
                src={item.src}
                width={368}
                height={606}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
