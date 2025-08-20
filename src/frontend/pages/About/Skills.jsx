// import { CodeBracketIcon, CpuChipIcon } from "@heroicons/react/16/solid";
import React from "react";
import { skills } from "../../../backend/assets/data/collection/Skills.js";
const backgroundGalactic = {
  src: "https://images.newscientist.com/wp-content/uploads/2021/09/01154236/PRI_197379901.jpg",
  alt: "A Beautiful Galactic Background",
};
function Skills() {
  return (
    <div>
      <section id="skills">
        <img
          id="container px-5 py-10 mx-auto"
          className="bg-center bg-cover"
          src={backgroundGalactic.src}
          alt={backgroundGalactic.alt}
        />
        <div className="text-center mb-20">
          <h1 className="sm:text-4x1 text-3x1 font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          {/* <CpuChipIcon className="w-1 h-1 inline-block mb-4 text-neutral-500" /> */}
          <p className="text-base text-white mb-3 leading-relaxed x1:w-1/4 lg:w-1/4 mx-auto">
            My skills are well rounded accross the full stack including both
            backend and frontend technologies.
          </p>
        </div>
        <div className="flex gap-4 grid-cols-4 grid-rows-6 flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skills) => (
            <div key={skills} className="p-2">
              <div className="bg-gray-800 rounded flex p-2 items-center">
                {/* <CodeBracketIcon className="text-green-400 w-1 h-1 flex-shrink-0 mr-4" /> */}
                <span className="title-font font-medium text-white">
                  {skills}
                </span>
              </div>
            </div>
          ))}
          <br></br>
        </div>
      </section>
    </div>
  );
}

// function Skills() {
//   return (
//     <div>
//       <section id="skills">
//         <div
//           id="container px-5 py-10 mx-auto"
//           className="bg-center bg-cover bg-[url('https://images.newscientist.com/wp-content/uploads/2021/09/01154236/PRI_197379901.jpg')]"
//         >
//           <div className="text-center mb-20">
//             <h1 className="sm:text-4x1 text-3x1 font-medium title-font text-white mb-4">
//               Skills &amp; Technologies
//             </h1>
//             <CpuChipIcon className="w-1 h-1 inline-block mb-4 text-neutral-500" />
//             <p className="text-base text-white mb-3 leading-relaxed x1:w-1/4 lg:w-1/4 mx-auto">
//               My skills are well rounded accross the full stack including both
//               backend and frontend technologies.
//             </p>
//           </div>
//           <div className="flex gap-4 grid-cols-4 grid-rows-6 flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//             {skills.map((skills) => (
//               <div key={skills} className="p-2">
//                 <div className="bg-gray-800 rounded flex p-2 items-center">
//                   <CodeBracketIcon className="text-green-400 w-1 h-1 flex-shrink-0 mr-4" />
//                   <span className="title-font font-medium text-white">
//                     {skills}
//                   </span>
//                 </div>
//               </div>
//             ))}
//             <br></br>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// console.log(Skills);

export default Skills;
