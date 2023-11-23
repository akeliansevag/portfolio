"use client";
import Image from 'next/image';
import React from 'react';
import profilePic from '@/public/sevag.webp';
import SocialIcons from '../SocialIcons';
import useFetch from '@/app/api/useFetch';
import { HEADER_API } from '@/app/api/api';

const Header = () => {
    const { data, loading, error } = useFetch(HEADER_API);
    return (
        <section>
            <div className='container'>
                <div className='flex flex-col items-center'>
                    <div className='overflow-hidden rounded-full isolate h-[200px] w-[200px] mt-[-100px]'>
                        <Image src={profilePic} alt='Profile Pic' priority="false" />
                    </div>
                    <h1 className='tracking-wider my-3 text-4xl font-[100]'>{data && data.data.attributes.Name}</h1>
                    <h2 className='mb-4'>{data && data.data.attributes.Title}</h2>
                    <SocialIcons />
                </div>

            </div>
        </section>
    )
}

export default Header;
