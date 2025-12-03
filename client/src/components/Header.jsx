import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { assets } from '../assets/data'
import { useClerk, UserButton } from '@clerk/clerk-react'
import { useAppContext } from '../context/AppContext'

// Başarı ikonu için sabit SVG
const SuccessIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M16.5 8.31V9a7.5 7.5 0 1 1-4.447-6.855M16.5 3 9 10.508l-2.25-2.25"
            stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

// Kapatma butonu ikonu
const CloseIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect y="12.532" width="17.498" height="2.1" rx="1.05"
            transform="rotate(-45.74 0 12.532)" fill="currentColor" fillOpacity=".7" />
        <rect x="12.531" y="13.914" width="17.498" height="2.1" rx="1.05"
            transform="rotate(-135.74 12.531 13.914)" fill="currentColor" fillOpacity=".7" />
    </svg>
)

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const toggleMenu = () => setMenuOpened(prev => !prev)

    const OrdersIcon = () => (
        <svg width="24" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 36 36">
            <path d="M15 12h-5" /><path d="M19 12h-5" /><path d="M15 8h-5" />
            <path d="M19 17v5a2 2 0 0 0-2-2H4" />
        </svg>
    )

    const { openSignIn } = useClerk()

    const {
        user,
        navigate,
        cartItems,
        toastVisible,
        toastProductTitle,
        setToastVisible
    } = useAppContext()

    return (
        <header className='absolute top-0 left-0 right-0 z-50 bg-white py-2 shadow-md'>
            <div className="max-padd-container flexBetween">

                {/* Logo */}
                <div className="flex flex-1">
                    <Link to={'/'} className='flex items-center'>
                        <img src={assets.logoImg} alt="Blessly Logo" className='h-15 sm:h-12' />
                    </Link>
                </div>

                {/* Navbar */}
                <div className='flex-1'>
                    <Navbar
                        setMenuOpened={setMenuOpened}
                        containerStyles={` ${menuOpened
                            ? "flex items-start flex-col gap-y-6 fixed top-12 right-4 p-4 bg-white rounded-lg shadow-xl w-40 z-50 medium-14"
                            : "hidden lg:flex gap-x-4 xl:gap-x-6 medium-14 bg-secondary/10 rounded-full p-1"
                            }`}
                    />
                </div>

                {/* Right Icons */}
                <div className='flex flex-1 items-center justify-end gap-x-3 sm:gap-x-5'>

                    {/* Mobile Menu Toggle */}
                    <div className='relative lg:hidden w-6 h-5'>
                        <img onClick={toggleMenu} src={assets.menu} alt="menu"
                            className={`absolute inset-0 cursor-pointer transition-opacity duration-300 ${menuOpened ? "opacity-0" : "opacity-100"}`} />
                        <img onClick={toggleMenu} src={assets.menuClose} alt="menu close"
                            className={`absolute inset-0 cursor-pointer transition-opacity duration-300 ${menuOpened ? "opacity-100" : "opacity-0"}`} />
                    </div>

                    {/* Cart Button → DOĞRUDAN PAYMENT SAYFASINA GİDER */}
                    <div className='relative cursor-pointer' onClick={() => navigate('/payment')}>
                        <img src={assets.cartAdded} alt="cart" className='min-w-6' />

                        {/* Cart Counter */}
                        <label className='absolute bottom-5 right-0 left-0 text-[10px] font-bold 
                                bg-secondary/15 flexCenter rounded-full w-4 h-4'>
                            {cartItems.length}
                        </label>
                    </div>

                    {/* User Profile */}
                    <div className='group'>
                        {user ? (
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action
                                        label='My Orders'
                                        labelIcon={<OrdersIcon />}
                                        onClick={() => navigate('/my-orders')}
                                    />
                                </UserButton.MenuItems>
                            </UserButton>
                        ) : (
                            <button
                                onClick={openSignIn}
                                className='btn-secondary flexCenter gap-1 rounded-full text-sm py-2 px-3'
                            >
                                Login
                                <img src={assets.user} alt="user icon" className='invert w-4' />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* 🔔 Toast Bildirimi */}
            <div
                className={`fixed top-5 right-5 z-101 transition-transform duration-500 ease-out 
                    ${toastVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            >
                <div className="bg-white inline-flex space-x-3 p-3 text-sm rounded border border-gray-200 shadow-lg min-w-[280px]">
                    <SuccessIcon />
                    <div className='flex-1'>
                        <h3 className="text-slate-700 font-medium">Item Added!</h3>
                        <p className="text-slate-500">{toastProductTitle} has been added to your cart.</p>
                    </div>
                    <button
                        type="button"
                        aria-label="close"
                        onClick={() => setToastVisible(false)}
                        className="cursor-pointer mb-auto text-slate-400 hover:text-slate-600 active:scale-95 transition"
                    >
                        <CloseIcon />
                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header
