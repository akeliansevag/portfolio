import React from 'react';
import SectionTitle from '../../SectionTitle';
import items from './data';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
    return (
        <section className='mt-16'>
            <div className='container'>
                <SectionTitle title="Portfolio" />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {items.map((item)=>(
                        <PortfolioCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
