'use client';
import React from 'react';
import SectionTitle from '../SectionTitle';
import * as ReactIcons from "react-icons/si";
import useFetch from '@/app/api/useFetch';
import { SKILLS_API } from '@/app/api/api';
import Skeleton from '../skeletons/Skeleton';


const Skills = () => {
    const { data } = useFetch(SKILLS_API);
    return (
        <section className='mt-16'>
            <div className='container'>
                <SectionTitle title="Skills" />
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
                    {data && (
                        data.data.map((skill) => {
                            let IconComponent = ReactIcons[skill.Icon];
                            return (
                                <div key={skill.id} className='card text-center text-xl justify-center items-center'>
                                    <div className='inline-block text-5xl mb-1'>
                                        {IconComponent && <IconComponent />}
                                    </div>
                                    <h4 className='text-lg font-[300]'>{skill.Name}</h4>
                                </div>
                            )
                        })
                    )

                    }

                    {!data && [1, 2, 3, 4, 5, 6].map(item => (<Skeleton key={item} className="w-full h-[130px]" />))}

                </div>

            </div>
        </section>
    )
}

export default Skills;
