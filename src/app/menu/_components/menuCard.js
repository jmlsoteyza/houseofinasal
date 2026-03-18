import Image from 'next/image';

export default function MenuCard({ item }) {
  const { name, price, label, description, image } = item;

  return (
    <div className="flex flex-col shadow-md rounded-lg p-4 overflow-hidden font-ui">
      {image !== 'none yet' ? (
        <div className="max-w-[225px] h-[225px] w-full self-center">
          <Image
            src={image}
            alt={name}
            width={225}
            height={225}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] bg-gray-100 rounded-md" />
      )}
      <div className="p-3">
        <p className="font-medium text-sm text-center">{name}</p>
        {label && <p className="text-xs text-gray-500 mt-1">{label}</p>}
        <p className="text-sm font-medium mt-2">
          {price ? `AED ${price}` : <span className="text-gray-400 italic text-xs">Price TBC</span>}
        </p>
      </div>
    </div>
  );
}
