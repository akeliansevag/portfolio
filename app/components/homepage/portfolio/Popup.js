import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Popup = ({item,isPopupOpen, handleClosePopup}) => {
  return (
    <div className={`overflow-hidden transition-colors duration-300 fixed w-full bg-black top-0 left-0 z-10 ${isPopupOpen ? 'bg-opacity-80 h-full' : 'bg-opacity-0 h-0'}`}>
        <div onClick={handleClosePopup} className='p-4 w-full h-full overflow-auto flex items-center justify-center'>
            <div onClick={(e)=> e.stopPropagation()} className={`relative p-3 bg-white w-full max-w-2xl transition-all duration-300 ease-in-out ${isPopupOpen ? 'translate-y-0 opacity-1' : 'translate-y-5 opacity-0'}`}>
                <div onClick={handleClosePopup} className='px-3 py-1 text-3xl absolute top-0 right-0 z-10 bg-white hover:cursor-pointer'>x</div>
                <div className='aspect-video relative'>
                    <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw" className='object-cover' alt='Portfolio Image' src={`/${item.image}`} fill={true} />
                </div>
                <div className='mt-3'>
                    <h3 className='text-xl'>{item.title.toUpperCase()}</h3>
                    <p>{item.description}</p>
                </div>
                <Link href={item.link} target='_blank' className='sa-button mt-5'>
                    View Project
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Popup;
