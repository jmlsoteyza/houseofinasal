import Image from 'next/image';

export default function MenuCard({ item }) {
  const { name, price, label, image, alt, isObjectFit } = item;

  const isTextLong = label.length >= 50;

  return (
    <div className="flex flex-col rounded-lg p-4 overflow-hidden font-ui shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
      <div className="max-w-[225px] h-[225px] w-full self-center">
        <Image
          src={image}
          alt={alt}
          width={225}
          height={225}
          className={`w-full h-full ${isObjectFit ? 'object-none' : 'object-cover'}`}
        />
      </div>

      <div className="px-3">
        <p className={`font-medium text-normal ${isTextLong ? 'mt-2' : 'mt-4'}`}>{name}</p>
        {label && <p className="text-xs text-gray-500 mt-2">{label}</p>}
        <p className={`text-sm font-medium ${!label ? 'mt-8' : 'mt-2'}`}>
          {price ? `AED ${price}` : <span className="text-gray-400 italic text-xs">Price TBC</span>}
        </p>
      </div>
    </div>
  );
}
