import Image from 'next/image';
import React, { useState } from 'react';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';


const Header = ({placeholder}) => {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guests, setGuestes] = useState(1);
    const router = useRouter();  
    
    const handleSelect = (ranges)=>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }

    const handleCancle = ()=>{
        setSearchInput('')
    }

    const handleSearch = ()=>{  
        router.push({
            pathname: '/search',
            query:{
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guests,
            }
        })
    }

    const selectionRange ={
        startDate: startDate,
        endDate: endDate,
        key:'selection'
    }
    
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-3 px-5 md:px-10  '>

            <div 
            onClick={()=> router.push('/')}
                className='relative flex items-center h-10 cursor-pointer  '>
                <Image src='/img/logo.png'
                    width={50}
                    height={50}
                    alt='logo'

                />
            </div >

            <div className='flex items-center border-2 rounded-full md:shadow-sm'>
                <input 
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)}
                 className='flex-grow   md:pl-4 bg-transparent outline-none text-sm text-gray-600' type="text" placeholder={ placeholder || ' Search your hotel'} />
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
            {searchInput && (
                <div className='flex flex-col col-span-4 w-[360px] md:w-[500px] mx-auto  '>
                    <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate ={new Date()}
                    rangeColors= {['#FD5B61']}
                    onChange={handleSelect} 

                    />
                    <div className='flex items-center border-b mb-4  '>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon 
                        className='h-5'
                        />
                        <input 
                        value={guests}
                        onChange={e => setGuestes(e.target.value)}
                        min={1}
                         type="number" className='w-12 pl-2 text-red-400' />
                    </div>
                    <div className='flex '>
                        <button onClick={handleCancle} className='flex-grow text-gray-600'>Cancel</button>
                        <button 
                        onClick={handleSearch}
                         className='flex-grow text-red-600'>Search</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;