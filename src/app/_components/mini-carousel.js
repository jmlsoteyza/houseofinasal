'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function MiniCarousel() {
  const miniCarouselImage = [
    '/images/mini-carousel1.png',
    '/images/mini-carousel2.png',
    '/images/mini-carousel3.png',
    '/images/mini-carousel4.png'
  ];

  console.log(miniCarouselImage);

  return (
    <>
      <div className="max-w-[1250px] w-full mt-20 mx-auto px-6">
        <div>
          <p className="text-sm tracking-widest font-ui uppercase text-gray-500">Our Best Seller</p>

          <p className="text-[#238B45] font-heading text-3xl md:text-4xl">Inasal Favorites</p>
          <p className="text-gray-600 mt-3 max-w-xl ">
            Discover the dishes our customers love the most, freshly grilled and full of flavor.
          </p>
        </div>
        <div className="flex flex-row gap-12">
          {/* <Image src="/ai.png" alt="food" width={260} height={260} /> */}
          <Image src="/ai2.png" alt="food" width={260} height={260} />
          <Image src="/ai3.png" alt="food" width={260} height={260} />
          <Image src="/ai4.png" alt="food" width={260} height={260} />
          <Image src="/ai5.png" alt="food" width={260} height={260} />
        </div>
      </div>
    </>
  );
}
