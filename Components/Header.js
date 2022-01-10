import Image from 'next/image';
import React from 'react';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-3 px-5 md:px-10  '>

            <div className='relative flex items-center h-10 cursor-pointer  '>
                <Image src='/img/logo.png'
                    width={50}
                    height={50}
                    alt='logo'

                />
            </div >

            <div className='flex items-center border-2 rounded-full md:shadow-sm'>
                <input className='flex-grow   md:pl-4 bg-transparent outline-none text-sm text-gray-600' type="text" placeholder=' Search your hotel' />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2' />
            </div>

            <div className='flex items-center space-x-2 justify-end'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex items-center space-x-1 border-2 p-1 rounded-full '>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>
        </header>
    );
};

export default Header;