"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Popup from './Popup';

const PortfolioCard = ({item}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
        <div className='card !p-0'>
            <div className='aspect-video relative overflow-hidden'>
                <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" onClick={handleOpenPopup} alt='Project Image' className='object-cover transition-all duration-[400ms] ease-in-out hover:scale-110 hover:opacity-70 hover:cursor-pointer' fill={true} 
                src={`/${item.image}`} />
            </div>
            <div className='p-[25px]'>
                <h3 onClick={handleOpenPopup} className='hover:cursor-pointer'>
                    {item.title.toUpperCase()}
                </h3>
                <p className='line-clamp-2'>{item.description}</p>
            </div>
        </div>
        <Popup handleClosePopup={handleClosePopup} item={item} isPopupOpen={isPopupOpen}/>
    </>
    
  )
}

export default PortfolioCard;
