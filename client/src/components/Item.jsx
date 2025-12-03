import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';



const Item = ({ product }) => {
    const { currency, addToCart, formatPrice } = useAppContext();
    const [hovered, setHovered] = useState(false);
    const { _id, title, images, type, price } = product;

    const displayPrice = useMemo(() =>
        formatPrice(price.unit, currency),
        [price.unit, currency, formatPrice]
    );

    const cardClass = `group relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl rounded-xl overflow-hidden`;

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product, 1);
    };

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cardClass}
        >
            <Link to={`/products/${_id}`} onClick={() => window.scrollTo(0, 0)}>
                <div className='bg-white rounded-xl relative'>
                    {/* Image */}
                    <div className='flex justify-center items-center h-[250px] w-full relative'>
                        <img
                            src={images[0]}
                            alt={title}
                            className='object-contain w-auto h-full p-4 transition-all duration-300'
                        />
                    </div>

                    {/* Info */}
                    <div className='pt-3 px-3 mt-1 pb-4 text-left'>
                        <p className='text-xs text-gray-500 mb-2 capitalize inline-block bg-gray-100 rounded-full px-3 py-1 font-medium'>
                            {type}
                        </p>
                        <h5 className='text-base font-semibold mb-4 text-gray-800 truncate mt-1'>
                            {title}
                        </h5>
                        <p className='text-md font-bold text-secondary mt-1'>
                            {displayPrice}
                        </p>
                    </div>
                </div>
            </Link>

            {/* Add to Cart Button */}
            <button
                onClick={handleAddToCart}
                className={`absolute bottom-3 right-3 px-3 py-1 text-sm bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition`}
            >
                Add to Cart
            </button>
        </div>
    );
};

Item.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.shape({
            unit: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Item;
