import Image from 'next/image';

export default function Promo() {
  const promoImages = [
    { src: '/images/promo1.png', alt: 'promo1' },
    { src: '/images/promo2.png', alt: 'promo1' },
    { src: '/images/promo3.png', alt: 'promo1' }
  ];

  return (
    <div className="mt-18 pt-1 bg-green-800 w-full">
      <div className="py-10 max-w-[1250px] px-6 w-full mx-auto">
        <div>
          <h1 className="text-primary font-heading text-3xl">Promo & Deals</h1>
          <p>Test</p>
        </div>
        <div className="flex flex justify-between gap-12">
          {promoImages.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-xl w-[368px]">
              <Image
                className="object-cover"
                src={item.src}
                width={400}
                height={400}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
