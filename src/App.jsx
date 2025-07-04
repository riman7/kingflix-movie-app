import { BrowserRouter, Routes, Route } from 'react-router';
import Search from './pages/Search';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import { useState } from 'react'

import './App.css'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        {/* <Route path="/movie/:id" element={<MovieDetail />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
