import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className=' relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px]'>
            <Image src='/img/banner.jpg' 
            layout='fill' 
            alt='banner' 
            objectFit='cover'
            />
            <div className='absolute top-1/2 w-full text-center text-white '>
                <p className=' sm:text-lg md:text-5xl font-bold'>The journey is my home</p>
                <button className='text-purple-500 bg-white px-8 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I`m Ready</button>
            </div>
        </div>
    );
};

export default Banner;