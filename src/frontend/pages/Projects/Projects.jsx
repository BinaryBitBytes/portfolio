// import { ComputerDesktopIcon } from "@heroicons/react/16/solid";
// import React from "react";
import ProjectsList from "./ProjectsList.jsx";
import ProjectsCard from "./ProjectsCard.jsx";

function Projects() {
  return (
    <div>
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="flex flex-col mb-20 container px-5 py-10 mx-auto text-center lg:px-40">
          {/* <ComputerDesktopIcon className="mx-auto inline-block w-4 mb-4 text-red-500" /> */}
          <ProjectsList />
          <ProjectsCard />
        </div>
      </section>
    </div>
  );
}
export default Projects;
