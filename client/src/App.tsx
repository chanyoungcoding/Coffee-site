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
import RecipeHome from './components/Recipe/RecipeHome'

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
        <Route path='/recipeHome' element={<RecipeHome/>}/>
      </Route>
    </Routes>
  )
}

export default App
