import React from 'react';
import { skills } from './data';
import SectionTitle from '../../SectionTitle';

const Skills = () => {
    return (
        <section className='mt-16'>
            <div className='container'>
                <SectionTitle title="Skills" />
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
