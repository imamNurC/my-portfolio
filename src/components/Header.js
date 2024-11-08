import FractalTree from "./Ffractial";

function Header() {
  return (
    <header
      id="home"
      className="h-screen bg-gray-900 flex flex-col items-center justify-center text-center"
    >
      <FractalTree></FractalTree>
      <div className="w-full sm:w-max">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white pr-5 text-5xl sm:text-6xl font-bold text-white">
          Hello, Imam Here!!
        </h1>
      </div>
      <div className="text-gray-600 font-sans space-y-4">
        <h4 className="text-3xl font-semibold">I create stuff sometimes.</h4>
        <h5 className="text-xl font-light max-w-md mx-auto">
          I'm a new as Software Engineer from Bekasi, Indonesia I'm fascinated
          by large-scale and high-impact products launches
        </h5>
      </div>

      <a
        href="mailto:imamnc.developer@gmail.com"
        className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-lg rounded-full shadow-lg hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <svg
          className="w-6 h-6 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path>
        </svg>
        Say hi!
      </a>
    </header>
  );
}

export default Header;
