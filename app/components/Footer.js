import React from 'react';
import SocialIcons from './SocialIcons';
const date = new Date();

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='container text-center'>
        <SocialIcons />
        <p className='mb-10 mt-5 text-sm'>© {date.getFullYear()} Sevag Akelian. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer;
