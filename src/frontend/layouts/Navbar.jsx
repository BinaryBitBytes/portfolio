import React from "react";
// import { ArrowRightIcon } from '@heroicons/react/solid';
import Name from "./header/Name.jsx";
import { default as contactNav } from "../../frontend/components/elements/contactNav.jsx";
import { default as CLIENTtestNAV } from "../../frontend/components/elements/clientTestimonialsNav.jsx";
import { default as PROJECTnav } from "../../frontend/components/elements/projectsNav.jsx";
import { default as SKILLSnav } from "../../frontend/components/elements/skillsNav.jsx";
const Navbar = () => {
  let CLIENTnav = CLIENTtestNAV;
  let CONTACTnav = contactNav;
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center">
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="text-gray-400 bg-green-900 body-font">
          <a
            className="title-font font-medium text-white mb-4 md:mb-0"
            href="Navigation Bar"
          >
            <Name href="#about" className="ml-3 text-xl flex" />
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <PROJECTnav />

            <SKILLSnav />

            <CLIENTnav />

            <CONTACTnav />
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
