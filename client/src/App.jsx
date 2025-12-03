import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <main className='overflow-hidden text-tertiary'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection/' element={<Collection />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </main>
  )
}

export default App