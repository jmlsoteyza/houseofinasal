'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import Image from 'next/image';

export default function Carousel() {
  return (
    <div className="relative w-full h-[660px]">
      <Swiper
        className="w-full h-full"
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          waitForTransition: true
        }}
        loop
        effect="fade"
        speed={1200}
        allowTouchMove={false}
      >
        {['/images/test.png', '/images/test1.png', '/images/test2.png'].map((src, i) => (
          <SwiperSlide key={i} className="relative overflow-hidden">
            <div className="zoom-wrapper absolute inset-0">
              <Image
                src={src}
                fill
                className="object-cover"
                alt="house of inasal foods"
                priority={i === 0}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SINGLE OVERLAY */}
      <div className="pointer-events-none flex flex-col items-center font-heading absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-center">
        <h1 className="text-8xl font-bold [text-shadow:0px_0px_50px_rgba(0,0,0,0.57)]">
          House of Inasal
        </h1>
        <p className="text-4xl mt-2">Authentic Filipino Grill</p>
      </div>
    </div>
  );
}
