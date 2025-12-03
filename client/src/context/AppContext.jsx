import { useUser } from '@clerk/clerk-react'
import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyProducts } from '../assets/data'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const fetchProducts = async () => {
        setProducts(dummyProducts)
    }
    const currency = import.meta.env.VITE_CURRENCY

    useEffect(() => {
        fetchProducts()
    }, [])

    const navigate = useNavigate()
    const { user } = useUser()
    const value = { navigate, user, products, currency, searchQuery, setSearchQuery }

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)
