import React from 'react';
import { data } from "./data";
import Timeline from '../../Timeline';
import { FaGraduationCap } from "react-icons/fa";
import SectionTitle from '../../SectionTitle';



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
