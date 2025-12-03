import { useUser } from '@clerk/clerk-react';
import React, { createContext, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from '../assets/data';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastProductTitle, setToastProductTitle] = useState("");

    const fetchProducts = async () => setProducts(dummyProducts);
    const currency = import.meta.env.VITE_CURRENCY;

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const navigate = useNavigate();
    const { user } = useUser();

    const triggerToast = (title) => {
        setToastProductTitle(title);
        setToastMessage("Item successfully added to cart!");
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
    };

    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            const existing = prev.find(item => item._id === product._id);
            if (existing) {
                return prev.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prev, {
                    _id: product._id,
                    title: product.title,
                    image: product.images[0],
                    price: product.price.unit,
                    quantity
                }];
            }
        });
        triggerToast(product.title);
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item._id !== productId));
    };

    const updateCartQuantity = (productId, quantity) => {
        setCartItems(prev =>
            prev.map(item =>
                item._id === productId ? { ...item, quantity: Number(quantity) } : item
            )
        );
    };

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

    const value = {
        navigate,
        user,
        products,
        currency,
        searchQuery,
        setSearchQuery,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        formatPrice,
        toastVisible,
        toastMessage,
        toastProductTitle,
        setToastVisible,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
