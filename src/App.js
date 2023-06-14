import React from 'react'
import About from './Components/Body/About.js';
import Contact from './Components/Body/Contact.js';
import Navbar from './Components/Header/Navbar.js';
import Projects from './Components/Body/Projects/Projects.js';
import Skills from './Components/Body/Skills.js';
import Testimonials from './Components/Body/Testimonials.js';
import './App.css';

function App() {
  return (
    <main>
      <Navbar className='text-gray-400 bg-gray-900 body-font' />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
