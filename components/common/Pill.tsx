import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 rounded-full text-sm border transition 
        ${
          isActive
            ? "bg-green-600 text-white border-green-600"
            : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
        }`}
    >
      {label}
    </button>
  );
};

export default Pill;
