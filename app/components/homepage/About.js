import React from 'react';

const About = () => {
    const about = [
        { title: "Date of Birth", description: "1988-Oct-15" },
        { title: "Job", description: "Senior Web Developer" },
        { title: "Citizenship", description: "Lebanese, Armenian" },
        { title: "Address", description: "Beirut, Lebanon" },
        { title: "Phone", description: "+961 70 708573" },
        { title: "Email", description: "akelian.sevag@gmail.com" }
    ];
    return (
        <section className='my-10'>
            <div className='container'>
                <div className='card'>
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-10'>
                        <div className='w-full lg:basis-5/12'>
                            <ul className='flex flex-col gap-3'>
                                {
                                    about.map((item) => (
                                        <li className='flex gap-2 border-b-[1px] pb-3 last:border-b-0'>
                                            <span className='basis-1/2'>
                                                <span className='bg-neutral-900 text-white py-1 px-2 rounded-md'>{item.title}:</span>
                                            </span>
                                            <span className='basis-1/2'>
                                                <span>{item.description}</span>
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='w-full lg:basis-7/12'>
                            <h2 className='card-title mb-2'>Hello World!</h2>
                            <p>
                                I'm a full-stack web developer with a love for music, soccer, and pets. By day, I'm immersed in lines of code, creating seamless digital experiences. After hours, you'll find me strumming a guitar or kicking a soccer ball. Proud pet owner, blending tech skills with a passion for life beyond the screen. Let's navigate the digital and real worlds together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
