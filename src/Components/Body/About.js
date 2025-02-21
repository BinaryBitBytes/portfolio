import React from "react";

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Background Container */}
      <div
        className="w-screen min-h-screen flex flex-col items-center justify-center px-8 py-16 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://cosmosmagazine.com/wp-content/uploads/2020/02/190613_atoms_full-1440x813.jpg')",
        }}
      >
        {/* Content Wrapper - Flexbox for Asides */}
        <div className="w-full max-w-6xl md:flex md:justify-between items-center gap-8">
          {/* Title Card (Left Aside) */}
          <div className="w-full md:w-2/5 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border-2 border-indigo-800">
            <h1 className="text-lg md:text-xl font-extrabold text-emerald-700 hover:bg-sky-800/[.3] uppercase transition-all p-3 rounded-lg">
              Welcome to my portfolio, my name is Miles Colon.
            </h1>
            <p className="text-sm text-gray-700 mt-2">
              I enjoy programming, especially building web applications and unit
              tests.
            </p>
          </div>

          {/* About Card (Right Aside) */}
          <div className="w-full md:w-2/5 bg-emerald-800 p-6 rounded-xl shadow-lg border-2 border-indigo-800 text-rose-300 flex flex-col items-center space-y-4">
            <div className="text-4xl">🐧</div>
            <p className="text-sm leading-relaxed">
              I specialize in full-stack web development. While I am skilled in
              both the front-end & back-end, I really enjoy problem-solving in
              backend development.
            </p>
            <div className="text-4xl">🐧</div>
          </div>
        </div>

        {/* Buttons Section (Centered Below the Cards) */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <a
            href="#contact"
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-all text-center"
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
            className="px-6 py-3 bg-gray-800 text-gray-400 font-bold rounded-lg shadow-lg hover:bg-gray-700 hover:text-white transition-all text-center"
          >
            Checkout my hard work & projects
          </a>
        </div>
      </div>
    </section>
  );
}
