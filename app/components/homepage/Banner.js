import Image from 'next/image';
import bannerImage from '@/public/banner.webp';
import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className='h-[35vh] bg-gray-800 overflow-hidden flex'>
                <Image src={bannerImage} className='black grayscale object-cover object-center' alt='Banner image' priority="false" />
            </div>
        </section>
    )
}

export default Banner;
