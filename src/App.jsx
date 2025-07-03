import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movie/:id" element={<MovieDetail />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
