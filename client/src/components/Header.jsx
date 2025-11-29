import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { assets } from '../assets/data'

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false)
    const toggleMenu = () => setMenuOpened(prev => !prev)

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
                    <div className='group relative'>
                        <button className='btn-secondary flexCenter gap-1 rounded-full text-sm py-2 px-3'> {/* Buton dolgu ve metin küçültüldü */}
                            Login
                            <img src={assets.user} alt="user icon"
                                className='invert w-4' /> {/* İkon küçültüldü */}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header