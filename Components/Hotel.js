import { HeartIcon } from '@heroicons/react/outline';
import { LocationMarkerIcon, StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';

const Hotel = (props) => {
    const { img, location, title, description, price, total, star, } = props.hotel;

    return (
        <div className=' md:flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:broder-t'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <Image src={img}
                    layout='fill'
                    objectFit='cover'
                    alt='img'
                    className='rounded-xl '
                />
            </div>
            <div className='flex flex-col flex-grow md:pl-5'>
                <div className='flex justify-between'>
                    <div className='flex items-center '>
                        <LocationMarkerIcon className='h-4' />
                        <p> {location} </p>
                    </div>

                    <HeartIcon className='h-7 cursor-pointer' />

                </div>
                <h4 className='text-xl '>{title} </h4>
                <div className='border-b w-10 pt-2' />
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description} </p>
                <div className='flex justify-between items-end pt-5'>

                    <p className='flex items-center'>
                        <StarIcon className='h-5 text-red-400' />
                        {star}
                    </p>

                    <div>
                        <p className='text-lg lg:text-2xl font-semibold pb-2'>
                            BDT- {price}
                        </p>
                        <p className='text-right font-extralight'>
                            BDT- {total} total
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;