// TypeScript Interfaces for ALX Listing App
import { ReactNode } from 'react';
// Interface for Card Component Props

export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  price?: string;  // Optional price field
}

// Interface for Button Component Props
export interface ButtonProps {
  label: string;
  onClick: () => void;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;  // Allow custom styling via Tailwind classes
}

// interfaces/index.ts

export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
    offers?: {
      bed: string;
      shower: string;
      occupants: string;
    };
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
}

// Define and export the Property interface
export interface Property {
 id: number;
  name: string;
  image: string;
  price: number;
  location: string;
  description: string;
  rating: number;
  // Add other fields as needed
}