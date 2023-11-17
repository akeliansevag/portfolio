import React from 'react';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { skills } from './data';

const Skills = () => {
    return (
        <section className='mt-16 mb-16'>
            <div className='container'>
                <h2 class="text-center mb-5 text-3xl font-[100]">Skills</h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className='card text-center text-xl justify-center items-center'>
                                <div className='inline-block text-5xl mb-1'>{skill.icon}</div>
                                <h4 className='text-lg font-[300]'>{skill.title}</h4>
                            </div>
                        ))
                    }

                </div>

            </div>
        </section>
    )
}

export default Skills;
