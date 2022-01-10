import Image from 'next/image';
import React from 'react';

const Place = (props) => {
    const {img, location, distance} = props?.place;
   
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
            <div className='relative h-16 w-16 md:h-20 md:w-20 '>
                <Image src={img} 
                layout='fill' 
                alt='img'
                className='rounded-lg'
                />
            </div>
            
            <div >
                <h2>{location} </h2>
                <h3 className='text-gray-500'>{distance} </h3>
            </div>
        </div>
    );
};

export default Place;