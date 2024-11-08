import { useState } from "react";

function Nav() {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 p-4 shadow-xl z-50 flex justify-between items-center transition-all duration-300 ease-in-out">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* Logo or Name */}
        <span className="font-semibold text-xl tracking-tight">
          Imam Nurcakra
        </span>
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`w-full block lg:flex lg:items-center lg:w-auto space-x-4 ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#home"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline transition-all duration-300 ease-in-out mr-4"
          >
            Home
          </a>
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline transition-all duration-300 ease-in-out mr-4"
          >
            About
          </a>
          <a
            href="#experience"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline transition-all duration-300 ease-in-out mr-4"
          >
            Experiences
          </a>
          <a
            href="#projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline transition-all duration-300 ease-in-out mr-4"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline transition-all duration-300 ease-in-out mr-4"
          >
            Contacts
          </a>
        </div>
        <div>{/* Optional extra buttons (e.g., Download) */}</div>
      </div>
    </nav>
  );
}

export default Nav;
