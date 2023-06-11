import { CodeIcon } from '@heroicons/react/solid'
import React from 'react'
import { projects } from '../data'

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
                        <li>
                            <ol>JQuery / NodeJS- ReadMe Generator</ol>
                            <ol>HTML / Javascript- Password Generator</ol>
                            <ol>Javascript / HTML / Bootstrap / API- Sunshine Places Recommendation Application</ol>
                        </li>
                    </p>
                </div>
                <div className='flex flex-wrap -m-4'>
                    
                </div>
            </div>
        </section>
    )
}