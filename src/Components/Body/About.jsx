import React from 'react';
import WHOamI from './Elements/About/whoAmI';
import Welcome from './Elements/About/welcome';
import MyContact from './Elements/About/MyContact';
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
        <div className="center-content items-center">
          <div className=" box-border container rounded-full border-4 box-border h-12 w-55 border-indigo-800 mx-auto py-0 mb-16">
            <WelcomeElement />
            {/* <div
              id="box-content flex py-4 title-font sm:text-4x1 text 3x1 md-1 font-medium"
              className="hover:bg-sky-800/[.5] hover:uppercase font-extrabold text-emerald-700 text-center self-center place-content-center"
            >
              <h1>
                Welcome to my portfolio, my name is Miles Colon. I enjoy
                programming, especially building web applications and unit
                tests.
              </h1>
            </div> */}
            <WHOamIELEMENT />
            {/* <div className="container mx-auto px-auto py-7 text-center absolute inset-x-0 bottom-80 h-16">
                <div className="rounded-full border-4 border-indigo-800 leading-relaxed bg-emerald-800 font-large md-8 text-rose-300">
                  <h4>
                    <div className="text-5xl absolute inset-y-7 left-48 w-28">
                      <aside>
                        <strong>🐧</strong>
                      </aside>
                    </div>
                    <div>
                      I specialze in full stack web development. While I am
                      skilled in both the front end & back end of the stack,
                      <br />I really enjoy the problem solving and
                      meaningfulness of backend development.
                    </div>
                    <div className="text-5xl absolute inset-y-7 right-48 w-28">
                      <aside>
                        <strong>🐧</strong>
                      </aside>
                    </div>
                  </h4>
                </div>
              </div> */}
          </div>
          <MyContact />
          {/* <div className="place-content-end h-72 content-between-20 ">
            <div className="flex justify-center">
              <a
                href="#contact"
                className="text-center reletive h-32 w-69 absolute bottom-18 left-10 text-white bg-green-500 border-3 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                <p>
                  <strong>
                    Looking 4 Work
                    <br />
                    Email:117mwc117@gmail.com
                    <br />
                    Phone: 678-675-6882
                    <br />
                    LinkedIn.com/BinaryBitBytes
                  </strong>
                </p>
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="#projects"
                className="reletive h-42 w-65 absolute bottom-18 right-10 ml-56 inline-flex text-gray-400 bg-gray-800 border-3 py-12 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                <strong>Checkout my hard work & projects</strong>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
