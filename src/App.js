import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DASHBOARD' element={<Dashboard/>}/>
        <Route path='/HEADER' element={<Header/>}/>
        <Route path='/FOOTER' element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App