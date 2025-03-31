import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/outline";
import React from "react";
import { skills } from "../../Data/collection/skills.js";

function Skills() {
  return (
    <>
      <section id="skills">
        <div
          id="container px-5 py-10 mx-auto"
          className="bg-center bg-cover bg-[url('https://images.newscientist.com/wp-content/uploads/2021/09/01154236/PRI_197379901.jpg')]"
        >
          <div className="text-center mb-20">
            <h1 className="sm:text-4x1 text-3x1 font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
            <ChipIcon className="w-3 inline-block mb-4 text-neutral-500" />
            <p className="text-base text-white mb-3 leading-relaxed x1:w-1/4 lg:w-1/4 mx-auto">
              My skills are well rounded accross the full stack including both
              backend and frontend technologies.
            </p>
          </div>
          <div className="flex grid gap-4 grid-cols-4 grid-rows-6 flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skills) => (
              <div key={skills} className="p-2 sm:w-full w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skills}
                  </span>
                </div>
              </div>
            ))}
            <br></br>
          </div>
        </div>
      </section>
    </>
  );
}

// console.log(Skills);

export default Skills;
