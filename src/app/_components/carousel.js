'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import Image from 'next/image';

export default function Carousel() {
  const carouselimage = [
    {
      src: '/images/carousel.png',
      alt: 'House of Inasal – grilled Filipino meals served fresh daily'
    },
    {
      src: '/images/carouseltwo.png',
      alt: 'House of Inasal – Chicken Inasal and Pork BBQ bestsellers'
    },
    {
      src: '/images/carousel3.png',
      alt: 'House of Inasal – dine-in, takeout, and delivery available'
    }
  ];

  return (
    <section
      aria-label="House of Inasal promotional carousel"
      className="relative w-full h-[570px]"
    >
      <Swiper
        className="w-full h-full"
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3500, disableOnInteraction: false, waitForTransition: true }}
        loop
        effect="fade"
        speed={1200}
        allowTouchMove={false}
      >
        {carouselimage.map((item, i) => (
          <SwiperSlide key={i} className="relative overflow-hidden pointer-events-none">
            <div className="zoom-wrapper absolute inset-0">
              <Image
                src={item.src}
                fill
                className="object-cover pointer-events-none"
                alt={item.alt}
                priority={i === 0}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex flex-col items-center font-heading absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-center">
        <h1 className="text-[5.375rem] text-[#EAECEF] [text-shadow:0px_0px_30px_rgba(0,0,0,0.57)]">
          HOUSE OF INASAL
        </h1>
        <p className="text-4xl text-[#EAECEF] mt-2 [text-shadow:0px_0px_30pxpx_rgba(0,0,0,0.57)]">
          YOUR NEIGHBORHOOD GRILL
        </p>
      </div>
    </section>
  );
}
