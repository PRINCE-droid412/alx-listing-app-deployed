import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 text-center text-sm mt-10">
      <div className="mb-2">&copy; {new Date().getFullYear()} StayFinder. All rights reserved.</div>
      <div className="space-x-4">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  )
}

export default Footer
