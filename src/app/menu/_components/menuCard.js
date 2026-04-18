'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MenuCard({ item, isPreloaded, onLoaded }) {
  const { name, price, label, image, alt, isObjectFit } = item;
  const [isLoading, setIsLoading] = useState(!isPreloaded);

  useEffect(() => {
    if (isPreloaded) {
      setIsLoading(false);
    }
  }, [isPreloaded]);

  return (
    <div className="flex flex-col rounded-lg p-6 overflow-hidden font-ui shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] relative">
      <div className="max-w-[250px] h-[250px] w-full self-center relative">
        {isLoading && (
          <div className="absolute inset-0 w-full h-full bg-gray-200 rounded-lg animate-pulse" />
        )}
        <Image
          src={image}
          alt={alt}
          width={250}
          height={250}
          className={`w-full h-full ${isObjectFit ? 'object-none' : 'object-cover'} ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-300`}
          onLoad={() => {
            setIsLoading(false);
            onLoaded();
          }}
          loading="eager"
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="inline-flex flex-row align-center w-full justify-between items-center mt-4">
          <p className="font-bold text-normal text-md">{name}</p>
          <div className="absolute top-8 right-6 bg-[#FFF186] py-2 px-3 rounded-2xl">
            <p className="text-xs font-semibold text-[#1A1A1A]">
              {price ? (
                `AED ${price}`
              ) : (
                <span className="text-gray-400 italic text-xs">Price TBC</span>
              )}
            </p>
          </div>
        </div>
        {label && <p className="text-sm text-[#747474] mt-2">{label}</p>}

        <div className="mt-auto pt-4 max-md:pb-0">
          <a
            className="block py-2.5 text-md text-white bg-[#2C9751] rounded-md font-semibold text-center hover:bg-[#06481F] transition-colors duration-500"
            href="https://www.talabat.com/uae/restaurant/763104/house-of-inasal-al-nahda?aid=1518"
          >
            <button className="cursor-pointer">Order</button>
          </a>
        </div>
      </div>
    </div>
  );
}
