import Image from 'next/image';

export default function Promo() {
  const promoimage = [
    {
      src: '/images/promo1.png',
      alt: 'House of Inasal promo – discounted Chicken Inasal meal deal'
    },
    { src: '/images/promo2.png', alt: 'House of Inasal promo – exclusive Pork BBQ combo offer' },
    {
      src: '/images/promo3.png',
      alt: 'House of Inasal promo – limited time Halo-Halo and meal bundle'
    }
  ];

  return (
    <section aria-labelledby="promo-heading" className="bg-[#1b7a40] w-full py-16">
      <div className="px-6 max-w-[78.125rem] w-full mx-auto">
        <div className="inline-flex items-center justify-between w-full mb-2">
          <h2 id="promo-heading" className="text-[#FFFD34] font-heading text-heading">
            Promo & Deals
          </h2>
          <a
            href="/promos"
            aria-label="Explore all House of Inasal promos and deals"
            className="flex items-center gap-1.5 cursor-pointer"
          >
            <span className="text-white font-ui font-semibold text-md">EXPLORE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3.5"
              stroke="white"
              className="size-4"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>
        <p className="text-white font-ui mb-5">Treat yourself to our delicious promos and meals!</p>
        <div className="flex justify-between gap-12">
          {promoimage.map((item, index) => (
            <figure key={index} className="overflow-hidden rounded-lg w-[368px] h-[606px]">
              <Image
                className="object-cover"
                src={item.src}
                width={368}
                height={606}
                alt={item.alt}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
