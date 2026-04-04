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
    <div className="flex flex-col rounded-lg p-4 overflow-hidden font-ui shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
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

      <div className="px-2 flex flex-col flex-1">
        <div className="inline-flex flex-row align-center w-full justify-between items-center mt-4">
          <p className="font-medium text-normal text-md">{name}</p>
          <p className="text-md font-medium">
            {price ? (
              `AED ${price}`
            ) : (
              <span className="text-gray-400 italic text-xs">Price TBC</span>
            )}
          </p>
        </div>
        {label && <p className="text-xs text-gray-500 mt-2.5">{label}</p>}

        <div className="mt-auto pt-5 pb-1 max-md:pb-0">
          <a
            className="block py-3 text-sm text-white bg-[#2C9751] rounded-sm font-semibold text-center hover:bg-[#06481F] transition-colors duration-500"
            href="https://www.talabat.com/uae/restaurant/763104/house-of-inasal-al-nahda?aid=1518"
          >
            <button className="cursor-pointer">Order Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
