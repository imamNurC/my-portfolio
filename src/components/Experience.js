import React, { useState } from "react";

const experiences = [
  {
    title: "Missguided",
    description:
      "A UK-based fashion retailer that integrates Stripe for seamless checkout.",
    image: "https://via.placeholder.com/500",
    link: "#",
  },
  {
    title: "Example Experience 2",
    description: "An example of another experience description.",
    image: "https://via.placeholder.com/500",
    link: "#",
  },
  // Add more experiences as needed
];

const ExperienceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length
    );
  };

  return (
    <section
      id="experience"
      className="py-10 bg-gray-900 text-left text-gray-400"
    >
      <div className="relative bg-gray-600 p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
        {/* Display current experience */}
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-2/5 mb-4 sm:mb-0">
            <img
              className="w-48 h-32 object-cover rounded-lg"
              src={experiences[currentIndex].image}
              alt={experiences[currentIndex].title}
            />
          </div>
          <div className="w-full sm:w-3/5 p-6">
            <h2 className="text-xl text-black  font-semibold">
              {experiences[currentIndex].title}
            </h2>
            <p className="text-black">
              {experiences[currentIndex].description}
            </p>
            <div className="flex items-center space-x-4 mt-3">
              <a
                href={experiences[currentIndex].link}
                className="text-indigo-600 hover:text-indigo-900"
              >
                Learn more
              </a>
              <a
                href={experiences[currentIndex].github}
                className="text-gray-400 hover:text-black"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.111.82-.26.82-.578 0-.286-.01-1.044-.015-2.05-3.338.726-4.042-1.614-4.042-1.614-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.303 3.492.997.108-.774.42-1.304.763-1.604-2.665-.3-5.466-1.333-5.466-5.932 0-1.31.467-2.38 1.236-3.22-.125-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.474 11.474 0 013.003-.404c1.018.004 2.045.138 3.003.404 2.292-1.554 3.3-1.23 3.3-1.23.654 1.653.243 2.873.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.628-5.475 5.92.431.371.815 1.102.815 2.22 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.577C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
          <button
            onClick={prevExperience}
            className="bg-gray-300 p-2 rounded-full text-lg"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
          <button
            onClick={nextExperience}
            className="bg-gray-300 p-2 rounded-full text-lg"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
