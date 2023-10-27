import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/common.scss'

import { QueryClientProvider, QueryClient } from 'react-query';

import Home from './pages/Home'
import Common from './pages/Common'
import MenuDetail from './components/Menu/MenuDetail'
import MenuMain from './components/Menu/MenuMain'
import Test from './components/Test'
import Country from './components/Country/Country'
import Recipe from './components/Recipe/Recipe'
import RecipeHome from './components/Recipe/RecipeHome'
import ErrorPage from './pages/ErrorPage'
import { RecoilRoot } from 'recoil';
import Shopping from './components/Shopping/Shopping';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

const queryClient = new QueryClient();

const App:React.FC = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Common/>}>
            <Route path="/" element={<Home/>}/>
            <Route path='/menuDetail/:name' element={<MenuDetail/>}/>
            <Route path='/menu' element={<MenuMain/>}/>
            <Route path='/country' element={<Country/>}/>
            <Route path='/recipe/:name' element={<Recipe/>}/>
            <Route path='/recipeHome' element={<RecipeHome/>}/>
            <Route path='/shop' element={<Shopping/>}/>
            <Route path='/shopBasket' element={<MyPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
