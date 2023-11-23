"use client";
import Image from 'next/image';
import React from 'react';
import useFetch from '@/app/api/useFetch';
import { BANNER_API } from '@/app/api/api';
import { FILE_UPLOAD_URL } from '@/app/config';


const Banner = () => {
    const { data, loading, error } = useFetch(BANNER_API);
    return (
        <section>
            <div className='h-[35vh] bg-gray-800 overflow-hidden flex relative'>
                <Image fill={true} loader={() => 'http://localhost:1337/uploads/banner_27a31fb0ad.webp'} src="http://localhost:1337/uploads/banner_27a31fb0ad.webp" className='black grayscale object-cover object-center' alt='Banner image' priority="false" />
            </div>
        </section>
    )
}

export default Banner;
