import React from "react";
import About from "./Components/Body/About.jsx";
import Contact from "./Components/Body/Contact.jsx";
import Navbar from "./Components/Header/Navbar.jsx";
import Projects from "./Components/Body/Projects/Projects.jsx";
import Skills from "./Components/Body/Skills.jsx";
import Testimonials from "./Components/Body/Testimonials.jsx";
import "../src/input.css";
// import './App.css';

function App() {
  return (
    <main>
      <Navbar className="text-gray-400 bg-green-900 body-font" />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
