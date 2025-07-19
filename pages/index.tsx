import Head from "next/head";
import { useState } from "react";
import { HERO_BACKGROUND_IMAGE, PROPERTY_FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>StayFinder - Find Your Favorite Place</title>
      </Head>

      {/* Hero Section */}
      <section
        className="w-full h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-2xl drop-shadow-md max-w-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="px-6 py-8">
        <h2 className="text-xl font-semibold mb-4">Filter by</h2>
        <div className="flex flex-wrap gap-3">
          {PROPERTY_FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() =>
                setActiveFilter((prev) => (prev === filter ? null : filter))
              }
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="px-6 pb-16">
        <h2 className="text-xl font-semibold mb-4">Top Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </section>
    </>
  );
}
