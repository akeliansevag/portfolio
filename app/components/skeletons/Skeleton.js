import React from 'react';
import './Skeleton.css';

const Skeleton = ({ className, type, wrapper }) => {
    const wrapperClasses = (wrapper ? '' : 'skeleton-wrapper-disabled') + ' ' + 'skeleton-wrapper' + ' ' + (type ? type : '');
    const skeletonClasses = `skeleton relative ${className}`;
    return (
        <div className={`${wrapperClasses}`}>
            <div className={skeletonClasses}>
                <div className='shimmer-wrapper'>
                    <div className='shimmer'></div>
                </div>
            </div>

        </div>

    )
}

export default Skeleton;
