import React from 'react';
import { MdCheck } from "react-icons/md";
const Timeline = ({ data, icon }) => {
    return (
        <div className='relative'>
            <div className='rounded-full bg-primary w-[50px] h-[50px] mx-auto flex items-center justify-center text-white text-2xl text-center'>
                {icon}
            </div>
            <div className='absolute w-[3px] left-[50%] bg-primary translate-x-[-50%] h-full z-[-1] top-0'></div>
            <div className='mt-8 flex flex-col gap-16 sm:gap-10'>
                {data.map((item, index) => {
                    return (
                        <div key={item.id} className={`items-center flex flex-col-reverse sm:flex-row gap-8 ${index % 2 !== 0 ? 'sm:flex-row-reverse' : null}`} >
                            <div className='w-full'>
                                <div className='card'>
                                    <h4>{item.title}</h4>
                                    <h5 className='rounded-md bg-gray-300 font-[300] inline-block text-sm px-2 py-1 mt-1 mb-2'>{item.location}</h5>
                                    {
                                        item.description && (
                                            <p>
                                                {item.description}
                                             </p>
                                        )
                                    }
                                    
                                </div>
                            </div>
                            <div className=' hidden sm:flex bg-primary h-[22px] w-[22px] rounded-full text-white shrink-0 items-center justify-center text-sm'>
                                <MdCheck />
                            </div>
                            <div className={`w-full text-center ${index % 2 !== 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                                <h4 className={`bg-primary inline-block text-white rounded-md py-1 px-3 relative before:h-[10px] before:w-[10px] sm:before:bg-primary sm:before:content- [""] sm:before:block sm:before:absolute sm:before:top-[50%] sm:before:translate-y-[-50%] sm:before:rotate-45 ${index % 2 !== 0 ? 'sm:before:right-0 sm:before:translate-x-[50%]' : 'sm:before:left-[0] sm:before:translate-x-[-50%]'}`}>
                                    {item.years}
                                </h4>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Timeline;
