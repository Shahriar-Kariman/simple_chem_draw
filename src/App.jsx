import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import LiveEditor from './components/LiveEditor'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Live Editor' element={<LiveEditor />} />
        <Route path='Home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
