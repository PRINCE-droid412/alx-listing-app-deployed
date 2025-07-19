import React from 'react'

const Header: React.FC= () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-600 mb-2 md:mb-0">
        StayFinder
      </div>

      {/* Accommodation Types */}
      <nav className="flex flex-wrap gap-3 text-sm text-gray-600 mb-2 md:mb-0">
        {["Rooms", "Mansion", "Countryside", "Beachfront", "Mountain View", "City"].map(type => (
          <button
            key={type}
            className="hover:text-green-500 transition-colors duration-200"
          >
            {type}
          </button>
        ))}
      </nav>

      {/* Right Section: Search + Auth */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-3 py-1 text-sm w-full md:w-48"
        />
        {/* Auth Links */}
        <div className="flex gap-2 text-sm">
          <button className="text-gray-700 hover:text-green-600">Sign In</button>
          <button className="text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700">
            Sign Up
          </button>
        </div>
      </div>
    </header> 
  )
}

export default Header
