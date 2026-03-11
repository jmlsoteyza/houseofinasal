'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

// Note: text styles and arrow (not sure about the styles yet.)

export default function InasalSlider() {
  const minicarouselimage = [
    { src: '/images/1.png', text: 'Pecho', alt: 'pecho' },
    { src: '/images/2.png', text: 'Sisig', alt: 'sisig' },
    { src: '/images/3.png', text: 'halo-halo', alt: 'halohalo' },
    { src: '/images/4.png', text: 'kalabasa', alt: 'pecho' },
    { src: '/images/5.png', text: 'kalabasa', alt: 'pecho' }
  ];

  return (
    // Exception max-width because of the swiper design.
    <div className="max-w-[1205px] w-full mt-20 mx-auto">
      {/* Section Header */}
      <div>
        <p className="text-sm tracking-widest font-ui uppercase text-gray-500">Our Best Seller</p>
        <h2 className="text-[#238B45] font-heading text-heading">Inasal Favorites</h2>
      </div>

      {/* Carousel */}
      <div className="w-full mt-4 px-2 overflow-visible">
        <Swiper
          modules={[Navigation]}
          spaceBetween={80}
          slidesPerView={4}
          slidesPerGroup={1}
          navigation
          loop
        >
          {minicarouselimage.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center w-[225px] relative">
                <div className="w-[225px] h-[225px] overflow-hidden">
                  <Image
                    className="rounded-xl object-cover"
                    src={item.src}
                    alt={item.alt}
                    width={225}
                    height={225}
                  />
                </div>
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-lg">
                  <p className="inline-block bg-black/20 text-xs px-1 py-1 rounded text-white font-semibold text-sm uppercase text-center">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
