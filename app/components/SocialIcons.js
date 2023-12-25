'use client';
import React from 'react';

import useFetch from '../api/useFetch';
import { SOCIAL_MEDIAS_API } from '../api/api';
import Skeleton from './skeletons/Skeleton';

const SocialIcons = () => {
    const { data, loading, error } = useFetch(SOCIAL_MEDIAS_API);
    return (
        <div className='flex gap-4 items-center justify-center'>

            {data && (
                data?.map((icon, index) => {
                    return (
                        <a key={index} className='flex items-center justify-center text-white bg-primary text-lg w-[40px] h-[40px] rounded-full hover:bg-secondary' target='_blank' href={icon.link}>
                            <span className='fill-white' dangerouslySetInnerHTML={{ __html: icon.icon }}></span>
                        </a>
                    )
                })
            )
            }

            {
                !data &&
                [1, 2, 3, 4, 5].map(item => <Skeleton key={item} className="h-[40px] w-[40px] rounded-full" wrapper={false} />)
            }
        </div>
    )
}

export default SocialIcons;
