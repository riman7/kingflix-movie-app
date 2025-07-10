import { BrowserRouter, Routes, Route } from 'react-router';
import Search from './pages/Search';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import { useState } from 'react'
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import Recommended from './pages/Recommended';
import Upcoming from './pages/Upcomming';
import Notification from './pages/Notification';
import Reminder from './pages/Reminder';
import Login from './pages/Login';
import './App.css'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
