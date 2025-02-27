import React from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img4 from '../../assets/img4.png'

const ProjectCard = ({image, title,link}) =>(
    <div className='p-4 md:w-1/3 mb-6'>
        <div className='rounded-lg h-52 overflow-hidden'>
            <img src={image} alt="content" className='object-cover object-center h-full w-full' />
        </div>
        <h2 className='text-xl font-medium title-font text-white mt-5'>{title}</h2>
        <a href={link} className='text-blue-300 hover:text-blue-100 inline-flex items-center mt-3 font-bold hover:underline underline-off-set-2 '>View 
            <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-4 h-4 ml-2' viewBox='0 0 24 24'>
                <path d='MS 12h14M12 5l7 7-7 7'></path>
            </svg>
        </a>
    </div>
);


function Project() {
    const projects= [
        {title:'portfolio', image: img1 ,link:'https://sprightly-baklava-3859fe.netlify.app/' },
        {title:'E-commerce', image: img2 ,link:'#' },
        {title:'panting', image: img4 ,link:'#' },
        
    ];
  return (
    <section id='projects' className='text-gray-400 bg-blue-950 body-font'>
        <div className='container px-3 py-11 mx-auto'>
            <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
                <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
                    <h1 className='sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0'>My projects</h1>
                    <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem tempore aperiam atque inventore qui et eius quis ratione accusantium. Maxime unde dolores quasi dicta quibusdam ipsam optio vero accusantium nobis.
                    </p>
                    <button type='button' data-aos='fade-up' data-aos-delay='300' className='text-gray-900 bg-white hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-xs sm:text-sm px-4 py-2 text-center'>
                        View all
                    </button>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4'>
                {
                    projects.map((project, index)=>(
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Project