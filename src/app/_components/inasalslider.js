'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function InasalSlider() {
  const minicarouselimage = [
    {
      src: '/images/1.png',
      text: 'Pecho',
      alt: 'Chicken Pecho – House of Inasal grilled chicken best seller'
    },
    {
      src: '/images/2.png',
      text: 'Sisig',
      alt: 'Sisig – sizzling Filipino pork dish at House of Inasal'
    },
    {
      src: '/images/3.png',
      text: 'Banana con yelo',
      alt: 'Banana con Yelo – classic Filipino shaved ice dessert at House of Inasal'
    },
    {
      src: '/images/4.png',
      text: 'Tofu Sisig',
      alt: 'Tofu Sisig – plant-based sizzling sisig at House of Inasal'
    },
    {
      src: '/images/5.png',
      text: 'Chicken Katsu',
      alt: 'Chicken Katsu – crispy breaded chicken cutlet at House of Inasal'
    }
  ];

  return (
    <section aria-labelledby="bestseller-heading" className="max-w-[1205px] w-full my-18 mx-auto">
      {/* Section Header */}
      <header>
        <p className="text-sm tracking-widest font-ui uppercase text-gray-500">Our Best Seller</p>
        <h2 id="bestseller-heading" className="text-primary-heading font-heading text-heading">
          Inasal Favorites
        </h2>
      </header>

      {/* Carousel */}
      <div className="w-full mt-4 px-2 overflow-visible">
        <div role="region" aria-label="Inasal Favorites carousel">
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
                <figure className="flex flex-col items-center w-[225px] relative">
                  <div className="w-[225px] h-[225px] overflow-hidden">
                    <Image
                      className="rounded-xl object-cover"
                      src={item.src}
                      alt={item.alt}
                      width={225}
                      height={225}
                    />
                  </div>
                  <figcaption className="absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-lg">
                    <span className="inline-block bg-black/20 text-xs px-1 py-1 rounded text-white font-semibold text-sm uppercase text-center">
                      {item.text}
                    </span>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
