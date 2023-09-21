import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Common from './pages/Common'
import './styles/common.scss'

import Test from './components/Test'

const App:React.FC = () => {
  return (
    <Routes>
      <Route element={<Common/>}>
        <Route path="/" element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
      </Route>
    </Routes>
  )
}

export default App
