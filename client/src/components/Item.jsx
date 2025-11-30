import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const Item = ({ product }) => {
    const { navigate, currency } = useAppContext()
    const [hovered, setHovered] = useState(false)
    const [size, setSize] = useState(product.sizes[0])

    const handleNavigate = () => {
        navigate(`/products/${product._id}`);
        scrollTo(0, 0);
    }

    return (
        <div
            onClick={handleNavigate}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className='group cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl rounded-xl'
        >
            <div className='overflow-hidden shadow-lg rounded-xl'>

                {/* Image Container */}
                <div
                    className='flexCenter h-[250px] w-full transition-all duration-300 relative bg-white'
                >
                    <img
                        src={
                            product.images.length > 1 && hovered
                                ? product.images[1]
                                : product.images[0]
                        }
                        alt={product.title}
                        width={200}
                        height={200}
                        className={`object-contain w-auto h-full p-4 transition-all duration-300`}
                    />

                    {/* QUICK VIEW Button  */}
                    <div
                        className={`absolute inset-x-0 bottom-0 flex justify-center pb-4 transition-all duration-300 transform 
                            ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); handleNavigate() }}
                            className={`w-11/12 py-2 text-sm font-semibold text-white bg-secondary 
                                hover:bg-black/70 transition-colors duration-200 rounded-full shadow-md`}
                        >
                            Quick View
                        </button>
                    </div>

                </div>

                {/* INFO  */}
                <div className='pt-3 px-3 pb-4 text-left'>

                    {/*Category/Type */}
                    <p className='text-xs text-gray-500 mb-2 capitalize 
                        inline-block bg-gray-100 rounded-full px-3 py-1 font-medium'>
                        {product.type}
                    </p>

                    {/* Title */}
                    <h5 className='text-base font-semibold text-gray-800 truncate mt-1'>
                        {product.title}
                    </h5>

                    {/* Price */}
                    <p className='text-md font-bold text-secondary mt-1'>
                        {currency}{product.price.unit}.00
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Item