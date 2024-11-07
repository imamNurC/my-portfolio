import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 shadow-xl z-50 flex justify-between items-center transition-all duration-300 ease-in-out">
      {/* Logo or Branding */}
      <div className="text-white font-bold text-xl hover:text-primary transition-colors duration-300 ease-in-out">
        <a href="#home" className="flex items-center">
          <svg className="w-8 h-8 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M12 2L2 7h3v7h4V7h3z" />
          </svg>
          MyPortfolio
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center">
        <NavItem href="#home" label="Home" />
        <NavItem href="#about" label="About" />
        <NavItem href="#projects" label="Projects" />
        <NavItem href="#contact" label="Contact" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 space-y-4 flex flex-col items-center`}
      >
        <NavItem href="#home" label="Home" closeMenu={() => setIsOpen(false)} />
        <NavItem href="#about" label="About" closeMenu={() => setIsOpen(false)} />
        <NavItem href="#projects" label="Projects" closeMenu={() => setIsOpen(false)} />
        <NavItem href="#contact" label="Contact" closeMenu={() => setIsOpen(false)} />
      </div>
    </nav>
  );
}

function NavItem({ href, label, closeMenu }) {
  return (
    <a
      href={href}
      onClick={closeMenu}
      className="text-white hover:text-yellow-400 text-lg font-semibold transform transition-all duration-300 ease-in-out hover:scale-105 hover:text-shadow-lg"
    >
      {label}
    </a>
  );
}

export default Navbar;
