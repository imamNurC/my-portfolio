function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 p-4 shadow-xl z-50 flex justify-between items-center transition-all duration-300 ease-in-out">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg> */}
        <span className="font-semibold text-xl tracking-tight">
          Imam nurcakra
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-teal-500">
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
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto space-x-4">
        <div className="text-sm lg:flex-grow">
          <a
            // href="#responsive-header"
            href="#home"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline transition-all duration-300 ease-in-out mr-4"
          >
            Home
          </a>
          <a
            // href="#responsive-header"
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
        <div>
          {/* <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a> */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
