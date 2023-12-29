import React from 'react';
import Timeline from '../Timeline';
import { FaBriefcase } from "react-icons/fa";
import SectionTitle from '../SectionTitle';

const data = [
    {
        id: 1,
        title: "Monty Mobile - Senior Web Developer",
        location: "Beirut, Lebanon",
        years: "June 2020 - present"
    },
    {
        id: 2,
        title: "Interesting Times - Senior Web Developer",
        location: "Beirut, Lebanon",
        years: "February 2020 - May 2020"
    },
    {
        id: 3,
        title: "Wink Agency - Senior Web Developer",
        location: "Sin el Fil, Lebanon",
        years: "February 2019 - February 2020"
    },
    {
        id: 4,
        title: "SmartDot - Senior Web Developer",
        location: "Mtayleb, Lebanon",
        years: "March 2016 - February 2019"
    },
    {
        id: 5,
        title: "Memac Ogilvy - Senior Web Developer",
        location: "Horsh Tabet, Lebanon",
        years: "March 2014 - March 2016"
    },
    {
        id: 6,
        title: "Softlink - IT/Web Developer",
        location: "Dekwaneh, Lebanon",
        years: "September 2012 - November 2013"
    },
    {
        id: 7,
        title: "Aghasarkissian - IT/Retail",
        location: "Bourj Hammoud, Lebanon",
        years: "June 2010 - February 2011"
    },
    {
        id: 8,
        title: "BHV Citymall - IT/Retail",
        location: "Nahr el Mawt, Lebanon",
        years: "July 2007 - February 2009"
    },

];
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
