import React from "react";
// import ExperienceSection from "./components/Experience";
import Experience from "./components/Experience";
// import Navbar from "./components/Navbar";
// import Intro from "./components/Intro";
// import "./styles/";

// Navigation Bar Component
function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 p-4 shadow-lg z-50 flex justify-between items-center transition-all duration-300 ease-in-out">
      <div className="flex space-x-6">
        <a
          href="#home"
          className="text-white hover:text-primary transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white hover:text-primary transition-colors"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-white hover:text-primary transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-white hover:text-primary transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

// Header Component
function Header() {
  return (
    <header
      id="home"
      className="h-screen bg-gray-900 flex flex-col items-center justify-center text-center"
    >
      <div className="w-full sm:w-max">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Hello,
        </h1>
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white pr-5 text-5xl sm:text-6xl font-bold text-white">
          I'm Imam Here!!
        </h1>
      </div>
      <div className="text-gray-400 font-sans">I create stuff sometimes.</div>

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

// About Section
function About() {
  return (
    <section id="about" className="py-20 bg-gray-600 text-white text-center">
      <div className="min-w-3xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
        {/* Profile Image (Square shape) */}
        <div className="w-48 h-48 lg:w-56 lg:h-56 mb-6 lg:mb-0 border-4 border-white shadow-lg">
          <img
            src="/me.jpeg" // Use correct image path here
            alt="Imam Nurcakra"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-lg ml-0 lg:ml-8 text-center lg:text-left">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-gray-300">
            I am a 7th semester Informatics Engineering student with a good
            academic track record and a specialist in Computer Science. I am
            interested in continuing to develop specialized knowledge in web
            development, research on programming, data analysis, and AI/ML. I am
            able to work in a team to solve problems, have critical thinking
            skills to find optimal solutions, and am a fast learner who is ready
            to commit and adapt easily to new challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: "LMS Student Startup",
      description: "Brief description of Project 1.",
    },
    { title: "Web Api", description: "Brief description of Project 2." },
    {
      title: "Reference of movie",
      description: "Brief description of Project 3.",
    },
    {
      title: "Financial Fraud detection",
      description: "Brief description of Project 3.",
    },
    {
      title: "Anime Recommender System",
      description: "Brief description of Project 3.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-primary">Projects</h2>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md transition-shadow hover:shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400">{project.description}</p>
            <a
              href={project.github}
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
        ))}
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-8">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-4">
          {/* Add your social links */}
          <a
            href="mailto:your-email@example.com"
            className="text-teal-400 hover:text-teal-300"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            className="text-teal-400 hover:text-teal-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-username"
            className="text-teal-400 hover:text-teal-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer
      id="contact"
      className="py-10 bg-gray-800 text-center text-gray-400"
    >
      <p className="text-gray-400">
        &copy; 2024 [Your Name]. All rights reserved.
      </p>
    </footer>
  );
}

// App Component
function App() {
  return (
    <div className="dark">
      <Nav />
      <Header />
      <About />
      {/* <ExperienceSection /> */}
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
