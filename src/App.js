// //! ./src/pages
// import { About, Contact, Skills, Testimonials, Projects } from "../src/pages/";
// // import About from "./components/Body/About.jsx";
// // import Contact from "./components/Body/Contact.jsx";
// // import Skills from "./components/Body/Skills.jsx";
// //! ./src/Home
// // import Testimonials from "../src/";
// // import Testimonials from "./components/Body/Testimonials.jsx";
// //! ./src/Projects
// // import Projects from "./components/Body/Projects/Projects.jsx";
// // import Projects from "./components/Body/Projects/Projects.jsx";
// //! ./src/layouts
import {
  About,
  Contact,
  Skills,
  Testimonials,
  Projects,
} from "./frontend/pages/indexPagesBarrel.js";
import { default as Navbar } from "../src/frontend/layouts/Navbar.jsx";
// import Navbar from "./components/Header/Navbar.jsx";
import "./input.css";
import "./App.css";
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
