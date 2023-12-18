"use client";
import Image from 'next/image';
import React from 'react';
import useFetch from '@/app/api/useFetch';
import { BANNER_API, BASE_URL } from '@/app/api/api';
import Skeleton from '../skeletons/Skeleton';


const Banner = () => {
    const { data, loading, error } = useFetch(BANNER_API);
    const imageLoader = ({ src, width, quality }) => {
        return `${src}?${width}&q=${quality || 75}`;
    }
    return (
        <section>
            <div className='h-[35vh] overflow-hidden flex relative'>
                {data && (
                    <Image sizes="100vw" fill loader={imageLoader} src={data.acf.banner_image} className='black grayscale object-cover object-center' alt='Banner image' priority />
                )}

                {!data && <Skeleton className="w-full h-full" wrapper={true} />}
            </div>
        </section>
    )
}

export default Banner;
