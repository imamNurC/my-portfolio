function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-purple-900 text-white text-center"
    >
      <div className="min-w-3xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
        {/* Profile Image (Square shape) */}
        <div className="w-48 h-48 lg:w-56 lg:h-56 mb-6 lg:mb-0 border-8 border-gray-300 shadow-xl transform hover:scale-105 hover:rotate-3 transition-all duration-300 ease-in-out relative z-10 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-full">
          <img
            src="/me.jpeg" // Use correct image path here
            alt="Imam Nurcakra"
            className="w-full h-full object-cover rounded-full border-4 border-gray-300 shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-lg ml-0 lg:ml-8 text-center lg:text-left mt-6 lg:mt-0">
          <h2 className="text-3xl font-semibold text-primary">About Me</h2>
          <p className="text-lg font-medium leading-relaxed mb-6">
            I am a 7th semester student undertaking a part-time Bachelor in
            Informatics Engineering at Universitas Bani Saleh, with a strong
            academic track record and specialization in Computer Science. I am
            passionate about continuing to develop my expertise in web
            development, programming, Big Data, Cloud, and AI/ML. I excel at
            working in teams, applying critical thinking to solve complex
            problems, and am always eager to learn and embrace new challenges.
          </p>
          <a
            href="https://instagram.com/imamnurcakra"
            className="inline-block px-6 py-3 text-lg font-semibold text-gray-900 bg-white rounded-full shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
