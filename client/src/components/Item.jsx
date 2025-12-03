import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const formatPrice = (price, currencyCode) => {
    const locale = 'en-US';
    const code = currencyCode || 'USD';
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: code,
            minimumFractionDigits: 2,
        }).format(price);
    } catch {
        const symbol = code === 'USD' ? '$' : code;
        return `${symbol}${price.toFixed(2)}`;
    }
};

const Item = ({ product }) => {
    const { currency } = useAppContext();
    const [hovered, setHovered] = useState(false);
    const { _id, title, images, type, price } = product;

    const displayPrice = useMemo(() =>
        formatPrice(price.unit, currency),
        [price.unit, currency]
    );

    const cardClass = `group cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl rounded-xl overflow-hidden`;

    return (
        <Link to={`/products/${_id}`} onClick={() => window.scrollTo(0, 0)}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={cardClass}
            >
                <div className='bg-white rounded-xl'>
                    {/* Image */}
                    <div className='flex justify-center items-center h-[250px] w-full relative'>
                        <img
                            src={images[0]}
                            alt={title}
                            className='object-contain w-auto h-full p-4 transition-all duration-300'
                        />
                    </div>

                    {/* Info */}
                    <div className='pt-3 px-3 pb-4 text-left'>
                        <p className='text-xs text-gray-500 mb-2 capitalize inline-block bg-gray-100 rounded-full px-3 py-1 font-medium'>
                            {type}
                        </p>
                        <h5 className='text-base font-semibold text-gray-800 truncate mt-1'>
                            {title}
                        </h5>
                        <p className='text-md font-bold text-secondary mt-1'>
                            {displayPrice}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
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
