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

