import React from 'react'
import { assets } from '../assets/data'

const Features = () => {
    return (
        <section className='maxx-padd-container ml-5 mr-2 my-10 xl:my-22'>
            {/* container */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            xl:grid-cols-5 gap-6 gap-y-12 items-center rounded-xl'>


                <div className='flex justify-center'>
                    <img src={assets.features1} alt="Product Quality Image" height={77} width={222} className='rounded-full shadow-lg outline-secondary/50 outline-1' />
                </div>


                <div className='flex justify-center'>
                    <img src={assets.features2} alt="Delivery Image" width={222} className='rounded-full h-37 shadow-lg outline-secondary/50 outline-1' />
                </div>


                <div className='p-4 text-center sm:text-left'>
                    <h4 className='h4 capitalize text-shadow-lg'>Product Quality</h4>
                    <p>Blessly products lorem ipsum lorem ipsum</p>
                </div>


                <div className='p-4 text-center sm:text-left'>
                    <h4 className='h4 capitalize text-shadow-lg'>Fast Delivery</h4>
                    <p>Blessly products lorem ipsum lorem ipsum</p>
                </div>


                <div

                    className='col-span-2 sm:col-span-1 mx-auto p-4 text-center'
                >
                    <h4 className='h4 capitalize text-shadow-lg'>Secure Payment</h4>
                    <p>Blessly products lorem ipsum lorem ipsum</p>
                </div>
            </div>
        </section>
    )
}

export default Features