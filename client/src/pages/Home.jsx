import React from 'react'
import Hero from '../components/Hero'
import Features from '../context/Features'
import NewArrivals from '../components/NewArrivals'

const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <NewArrivals />
        </>
    )
}

export default Home