import React from "react";
export default function About() {
    return(
    <section id='about'>
        <div 
        className='container mx-auto flex px-3 py-3 md:flex-row flex-col items-center' 
        class="bg-center bg-cover bg-[url('https://github.com/BinaryBitBytes/portfolio/blob/ca40fbe73c6fc70c8ed4688228a68c5f1f3f5260/public/coding.png')]"
        alt='background-AboutMe'>
            </div>
            <div className='lg:flex-grow md:q-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                <h1 className='title-font sm:text-4x1 text 3x1 md-4 font-medium text-neon'>
                    Welcome to my portfolio, my name is Miles Colon.
                    <br className='hidden lg:inline-block' /> I enjoy programming, especially building web applications and unit tests.
                </h1>
                <p className='mb-8 leading-relaxed'>
                    I specialze in full stack web development. While I am skilled in both
                    the front end & back end of the stack, I really enjoy the problem solving
                    and meaningfulness of backend development.
                </p>
                <div className="flex justify-center">
                    <a
                    href='#contact'
                    className='inline-flex text-white bg-green-500 border-3 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'>
                        <p>
                            <strong>
                            Looking 4 Work<br />
                            Email:117mwc117@gmail.com<br />
                            Phone: 678-675-6882<br />
                            LinkedIn.com/BinaryBitBytes
                            </strong>
                        </p>
                    </a>
                    <a
                    href='#projects'
                    className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
                        Checkout my hard work & projects
                    </a>
                </div>
        </div>
    </section>
    )
}