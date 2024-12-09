import React from 'react'
import NavBar from './components/ui/NavBar'
import Footer from './components/ui/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './components/home/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
