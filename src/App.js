import React from "react";
import ExperienceSection from "./components/Experience";

// Navigation Bar Component
function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-75 p-4 shadow-md z-50 flex justify-center">
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
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Hello, I'm Imam Nurcakra
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
        This is my cool stuff in portfolio
      </p>
    </header>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-20 bg-yellow-600 text-white text-center">
      <div className="min-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-300">
          I am a 7th semester Informatics Engineering student with a good
          academic track record and a specialist in Computer Science. who is
          interested in continuing to develop in specialized knowledge of web
          development, research on programming, data analysis and AI/ML. I am
          able to work in a team to solve problems, have critical thinking
          skills to find optimal solutions, and am a fast learner who is ready
          to commit and adapt easily to new challenges.
        </p>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    { title: "Project 1", description: "Brief description of Project 1." },
    { title: "Project 2", description: "Brief description of Project 2." },
    { title: "Project 3", description: "Brief description of Project 3." },
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
      <Projects />
      <ExperienceSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
