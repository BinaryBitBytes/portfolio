
import { CodeIcon } from '@heroicons/react/solid'
import React from 'react'
import { projects } from '../../../Data/data.js'

export default function Projects() {
    return (
        <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
            <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>
                    <CodeIcon className='mx-auto inline-block w-10 mmb-4' />
                    <h1 className='sm:text-4x1 text-3x1 font-medium title-font mb-4 text-white'>
                        Here are some Web Applications I have built
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                        The apps I built are as follows:
                        <li className='border-2 border-indigo-600'>
                            <ol>ReadMe Generator- JQuery / NodeJS</ol>
                            <ol>Password Generator- HTML / Javascript</ol>
                            <ol>Sunshine Places Recommendation App- Javascript / HTML / Bootstrap / API</ol>
                        </li>
                    </p>
                </div>
                <div className='flex flex-wrap -m-4'>
                    {projects.map((project) => (
                        <a
                        href={project.link}
                        key={project.key}
                        className='sm:w-1/2 w-100 p-4 flex flex-wrap -m-4 border-3 border-indigo-600 rounded-full'>
                        <div className='flex relative '>
                            <img
                            alt='gallery'
                            className='absolute inset-0 h-full w-full object-cover object-center'
                            src={project.image}
                            />
                            <div className='px-10 py-10 relative z-10 w-full border-4 border-gray-800 bg0gray-900 opacity-0 hover:opacity-100'>
                                <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                                    {project.subtitle}
                                </h2>
                                <h1 className='title-font text-lg font-medium text-white mb-3'>
                                    {project.title}
                                </h1>
                                <p className='leading-relaxed'>{project.description}</p>
                            </div>
                        </div>
                    </a>
                  ))}
                </div>
            </div>
        </section>
    );
}