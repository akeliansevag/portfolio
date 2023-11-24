import React from 'react';
import './Skeleton.css';

const Skeleton = ({ height, width, type, wrapper }) => {
    const wrapperClasses = 'skeleton-wrapper' + ' ' + (type ? type : '');
    const skeletonClasses = `skeleton w-[${width}] h-[${height}]`;
    return (
        <div className={wrapperClasses}>
            <div className={skeletonClasses}></div>
            <div className='shimmer-wrapper'>
                <div className='shimmer'></div>
            </div>
        </div>

    )
}

export default Skeleton;
