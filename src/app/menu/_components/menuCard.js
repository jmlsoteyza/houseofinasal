import Image from 'next/image';

export default function MenuCard({ item }) {
  const { name, price, label, description, image, isObjectFit } = item;

  // box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; (hover)

  return (
    <div className="flex flex-col rounded-lg p-4 overflow-hidden font-ui shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
      {image !== 'none yet' ? (
        <div className="max-w-[225px] h-[225px] w-full self-center">
          <Image
            src={image}
            alt={name}
            width={225}
            height={225}
            className={`w-full h-full ${isObjectFit ? 'object-none' : 'object-cover'}`}
          />
        </div>
      ) : (
        <div className="aspect-[4/3] bg-gray-100 rounded-md" />
      )}
      <div className="px-3">
        <p className="font-medium text-center text-normal mt-2">{name}</p>
        {label && <p className="text-xs text-gray-500 mt-2">{label}</p>}
        <p className={`text-sm font-medium mt-2 ${!label ? 'mt-8' : 'mt-2'}`}>
          {price ? `AED ${price}` : <span className="text-gray-400 italic text-xs">Price TBC</span>}
        </p>
      </div>
    </div>
  );
}
