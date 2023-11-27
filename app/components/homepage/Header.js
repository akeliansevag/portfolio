"use client";
import Image from 'next/image';
import React from 'react';
import SocialIcons from '../SocialIcons';
import useFetch from '@/app/api/useFetch';
import { HEADER_API, BASE_URL } from '@/app/api/api';
import Skeleton from '../skeletons/Skeleton';

const Header = () => {
    const { data, loading, error } = useFetch(HEADER_API);
    const imageLoader = ({ src, width, quality }) => {
        return `${BASE_URL}${src}?${width}&q=${quality || 75}`;
    }
    return (
        <section>
            <div className='container'>
                <div className='flex flex-col items-center'>
                    <div className='overflow-hidden rounded-full isolate h-[200px] w-[200px] mt-[-100px] relative'>
                        {data && (
                            <Image fill={true} loader={imageLoader} src={data.data.profile_picture.url} alt='Profile Pic' priority="false" />
                        )}
                        {!data && <Skeleton className="w-full h-full" wrapper={true} />}
                    </div>

                    {data && <h1 className='tracking-wider my-3 text-4xl font-[100]'>{data.data.name}</h1>}
                    {!data && <Skeleton className='w-[80vw] md:w-[20vw] max-w-[300px] h-[20px] mt-4' wrapper={false} />}

                    {data && <h2 className='mb-4'>{data.data.title}</h2>}
                    {!data && <Skeleton className='w-[80vw] md:w-[15vw] max-w-[200px] h-[15px] mt-4 mb-4' wrapper={false} />}

                    <SocialIcons />
                </div>

            </div>
        </section>
    )
}

export default Header;
