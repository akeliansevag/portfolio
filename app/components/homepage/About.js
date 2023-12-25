'use client';
import useFetch from '@/app/api/useFetch';
import { ABOUT_API } from '@/app/api/api';
import Link from 'next/link';
import React from 'react';
import Skeleton from '../skeletons/Skeleton';

const About = () => {
    const { data } = useFetch(ABOUT_API);
    return (
        <section className='mt-10'>
            <div className='container'>
                {data && (
                    <div className='card'>
                        <div className='flex flex-col lg:flex-row gap-4 lg:gap-10'>
                            <div className='w-full lg:basis-5/12'>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        data.acf.personal_info?.map((item, index) => (
                                            <li key={index} className='flex gap-2 border-b-[1px] pb-3 last:border-b-0'>
                                                <span className='basis-1/2'>
                                                    <span className='bg-primary text-white py-1 px-2 rounded-md'>{item.title}:</span>
                                                </span>
                                                <span className='basis-1/2'>
                                                    <span>{item.description}</span>
                                                </span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='w-full lg:basis-7/12'>
                                <h2 className='card-title mb-2'>{data.acf.bio_title}</h2>
                                <p>
                                    {data.acf.bio_description}
                                </p>
                                {data.acf?.cv && (
                                    <Link className="mt-4 sa-button" href={data.acf.cv} target='_blank'>Download CV</Link>
                                )}

                            </div>
                        </div>
                    </div>
                )}

                {!data && (
                    <div className='card opacity-60'>
                        <Skeleton className='w-full h-[30vh]' />
                    </div>
                )}

            </div>
        </section>
    )
}

export default About;
