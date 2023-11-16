import Image from 'next/image';
import bannerImage from '@/public/banner.webp';
import React from 'react';

const Header = () => {
    return (
        <section>
            <div className='h-[35vh] bg-black overflow-hidden flex'>
                <Image src={bannerImage} className='object-cover object-center' alt='Banner image' priority={false} />
            </div>
        </section>
    )
}

export default Header;
