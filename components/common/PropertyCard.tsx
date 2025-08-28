interface Property {
  id: number;
  name: string;
  image: string;
  price: number;
  location: string;
  rating: number;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{property.name}</h2>
        <p className="text-gray-500">{property.location}</p>
        <p className="mt-2 font-bold">${property.price} / night</p>
        <p className="text-yellow-500">⭐ {property.rating}</p>
      </div>
    </div>
  );
}
