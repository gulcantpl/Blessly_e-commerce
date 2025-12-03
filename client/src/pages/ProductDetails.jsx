import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { dummyProducts } from '../assets/data';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products: contextProducts, addToCart } = useAppContext();
    const products = contextProducts?.length > 0 ? contextProducts : dummyProducts;

    const product = products.find(p => p._id === id);
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center flex-col gap-4">
                <p className="text-gray-700 text-lg">Product not found 😔</p>
                <button
                    onClick={() => navigate('/')}
                    className="px-4 py-2 bg-purple-600 text-white rounded-full"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const handleAddToCart = () => addToCart(product, quantity);

    return (
        <div className="min-h-screen py-8 px-4 mt-15 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                {/* Product Image */}
                <div className="lg:w-1/2 flex justify-center items-center">
                    <img
                        src={product.image || product.images?.[0]}
                        alt={product.title}
                        className="rounded-xl max-h-[400px] object-contain"
                    />
                </div>

                {/* Product Details */}
                <div className="lg:w-1/2 flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className="text-gray-600">{product.category}</p>
                    <p className="text-xl font-semibold text-purple-600">
                        ${product.price?.unit || Math.min(...Object.values(product.prices))}
                    </p>
                    <p className="text-gray-700">{product.description}</p>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-4">
                        <button
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="px-3 py-1 bg-gray-200 rounded-full"
                        >
                            -
                        </button>
                        <span className="px-4 py-1 border rounded-full">{quantity}</span>
                        <button
                            onClick={() => setQuantity(q => q + 1)}
                            className="px-3 py-1 bg-gray-200 rounded-full"
                        >
                            +
                        </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
