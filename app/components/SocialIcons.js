import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from 'next/link';

const SocialIcons = () => {
    const social = [{
        id: 1, iconComponent: <FaFacebookF />, link: 'https://www.facebook.com/sevag.akelian'
    }, {
        id: 2, iconComponent: <FaInstagram />, link: 'https://www.instagram.com/akeliansevag/'
    }, {
        id: 3, iconComponent: <FaWhatsapp />, link: 'https://wa.me/+96170708573'
    }, {
        id: 4, iconComponent: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/sevag-akelian/'
    }, {
        id: 5, iconComponent: <SiGmail />, link: 'mailto:sevag.akelian@gmail.com'
    },];
    return (
        <div className='flex gap-4 items-center justify-center'>
            {
                social.map((icon) => (
                    <Link key={icon.id} className='flex items-center justify-center text-white bg-primary text-lg w-[40px] h-[40px] rounded-full hover:bg-secondary' target='_blank' href={icon.link}>
                        {icon.iconComponent}
                    </Link>
                ))
            }
        </div>
    )
}

export default SocialIcons;
