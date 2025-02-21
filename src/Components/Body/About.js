import React from "react";

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Background Container */}
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-center px-12 py-12 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://cosmosmagazine.com/wp-content/uploads/2020/02/190613_atoms_full-1440x813.jpg')",
        }}
      >
        {/* Content Wrapper */}
        <div className="flex flex-col items-center text-center space-y-10 w-full">
          {/* Title Container */}
          <div className="w-full max-w-3xl p-6 rounded-full border-4 border-indigo-800">
            <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-700 hover:bg-sky-800/[.5] uppercase transition-all">
              Welcome to my portfolio, my name is Miles Colon. I enjoy
              programming, especially building web applications and unit tests.
            </h1>
          </div>

          {/* About Section */}
          <div className="w-full max-w-3xl p-6 bg-emerald-800 border-4 border-indigo-800 rounded-lg text-rose-300 flex flex-col items-center space-y-4">
            <div className="text-5xl">🐧</div>
            <p className="text-lg leading-relaxed">
              I specialize in full-stack web development. While I am skilled in
              both the front end & back end of the stack,
              <br />I really enjoy the problem-solving and meaningfulness of
              backend development.
            </p>
            <div className="text-5xl">🐧</div>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all"
            >
              Looking 4 Work
              <br />
              Email: 117mwc117@gmail.com
              <br />
              Phone: 678-675-6882
              <br />
              LinkedIn.com/BinaryBitBytes
            </a>

            <a
              href="#projects"
              className="px-6 py-3 bg-gray-800 text-gray-400 font-bold rounded-lg shadow-lg hover:bg-gray-700 hover:text-white transition-all"
            >
              Checkout my hard work & projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
