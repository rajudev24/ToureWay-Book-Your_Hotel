import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../Components/Footer';
import GoogleMap from '../Components/GoogleMap';
import Header from '../Components/Header';
import Hotel from '../Components/Hotel';

const Search = ({hotels}) => {
    
    const router = useRouter();
    const { location, startDate, endDate, guests } = router.query;

    const formattedStartdate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndtdate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartdate} - ${formattedEndtdate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${guests}`} />
            <main>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - {guests}  guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location} </h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price </p>
                        <p className='button'>Rooms & Bands </p>
                        <p className='button'>More filters </p>
                    </div>
                    <div>
                        {
                            hotels?.map(hotel =>
                                
                                <Hotel 
                                key={hotel._id}
                                hotel={hotel}
                                />
                                
                            )
                        }
                    </div>
                </section>
                <section className='min-w-[600px]'>
                    <GoogleMap/>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Search;

export async function getServerSideProps() {
    const hotels = await fetch('https://whispering-tundra-09529.herokuapp.com/hotels').then(res => res.json());

    return {
        props: {
            hotels
        },
    };
}