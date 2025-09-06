import { Property } from "@/types/interfaces";

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold">{property.name}</h1>
          <p className="text-gray-500 mt-2">{property.location}</p>
          <p className="mt-4 text-lg text-gray-700">{property.description}</p>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xl font-semibold">${property.price} / night</p>
            <p className="text-yellow-500">⭐ {property.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
