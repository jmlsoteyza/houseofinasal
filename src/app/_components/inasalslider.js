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
      text: 'Halo-halo',
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
    <section
      aria-labelledby="bestseller-heading"
      className="max-w-[1205px] w-full mt-14 mb-16 mx-auto 
      max-[1200px]:px-8
      max-md:px-5
      "
    >
      {/* Section Header */}
      <header>
        <p className="text-sm tracking-widest font-ui uppercase text-gray-500">Our Best Seller</p>
        <h2 id="bestseller-heading" className="text-primary-heading font-heading text-heading">
          Inasal Favorites
        </h2>
      </header>

      {/* Carousel */}
      <div className="w-full mt-4 overflow-visible">
        <div role="region" aria-label="Inasal Favorites carousel">
          <Swiper
            modules={[Navigation]}
            style={{ '--swiper-navigation-color': '#fff' }}
            className="
            relative
            [&_.swiper-button-next]:bg-[#1A773E]
            [&_.swiper-button-prev]:bg-[#1A773E]
            [&_.swiper-button-next]:hover:bg-[#176F2A]
            [&_.swiper-button-prev]:hover:bg-[#176F2A]
            [&_.swiper-button-next]:duration-200
            [&_.swiper-button-prev]:duration-200
            [&_.swiper-button-next]:rounded-full
            [&_.swiper-button-prev]:rounded-full
            [&_.swiper-button-next_svg]:scale-50
            [&_.swiper-button-prev_svg]:scale-50
            [&_.swiper-button-next]:!w-8
            [&_.swiper-button-next]:!h-8
            [&_.swiper-button-prev]:!w-8
            [&_.swiper-button-prev]:!h-8
            [&_.swiper-button-next]:ring-1
            [&_.swiper-button-next]:ring-white
            [&_.swiper-button-prev]:ring-1
            [&_.swiper-button-prev]:ring-white
  "
            navigation
            observer={true}
            observeParents={true}
            loop
            slidesPerView={4}
            spaceBetween={80}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 45
              },
              1100: {
                slidesPerView: 4,
                spaceBetween: 80
              }
            }}
          >
            {minicarouselimage.map((item, index) => (
              <SwiperSlide key={index}>
                <figure className="flex flex-col items-center w-full relative">
                  {/* Image container (responsive square) */}
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={400}
                      className="object-cover rounded-xl"
                    />
                  </div>

                  {/* Label */}
                  <figcaption className="absolute bottom-2 left-1/2 -translate-x-1/2">
                    <span className="block bg-black/30 backdrop-blur-sm text-white text-xs px-3 py-1 rounded font-semibold uppercase w-full text-center line-clamp-2 leading-tight">
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
