import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/common.scss'

import Home from './pages/Home'
import Common from './pages/Common'
import MenuDetail from './components/Menu/MenuDetail'
import MenuMain from './components/Menu/MenuMain'
import Test from './components/Test'
import Country from './components/Country/Country'
import Recipe from './components/Recipe/Recipe'

const App:React.FC = () => {
  return (
    <Routes>
      <Route element={<Common/>}>
        <Route path="/" element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/menuDetail/:name' element={<MenuDetail/>}/>
        <Route path='/menu' element={<MenuMain/>}/>
        <Route path='/country' element={<Country/>}/>
        <Route path='/recipe/:name' element={<Recipe/>}/>
      </Route>
    </Routes>
  )
}

export default App
