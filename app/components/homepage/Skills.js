'use client';
import React from 'react';
import SectionTitle from '../SectionTitle';
import * as ReactIcons from "react-icons/si";
import useFetch from '@/app/api/useFetch';
import { SKILLS_API } from '@/app/api/api';
import Skeleton from '../skeletons/Skeleton';

// const skills = [
//     {
//         id: 1,
//         icon: <FaHtml5 />,
//         title: 'HTML5',
//     },
//     {
//         id: 2,
//         icon: <FaCss3 />,
//         title: 'CSS3'
//     },
//     {
//         id: 3,
//         icon: <IoLogoJavascript />,
//         title: 'JavaScript'
//     },
//     {
//         id: 4,
//         icon: <DiJqueryLogo />,
//         title: 'JQuery'
//     },
//     {
//         id: 5,
//         icon: <SiCakephp />,
//         title: 'CakePHP, Croogo'
//     },
//     {
//         id: 6,
//         icon: <FaReact />,
//         title: 'React'
//     },
//     {
//         id: 7,
//         icon: <TbBrandReactNative />,
//         title: 'React Native'
//     },
//     {
//         id: 8,
//         icon: <FaWordpress />,
//         title: 'WordPress'
//     },
//     {
//         id: 9,
//         icon: <DiMysql />,
//         title: 'MySQL'
//     },
//     {
//         id: 10,
//         icon: <FaPhp />,
//         title: 'PHP'
//     },
//     {
//         id: 11,
//         icon: <MdAnimation />,
//         title: 'GSAP'
//     },
//     {
//         id: 12,
//         icon: <FaGithub />,
//         title: 'GitHub'
//     },
//     {
//         id: 13,
//         icon: <FaCode />,
//         title: 'Rest API'
//     },
//     {
//         id: 14,
//         icon: <SiTailwindcss />,
//         title: 'Tailwind CSS'
//     },
//     {
//         id: 15,
//         icon: <FaBootstrap />,
//         title: 'Bootstrap'
//     },
//     {
//         id: 16,
//         icon: <FaLaravel />,
//         title: 'Laravel'
//     },
//     {
//         id: 17,
//         icon: <FaCode />,
//         title: 'Technical SEO'
//     },
//     {
//         id: 18,
//         icon: <DiResponsive />,
//         title: 'Responsive Design'
//     }
// ];
const Skills = () => {
    const { data } = useFetch(SKILLS_API);
    return (
        <section className='mt-16'>
            <div className='container'>
                <SectionTitle title="Skills" />
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
                    {data && (
                        data.data.map((skill) => {
                            let IconComponent = ReactIcons[skill.Icon];
                            return (
                                <div key={skill.id} className='card text-center text-xl justify-center items-center'>
                                    <div className='inline-block text-5xl mb-1'>
                                        {IconComponent && <IconComponent />}
                                    </div>
                                    <h4 className='text-lg font-[300]'>{skill.Name}</h4>
                                </div>
                            )
                        })
                    )

                    }

                    {!data && [1, 2, 3, 4, 5, 6].map(item => (<Skeleton key={item} className="w-full h-[130px]" />))}

                </div>

            </div>
        </section>
    )
}

export default Skills;
