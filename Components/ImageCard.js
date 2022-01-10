import Image from 'next/image';
import React from 'react';

const ImageCard = (props) => {
    const {img, name} = props.image
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-60 w-60'>
                <Image src={img} layout='fill' alt='img'
                className='rounded-xl' 
                 />
            </div>
            <h3 className='text-2xl mt-3'>{name} </h3>
        </div>
    );
};

export default ImageCard;