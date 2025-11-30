import React from 'react'
import { assets } from '../assets/data'

const Features = () => {
    return (
        <section className='maxx-padd-container ml-5 mr-2 my-10 xl:my-22'>
            {/* container */}
            {/*
               Grid Yapısı İyileştirmesi:
               - Varsayılan (Mobil) -> grid-cols-2 (2 sütunlu)
               - md -> grid-cols-3
               - lg -> grid-cols-4
               - xl -> grid-cols-5 (Orijinal x1 x1 x1 x1 x1 yapısı)
            */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            xl:grid-cols-5 gap-6 gap-y-12 items-center rounded-xl'>

                {/* GÖRSEL 1 */}
                <div className='flex justify-center'>
                    <img src={assets.features1} alt="Product Quality Image" height={77} width={222} className='rounded-full shadow-lg outline-secondary/50 outline-1' />
                </div>

                {/* GÖRSEL 2 */}
                <div className='flex justify-center'>
                    <img src={assets.features2} alt="Delivery Image" width={222} className='rounded-full h-37 shadow-lg outline-secondary/50 outline-1' />
                </div>

                {/* ÖZELLİK 1: Product Quality (Mobil: Üst sıra Sol) */}
                <div className='p-4 text-center sm:text-left'>
                    <h4 className='h4 capitalize text-shadow-lg'>Product Quality</h4>
                    <p>Blessly products lorem ipsum lorem ipsum</p>
                </div>

                {/* ÖZELLİK 2: Fast Delivery (Mobil: Üst sıra Sağ) */}
                <div className='p-4 text-center sm:text-left'>
                    <h4 className='h4 capitalize text-shadow-lg'>Fast Delivery</h4>
                    <p>Blessly products lorem ipsum lorem ipsum</p>
                </div>

                {/* ÖZELLİK 3: Secure Payment (MOBİL İYİLEŞTİRME: Alt sıra Ortalanmış) */}
                <div
                    // Mobil: 2 sütun kapla (col-span-2) ve merkezle (mx-auto, text-center)
                    // sm/md'den itibaren varsayılan 1 sütunluk grid akışına devam etsin.
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