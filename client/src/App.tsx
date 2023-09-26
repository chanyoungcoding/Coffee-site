import React from 'react'
import Home from './pages/Home'
import Common from './pages/Common'
import MenuDetail from './components/Menu/MenuDetail'
import MenuMain from './components/Menu/MenuMain'
import { Routes, Route } from 'react-router-dom'
import './styles/common.scss'

import Test from './components/Test'

const App:React.FC = () => {
  return (
    <Routes>
      <Route element={<Common/>}>
        <Route path="/" element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/menuDetail/:name' element={<MenuDetail/>}/>
        <Route path='/menu' element={<MenuMain/>}/>
      </Route>
    </Routes>
  )
}

export default App
