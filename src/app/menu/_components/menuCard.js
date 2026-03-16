export default function MenuCard({ item }) {
  const { name, price, label, description, image } = item;

  return (
    <div className="border rounded-lg overflow-hidden self-start h-[400px]">
      <div className="aspect-[4/3] bg-gray-100">
        {image !== 'none yet' && (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="p-3">
        <p className="font-medium text-sm">{name}</p>
        {label && <p className="text-xs text-gray-500 mt-1">{label}</p>}
        {description && <p className="text-xs text-gray-400 mt-1">{description}</p>}
        <p className="text-sm font-medium mt-2">
          {price ? `AED ${price}` : <span className="text-gray-400 italic text-xs">Price TBC</span>}
        </p>
      </div>
    </div>
  );
}
