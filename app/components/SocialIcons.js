'use client';
import React from 'react';
import * as ReactIcons from "react-icons/fa";

import useFetch from '../api/useFetch';
import { SOCIAL_MEDIAS_API } from '../api/api';
import Skeleton from './skeletons/Skeleton';

const SocialIcons = () => {
    const { data, loading, error } = useFetch(SOCIAL_MEDIAS_API);
    return (
        <div className='flex gap-4 items-center justify-center'>

            {data && (
                data?.data.map((icon) => {
                    let IconComponent = ReactIcons[icon.icon];
                    return (
                        <a key={icon.id} className='flex items-center justify-center text-white bg-primary text-lg w-[40px] h-[40px] rounded-full hover:bg-secondary' target='_blank' href={icon.link}>
                            {IconComponent && <IconComponent />}
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
