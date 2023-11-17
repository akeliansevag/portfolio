import Image from 'next/image';
import React from 'react';
import profilePic from '@/public/sevag.webp';
import SocialIcons from '../SocialIcons';

const Header = () => {

    return (
        <section>
            <div className='container'>
                <div className='flex flex-col items-center'>
                    <div className='overflow-hidden rounded-full isolate h-[200px] w-[200px] mt-[-100px]'>
                        <Image src={profilePic} alt='Profile Pic' priority="false" />
                    </div>
                    <h1 className='tracking-wider my-3 text-4xl font-[100]'>Sevag Akelian</h1>
                    <h2 className='mb-4'>Full Stack Web Developer</h2>
                    <SocialIcons />
                </div>

            </div>
        </section >
    )
}

export default Header;
