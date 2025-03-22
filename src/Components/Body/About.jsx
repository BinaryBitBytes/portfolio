import React from "react";
import WHOamI from "./Elements/About/whoAmI";
import Welcome from "./Elements/About/welcome";
import MyContact from "./Elements/About/MyContact";
let WelcomeElement = Welcome;
let WHOamIELEMENT = WHOamI;
function About() {
  return (
    <section id="about">
      <div
        id="container mx-auto flex px-12 py-12 md:flex-row flex-col items-center "
        className="bg-center bg-cover bg-[url('https://cosmosmagazine.com/wp-content/uploads/2020/02/190613_atoms_full-1440x813.jpg')]"
        alt="background-AboutMe"
      >
        {/* <div className='center-content flex items-center lg:flex-grow md:q-1/2 lg:pr-44 md:pr-16 flex flex-col md:items-start md:text-center mb-16 md:mb-0 items-center text-center'> */}
        <div className="center-content py-4 items-center">
          <div className="container rounded-full border-8 box-border h-y w-x border-indigo-600 mx-auto py-4 px-4 mb-16">
            <WelcomeElement />
            <WHOamIELEMENT />
          </div>
          <MyContact />
        </div>
      </div>
    </section>
  );
}

export default About;
