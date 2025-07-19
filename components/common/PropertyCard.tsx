import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition w-full max-w-sm">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {property.name}
        </h3>
        <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
          <span>${property.price.toLocaleString()}</span>
          <span>⭐ {property.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
