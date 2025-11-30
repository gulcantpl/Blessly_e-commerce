import React from 'react'
import { assets } from '../assets/data'

const Features = () => {
    return (
        <section className='maxx-padd-container my-10 xl:my-22'>
            {/* container */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            xl:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-6 gap-y-12 items-center rounded-xl'>
                <div><img src={assets.features1} alt="" height={77} width={222} className='rounded-full shadow-2xl outline-secondary/50 outline-1' /></div>
                <div><img src={assets.features2} alt="" width={222} className='rounded-full h-39 shadow-2xl  outline-secondary/50 outline-1' /></div>
                <div className='p-4 '>
                    <h4 className='h4 capitalize text-shadow-lg'>Product Quality</h4>
                    <p>Blessly products lorem ipsum lorem ipsum</p>
                </div>
                <div className='p-4 '>
                    <h4 className='h4 capitalize text-shadow-lg'>Fast Delivery</h4>
                    <p>Blessly products lorem ipsum lorem ipsum</p>
                </div>
                <div className='p-4 '>
                    <h4 className='h4 capitalize text-shadow-lg'>Secure Payment</h4>
                    <p>Blessly products lorem ipsum lorem ipsum</p>
                </div>
            </div>
        </section>
    )
}

export default Features