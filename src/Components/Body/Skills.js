import {BadgeCheckIcon, ChipIcon} from '@heroicons/react/solid'
import React from "react";
import { skills } from '../../Data/skills.js'

export default function Skills() {
    return(
        <section id='skills' >
            <div className='container px-5 py-10 mx-auto ' class="bg-center bg-auto bg-[url('https://images.newscientist.com/wp-content/uploads/2021/09/01154236/PRI_197379901.jpg')]">
                <div className='text-center mb-20'>
                    <ChipIcon className='w-10 inline-block mb-4' />
                    <h1 className='sm:text-4x1 text-3x1 font-medium title-font text-white mb-4'>
                        Skills &amp; Technologies
                    </h1>
                    <p className='text-base text-white mb-3 leading-relaxed x1:w-1/4 lg:w-1/2 mx-auto'>
                        My skills are well rounded accross the full stack including both backend and frontend technologies.
                    </p>
                </div>
                <div className='flex grid gap-1 grid-cols-4 grid-rows 6 flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
                    {skills.map((skill) => (
                        <div key={skill} className='p-1 sm:w-full w-full'>
                            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
                                <BadgeCheckIcon className='text-green-400 w-6 h-6 flex-shrink-0 mr-4' />
                                <span className='title-font font-medium text-white'>
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}