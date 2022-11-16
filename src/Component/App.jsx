import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Shop from './Shop'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
export default function App() {
    return (
            <>
                <Navbar />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/shop/:mc/:sc/:br' element={<Shop />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/profile' element={<Profile /> } />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </>
    )
}
