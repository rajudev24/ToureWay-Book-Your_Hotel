import Image from 'next/image';
import React from 'react';

const FooterBanner = () => {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-[350px] min-w-[300px]'>
                <Image src='/img/footerBanner.jpg' 
                layout='fill'
                objectFit='cover'
                alt='img'
                className='rounded-2xl'
                />
            </div>
            <div className='absolute top-[125px] left-8'>
                <h2 className='text-2xl md:text-4xl mb-3 w-50'>The Greatest Outdoors</h2>
                <p>Wishlists created by ToureWay</p>
                <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-4'>Get Inspired</button>
            </div>
        </section>
    );
};

export default FooterBanner;