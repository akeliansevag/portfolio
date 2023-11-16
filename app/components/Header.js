import Image from 'next/image';
import React from 'react';
import profilePic from '@/public/sevag.webp';

const Header = () => {
    return (
        <section>
            <div className='container'>
                <div className='flex flex-col items-center'>
                    <div className='overflow-hidden rounded-full isolate h-[200px] w-[200px] mt-[-100px]'>
                        <Image src={profilePic} alt='Profile Pic' priority="false" />
                    </div>
                    <h1 className='dark:text-white tracking-wider my-3 text-4xl font-[100]'>Sevag Akelians</h1>
                </div>

            </div>
        </section >
    )
}

export default Header;
