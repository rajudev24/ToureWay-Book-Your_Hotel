import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Reserved your room before land!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>
      <Banner/>
      {/* Banner  */}
    </div>
  )
}
