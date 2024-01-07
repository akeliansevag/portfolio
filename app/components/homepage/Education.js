'use client';
import React from 'react';
import Timeline from '../Timeline';
import { FaGraduationCap } from "react-icons/fa";
import SectionTitle from '../SectionTitle';
import { EDUCATION_API } from '@/app/api/api';
import useFetch from '@/app/api/useFetch';
import Skeleton from '../skeletons/Skeleton';
const Education = () => {
    const { data } = useFetch(EDUCATION_API);
    return (
        <section className='mt-16'>
            <div className='container'>
                <SectionTitle title="Education" />
                {data && (
                    <Timeline data={data.acf.education} icon={<FaGraduationCap />} />
                )}

                {!data && (
                    <>
                        <div className='rounded-full w-[50px] h-[50px] mx-auto flex items-center justify-center text-white text-2xl text-center'>
                            <Skeleton wrapper={true} className="rounded-full w-full h-full" />
                        </div>
                        <div className='mt-8 flex flex-col gap-16 sm:gap-10'>
                            {
                                [1, 2].map((item) => {
                                    return (
                                        <div key={item} className={`items-center flex flex-col-reverse sm:flex-row gap-8 ${item % 2 !== 0 ? 'sm:flex-row-reverse' : null}`}>
                                            <div className='flex-1'>
                                                <Skeleton className="w-full h-[114px]" />
                                            </div>
                                            <div className='flex-1'>
                                                <Skeleton className="w-full h-[32px]" />
                                            </div>

                                        </div>

                                    )
                                })
                            }
                        </div>
                    </>

                )}

            </div>
        </section >
    )
}

export default Education;
