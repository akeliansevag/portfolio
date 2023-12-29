import React from 'react';
import Timeline from '../Timeline';
import { FaGraduationCap } from "react-icons/fa";
import SectionTitle from '../SectionTitle';

const data = [
    {
        id: 1,
        title: "Haigazian University",
        location: "Beirut, Lebanon",
        description: "I hold a Bachelor's degree in Computer Science from Haigazian University, gaining expertise in programming, algorithms, and software development. The program enhanced my analytical skills, preparing me for a dynamic career in technology.",
        years: "2007 - 2011"
    },
    {
        id: 2,
        title: "AGBU High School",
        location: "Beirut, Lebanon",
        description: "I graduated from Tarouhi-Hovagimain, specializing in life sciences. This educational foundation has been pivotal in shaping my approach to problem-solving and analytical thinking.",
        years: "1992 - 2006"
    }
];

const Education = () => {
    return (
        <section className='mt-16'>
            <div className='container'>
                <SectionTitle title="Education" />
                <Timeline data={data} icon={<FaGraduationCap />} />
            </div>
        </section >
    )
}

export default Education;
