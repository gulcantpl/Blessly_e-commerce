import React from 'react'
import Hero from '../components/Hero'
import Features from '../context/Features'
import NewArrivals from '../components/NewArrivals'
import PopularProducts from '../components/PopularProducts'

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <NewArrivals />
            <PopularProducts />
        </>
    )
}

export default Home