// import { react } from "react";
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

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
