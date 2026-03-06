'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Carousel() {
  return (
    <Swiper className="w-full h-[660px]">
      <SwiperSlide>
        <img src="/food1.jpg" className="w-full h-full object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/food2.jpg" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
