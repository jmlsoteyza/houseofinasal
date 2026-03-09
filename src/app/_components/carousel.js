'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import Image from 'next/image';

export default function Carousel() {
  return (
    <div className="relative w-full mt-16.5 h-[570px]">
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
        {['/images/carousel.png', '/images/carouseltwo.png', '/images/carousel3.png'].map(
          (src, i) => (
            <SwiperSlide key={i} className="relative overflow-hidden pointer-events-none">
              <div className="zoom-wrapper absolute inset-0">
                <Image
                  src={src}
                  fill
                  className="object-cover pointer-events-none"
                  alt="house of inasal foods"
                  priority={i === 0}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent" />
            </SwiperSlide>
          )
        )}
      </Swiper>

      {/* SINGLE OVERLAY */}
      <div className="w-full flex flex-col items-center font-heading absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20 text-center">
        {/* text color option -> #FEF9E7, #FFFDF5, #EAECEF */}
        <h1 className="text-[5.375rem] text-[#EAECEF] [text-shadow:0px_0px_30px_rgba(0,0,0,0.57)]">
          HOUSE OF INASAL
        </h1>
        <p className="text-4xl text-[#EAECEF] mt-2 [text-shadow:0px_0px_30pxpx_rgba(0,0,0,0.57)]">
          YOUR NEIGHBORHOOD GRILL
        </p>
      </div>
    </div>
  );
}
