import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className='max-padd-container  relative h-[60vh] md:h-[80vh] lg:h-[85vh] mt-18 md:mt-15  rounded-4xl overflow-hidden'>

            <div className='rounded-t-full'>
                <img
                    src={heroImage}
                    alt="Makeup products for hero section"
                    className="absolute inset-0 w-full h-full object-cover object-center md:object-cover-right p-3 rounded-4xl"
                />
                <div className='absolute inset-0 flex items-center justify-start max-w-[1440px] mx-auto px-4 md:px-8 z-10'>
                    <div className='max-w-xl md:max-w-3xl  md:pl-0'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                                   font-bold pl-5 capitalize leading-tight mb-3 md:mb-5'>
                            Master Your <br /> Makeup Routine.
                        </h1>
                        <p className='text-sm sm:text-base md:text-xl pl-5 max-w-lg mb-6'>
                            From dramatic Smoky Eyeshadow Palettes to long-wearing Liquid Lipsticks—find the high-performance products loved by beauty experts.
                        </p>

                        <div className='flex pl-4'>
                            <Link
                                to={'/collection'}
                                className='bg-white text-gray-800 py-3 px-6 rounded-full 
                                       font-semibold hover:bg-gray-200 transition duration-300'
                            >
                                Our Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero