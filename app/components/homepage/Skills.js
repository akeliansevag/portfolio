import React from 'react';
import SectionTitle from '../SectionTitle';
import { FaHtml5, FaPhp, FaWordpress } from 'react-icons/fa6';
import { FaBootstrap, FaCode, FaCss3, FaGithub, FaLaravel, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiJqueryLogo, DiMysql, DiResponsive } from "react-icons/di";
import { SiCakephp, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { MdAnimation } from "react-icons/md";


const Skills = () => {
    const skills = [
        {
            id: 1,
            icon: <FaHtml5 />,
            title: 'HTML5',
        },
        {
            id: 2,
            icon: <FaCss3 />,
            title: 'CSS3'
        },
        {
            id: 3,
            icon: <IoLogoJavascript />,
            title: 'JavaScript'
        },
        {
            id: 4,
            icon: <DiJqueryLogo />,
            title: 'JQuery'
        },
        {
            id: 5,
            icon: <SiCakephp />,
            title: 'CakePHP, Croogo'
        },
        {
            id: 6,
            icon: <FaReact />,
            title: 'React'
        },
        {
            id: 7,
            icon: <TbBrandReactNative />,
            title: 'React Native'
        },
        {
            id: 8,
            icon: <FaWordpress />,
            title: 'WordPress'
        },
        {
            id: 9,
            icon: <DiMysql />,
            title: 'MySQL'
        },
        {
            id: 10,
            icon: <FaPhp />,
            title: 'PHP'
        },
        {
            id: 11,
            icon: <MdAnimation />,
            title: 'GSAP'
        },
        {
            id: 12,
            icon: <FaGithub />,
            title: 'GitHub'
        },
        {
            id: 13,
            icon: <FaCode />,
            title: 'Rest API'
        },
        {
            id: 14,
            icon: <SiTailwindcss />,
            title: 'Tailwind CSS'
        },
        {
            id: 15,
            icon: <FaBootstrap />,
            title: 'Bootstrap'
        },
        {
            id: 16,
            icon: <FaLaravel />,
            title: 'Laravel'
        },
        {
            id: 17,
            icon: <FaCode />,
            title: 'Technical SEO'
        },
        {
            id: 18,
            icon: <DiResponsive />,
            title: 'Responsive Design'
        }
    ];
    return (
        <section className='mt-16'>
            <div className='container'>
                <SectionTitle title="Skills" />
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className='card text-center text-xl justify-center items-center'>
                                <div className='inline-block text-5xl mb-1'>{skill.icon}</div>
                                <h4 className='text-lg font-[300]'>{skill.title}</h4>
                            </div>
                        ))
                    }

                </div>

            </div>
        </section>
    )
}

export default Skills;
