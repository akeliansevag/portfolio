"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Popup from './Popup';

const PortfolioCard = ({ item }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?${width}&q=${quality || 75}`;
  }
  return (
    <>
      <div className='card !p-0'>
        <div className='aspect-video relative overflow-hidden'>
          <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill loader={imageLoader} src={`/${item.image}`} className='!h-auto !top-0 hover:translate-y-[-100%] hover:!top-full transition-all duration-[5s] ease-linear' alt='Portfolio image' priority />
        </div>
        <div className='p-[25px]'>
          <h3 onClick={handleOpenPopup} className='hover:cursor-pointer'>
            {item.title.toUpperCase()}
          </h3>
          <p className='line-clamp-2'>{item.description}</p>
        </div>
      </div>
      <Popup handleClosePopup={handleClosePopup} item={item} isPopupOpen={isPopupOpen} />
    </>

  )
}

export default PortfolioCard;
