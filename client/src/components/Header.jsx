import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import { assets } from '../assets/data'
import { useClerk, UserButton } from '@clerk/clerk-react'
import { useAppContext } from '../context/AppContext'

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false)
    const toggleMenu = () => setMenuOpened(prev => !prev)
    const OrdersIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 36 36"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-scroll-text-icon lucide-scroll-text"
        >
            <path d="M15 12h-5" />
            <path d="M19 12h-5" />
            <path d="M15 8h-5" />
            <path d="M19 17v5a2 2 0 0 0-2-2H4" />
            <path d="M8 21h12a2 2 0 0 0-2-2v-1a1 1 0 0 0-1-1H1a1 1 0 0 0 1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
        </svg>
    );
    const { openSignIn } = useClerk()
    const { user, navigate } = useAppContext()
    return (

        <header className='absolute top-0 left-0 right-0 z-50 bg-white py-2 shadow-md'>
            <div className="max-padd-container flexBetween">


                <div className="flex flex-1">
                    <Link to={'/'} className='flex items-center'>
                        <img src={assets.logoImg} alt="Blessly Logo" className='h-15 sm:h-12' />
                    </Link>
                </div>

                <div className='flex-1'>
                    <Navbar
                        setMenuOpened={setMenuOpened}
                        containerStyles={` ${menuOpened
                            ? "flex items-start flex-col gap-y-6 fixed top-12 right-4 p-4 bg-white rounded-lg shadow-xl w-40 z-50 medium-14" // Boyut ve dolgu küçültüldü
                            : "hidden lg:flex gap-x-4 xl:gap-x-6 medium-14 bg-secondary/10 rounded-full p-1" // Metin boyutu küçültüldü
                            }`}
                    />
                </div>

                {/* Buttons & Profile icon*/}
                <div className='flex flex-1 items-center justify-end gap-x-3 sm:gap-x-5'>

                    {/* Menu Toggle */}
                    <div className='relative lg:hidden w-6 h-5'>
                        <img onClick={toggleMenu} src={assets.menu} alt="menu" className={`absolute inset-0 
                            lg:hidden cursor-pointer transition-opacity duration-300 ${menuOpened ? "opacity-0" : "opacity-100"
                            }`} />
                        <img onClick={toggleMenu} src={assets.menuClose} alt="menu" className={`absolute inset-0 
                            lg:hidden cursor-pointer transition-opacity duration-300 ${menuOpened ? "opacity-100" : "opacity-0"
                            }`} />
                    </div>

                    {/* Cart */}
                    <div className='relative cursor-pointer'>
                        <img src={assets.cartAdded} alt="cart"
                            className='min-w-6' />
                        <label
                            className='absolute bottom-5 right-0 left-0 text-[10px] font-bold 
                            bg-secondary/15 flexCenter rounded-full w-4 h-4'>
                            0
                        </label>
                    </div>

                    {/* User Profile*/}
                    <div className='group'>
                        {user ?
                            (
                                <UserButton>
                                    <UserButton.MenuItems>
                                        <UserButton.Action
                                            label='My Orders'
                                            labelIcon={<OrdersIcon />}
                                            onClick={() => navigate('/my-orders')}
                                        />
                                    </UserButton.MenuItems>
                                </UserButton>
                            )
                            :
                            (
                                <button onClick={openSignIn} className='btn-secondary flexCenter gap-1 rounded-full text-sm py-2 px-3'> {/* Buton dolgu ve metin küçültüldü */}
                                    Login
                                    <img src={assets.user} alt="user icon"
                                        className='invert w-4' />
                                </button>
                            )}
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header