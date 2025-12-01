import React from 'react'
import Hero from '../components/Hero'
import Features from '../context/Features'
import NewArrivals from '../components/NewArrivals'
import PopularProducts from '../components/PopularProducts'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <NewArrivals />
            <PopularProducts />
            <div className="hidden sm:block max-padd-container mt-28 bg-[url('src/assets/banner.png')] bg-cover bg-center bg-no-repeat h-56"></div>
            <Testimonials />
            <div className='w-70 h-[3px] md:w-200 rounded-full mx-auto my-5 bg-linear-to-r from-[#DDD9FF] via-secondary to-[#DDD9FF]'></div>
            <Footer />
        </>
    )
}

export default Home