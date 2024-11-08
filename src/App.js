import React from "react";
// import ExperienceSection from "./components/Experience";
import Experience from "./components/Experience";
import Nav from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./styles/fractial.css";

// Navigation Bar Component

// Header Component

// About Section

// Projects Section

// Contact Section

// Footer Section
function Footer() {
  return (
    <footer
      id="contact"
      className="py-10 bg-gray-800 text-center text-gray-400"
    >
      <p className="text-gray-400">
        &copy; 2024 by Imam Nurcakra. Created with &lt;3. @All Right Reserved.
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
