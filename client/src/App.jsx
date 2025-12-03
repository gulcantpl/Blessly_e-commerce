import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import ProductDetails from './pages/ProductDetails'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import PaymentPage from './pages/PaymentPage'


const App = () => {
  return (
    <main className='overflow-hidden text-tertiary'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection/' element={<Collection />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path='/blog/' element={<Blog />} />
        <Route path='/contact/' element={<Contact />} />
        <Route path='/payment/' element={<PaymentPage />} />
      </Routes>
    </main>
  )
}

export default App