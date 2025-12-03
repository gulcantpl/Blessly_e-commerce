import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { dummyProducts } from '../assets/data';
import Item from '../components/Item';
import Footer from '../components/Footer'; // <-- Footer import

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products: contextProducts, addToCart } = useAppContext();
    const allProducts = contextProducts?.length > 0 ? contextProducts : dummyProducts;

    const product = allProducts.find(p => p._id === id);
    const [quantity, setQuantity] = useState(1);

    const suggestedProducts = useMemo(() => {
        if (!product) return [];
        let related = allProducts.filter(p => p._id !== id && p.category === product.category);
        if (related.length < 4) {
            const remaining = allProducts.filter(p => p._id !== id && !related.includes(p));
            for (let i = remaining.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
            }
            related = [...related, ...remaining.slice(0, 4 - related.length)];
        }
        return related.slice(0, 4);
    }, [id, product, allProducts]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center flex-col gap-4">
                <p className="text-gray-700 text-lg">Product not found 😔</p>
                <button
                    onClick={() => navigate('/')}
                    className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    const handleAddToCart = () => addToCart(product, quantity);

    const getDisplayPrice = () => {
        if (product.price && product.price.unit !== undefined) return product.price.unit;
        if (product.prices) return Math.min(...Object.values(product.prices));
        return 'N/A';
    };

    return (
        <div className="min-h-screen py-8 px-4 mt-20 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* Product Image */}
                <div className="lg:w-1/2 flex justify-center items-center">
                    <img
                        src={product.image || product.images?.[0]}
                        alt={product.title}
                        className="rounded-xl max-h-[450px] object-contain shadow-lg"
                    />
                </div>

                {/* Product Info */}
                <div className="lg:w-1/2 flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
                    <p className="text-purple-600 font-medium uppercase text-sm">{product.category}</p>
                    <p className="text-2xl font-extrabold text-purple-700">${getDisplayPrice()}</p>
                    <p className="text-gray-700 mt-2 leading-relaxed">{product.description}</p>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 mt-4">
                        <span className="font-semibold text-gray-700">Quantity:</span>
                        <div className="flex items-center border rounded-full overflow-hidden">
                            <button
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
                            >
                                -
                            </button>
                            <span className="px-3 py-1 text-gray-800 font-medium">{quantity}</span>
                            <button
                                onClick={() => setQuantity(q => q + 1)}
                                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart */}
                    <button
                        onClick={handleAddToCart}
                        className="mt-5 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold shadow-sm text-sm w-max"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Suggested Products */}
            {suggestedProducts.length > 0 && (
                <div className="mt-16 pt-10 max-w-6xl mx-auto">
                    <h2 className="text-2xl text-gray-800 font-semibold text-center mb-6">
                        You May Also Like
                    </h2>
                    <div className='w-70 h-[3px] md:w-100 rounded-full mx-auto my-5 bg-linear-to-r from-[#DDD9FF] via-secondary to-[#DDD9FF]'></div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {suggestedProducts.map((p) => (
                            <div
                                key={p._id || p.id}
                                onClick={() => navigate(`/products/${p._id || p.id}`)}
                                className="cursor-pointer hover:scale-[1.03] transition-transform duration-300 shadow rounded-xl"
                            >
                                <Item product={p} />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Footer */}
            <div className='mt-20'>
                <Footer />
            </div>
        </div>
    );
};

export default ProductDetails;

