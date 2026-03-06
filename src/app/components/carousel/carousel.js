'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import Image from 'next/image';

export default function Carousel() {
  return (
    <Swiper
      className="w-full h-[660px]"
      modules={[Autoplay, EffectFade]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        waitForTransition: true // make sure animation finished before next slide
      }}
      loop
      effect="fade"
      speed={1200}
      allowTouchMove={false}
    >
      <SwiperSlide className="relative overflow-hidden">
        <div className="zoom-wrapper absolute inset-0">
          <Image
            src="/images/test.png"
            fill
            className="object-cover"
            alt="house of inasal foods"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
        <div className="absolute bottom-20 left-10 text-white z-10">
          <h1 className="text-4xl font-bold">House of Inasal</h1>
          <p className="mt-2">Authentic Filipino Grill</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative overflow-hidden">
        <div className="zoom-wrapper absolute inset-0">
          <Image
            src="/images/test1.png"
            fill
            className="object-cover"
            alt="house of inasal foods"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-20 left-10 text-white z-10">
          <h1 className="text-4xl font-bold">House of Inasal</h1>
          <p className="mt-2">Authentic Filipino Grill</p>
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative overflow-hidden">
        <div className="zoom-wrapper absolute inset-0">
          <Image
            src="/images/test2.png"
            fill
            className="object-cover"
            alt="house of inasal foods"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-20 left-10 text-white z-10">
          <h1 className="text-4xl font-bold">House of Inasal</h1>
          <p className="mt-2">Authentic Filipino Grill</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
