import React from 'react';
import Timeline from '../../Timeline';
import { data } from './data';
import { FaBriefcase } from "react-icons/fa";
import SectionTitle from '../../SectionTitle';


const Experience = () => {
    return (
        <section className='mt-16 mb-16'>
            <div className='container'>
                <SectionTitle title="Experience" />
                <Timeline data={data} icon={<FaBriefcase />} />
            </div>

        </section >
    )
}

export default Experience;
