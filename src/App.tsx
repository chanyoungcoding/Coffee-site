import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Common from './pages/Common'

const App:React.FC = () => {
  return (
    <Routes>
      <Route element={<Common/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  )
}

export default App
