'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function MiniCarousel() {
  const miniCarouselImage = [
    { src: '/images/1.png', text: 'kalabasa', alt: 'pecho' },
    { src: '/images/2.png', text: 'kalabasa', alt: 'pecho' },
    { src: '/images/3.png', text: 'kalabasa', alt: 'pecho' },
    { src: '/images/4.png', text: 'kalabasa', alt: 'pecho' },
    { src: '/images/5.png', text: 'kalabasa', alt: 'pecho' }
  ];

  return (
    <div className="max-w-[1150px] w-full mt-20 mx-auto px-6">
      {/* Section Header */}
      <div>
        <p className="text-sm tracking-widest font-ui uppercase text-gray-500">Our Best Seller</p>
        <h2 className="text-[#238B45] font-heading text-3xl">Inasal Favorites</h2>
      </div>

      {/* Carousel */}
      <div className="w-full mt-4 overflow-visible">
        <Swiper
          modules={[Navigation]}
          spaceBetween={80}
          slidesPerView={4}
          slidesPerGroup={1}
          navigation
          loop
        >
          {miniCarouselImage.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center w-[225px]">
                <div className="w-[225px] h-[225px] overflow-hidden">
                  <Image
                    className="rounded-xl object-cover"
                    src={item.src}
                    alt={item.alt}
                    width={225}
                    height={225}
                  />
                </div>
                <p className="mt-2 text-center">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
