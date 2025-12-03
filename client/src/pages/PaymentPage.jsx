import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
    const { cartItems, removeFromCart, updateCartQuantity, formatPrice } = useAppContext();
    const [showAddress, setShowAddress] = useState(false);
    const [addresses, setAddresses] = useState([{ id: 1, label: "New York, USA" }]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [newAddressLabel, setNewAddressLabel] = useState("");

    const navigate = useNavigate();

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.02;
    const shipping = 0;
    const total = subtotal + tax + shipping;

    const handleQuantityChange = (id, delta) => {
        const item = cartItems.find(p => p._id === id);
        if (!item) return;
        const newQty = item.quantity + delta;
        if (newQty < 1) return;
        updateCartQuantity(id, newQty);
    };

    const handleAddAddress = () => {
        if (!newAddressLabel.trim()) return;
        const newAddress = { id: Date.now(), label: newAddressLabel };
        setAddresses(prev => [...prev, newAddress]);
        setSelectedAddress(newAddress.id);
        setNewAddressLabel("");
        setShowAddress(false);
    };

    const handleDeleteAddress = (id) => {
        setAddresses(prev => prev.filter(addr => addr.id !== id));
        if (selectedAddress === id) setSelectedAddress(null);
    };

    return (
        <div className="flex flex-col md:flex-row mt-8 py-8 max-w-6xl w-full px-4 md:px-6 mx-auto gap-6">

            {/* LEFT */}
            <div className="flex-1">
                <h1 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                    Shopping Cart
                    <span className="text-sm text-purple-600">{cartItems.length} Items</span>
                </h1>

                <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3 border-b border-gray-200">
                    <p>Product</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                <div className="space-y-4">
                    {cartItems.map((p, index) => (
                        <div
                            key={index}
                            className="grid md:grid-cols-[2fr_1fr_1fr] items-center bg-white rounded-2xl shadow-sm p-3 hover:shadow-lg transition-shadow cursor-pointer gap-4"
                            onClick={() => navigate(`/products/${p._id}`)}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md shrink-0">
                                    <img src={p.image} className="w-full h-full object-cover" alt={p.title} />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-700">{p.title}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={e => { e.stopPropagation(); handleQuantityChange(products._id, -1); }}
                                            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition"
                                        >−</button>
                                        <span className="w-6 text-center">{p.quantity}</span>
                                        <button
                                            onClick={e => { e.stopPropagation(); handleQuantityChange(p._id, 1); }}
                                            className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition"
                                        >+</button>
                                    </div>
                                </div>
                            </div>

                            <p className="text-center font-medium text-gray-700">{formatPrice(p.price * p.quantity)}</p>

                            <button
                                onClick={e => { e.stopPropagation(); removeFromCart(p._id); }}
                                className="text-red-500 hover:text-red-700 mx-auto text-lg"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>

                <button onClick={() => navigate(-1)} className="mt-6 text-purple-600 font-medium flex items-center gap-2 hover:underline">
                    ← Continue Shopping
                </button>
            </div>

            {/* RIGHT */}
            <div className="max-w-[380px] w-full bg-white p-6 shadow-xl rounded-2xl border h-max mt-6 md:mt-0">
                <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
                <hr className="my-4" />

                {/* ADDRESS */}
                <div>
                    <p className="text-sm font-medium uppercase text-gray-600">Delivery Address</p>
                    <div className="flex justify-between items-start mt-2 relative">
                        <p className="text-gray-500">{selectedAddress ? addresses.find(a => a.id === selectedAddress)?.label : "No address selected"}</p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-purple-600 text-sm hover:underline">Change</button>

                        {showAddress && (
                            <div className="absolute top-10 w-full bg-white border rounded-2xl shadow-md z-20 p-3 space-y-2">
                                {addresses.map(addr => (
                                    <div key={addr.id} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                                        <p
                                            onClick={() => { setSelectedAddress(addr.id); setShowAddress(false); }}
                                            className={selectedAddress === addr.id ? "font-semibold" : ""}
                                        >
                                            {addr.label}
                                        </p>
                                        <button onClick={() => handleDeleteAddress(addr.id)} className="text-red-500 px-2 hover:text-red-700 rounded-full">✕</button>
                                    </div>
                                ))}
                                <div className="flex gap-2 mt-2">
                                    <input
                                        type="text"
                                        value={newAddressLabel}
                                        onChange={e => setNewAddressLabel(e.target.value)}
                                        placeholder="New address"
                                        className="border border-gray-300 px-3 py-2 rounded-2xl flex-1 outline-none focus:ring-2 focus:ring-purple-300"
                                    />
                                    <button onClick={handleAddAddress} className="bg-purple-600 text-white px-4 py-2 rounded-2xl hover:bg-purple-700 transition">
                                        Add
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* PAYMENT METHOD */}
                    <p className="text-sm font-medium uppercase mt-6 text-gray-600">Payment Method</p>
                    <select className="w-full border border-gray-300 px-3 py-2 rounded-2xl mt-2 outline-none focus:ring-2 focus:ring-purple-300">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="my-4" />

                {/* PRICE */}
                <div className="text-gray-600 space-y-2 text-sm">
                    <p className="flex justify-between"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></p>
                    <p className="flex justify-between"><span>Shipping</span><span className="text-green-600">Free</span></p>
                    <p className="flex justify-between"><span>Tax (2%)</span><span>{formatPrice(tax)}</span></p>
                    <p className="flex justify-between text-lg font-semibold text-gray-900 mt-4"><span>Total:</span><span>{formatPrice(total)}</span></p>
                </div>

                <button className="w-full py-3 mt-6 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-semibold transition">
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default PaymentPage;
