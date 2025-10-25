import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">The Coding School</h2>
          <p className="text-sm text-gray-400 mt-1">
            Learn. Practice. Build. — Your path to becoming a web developer.
          </p>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
          <Link to="/html" className="hover:text-blue-400 transition duration-300">HTML</Link>
          <Link to="/about" className="hover:text-blue-400 transition duration-300">About</Link>
        </div>

        {/* Right Section - Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} The Coding School. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
