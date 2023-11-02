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
import Recipe from './pages/RecipeDetail'
import RecipeHome from './pages/Recipe'
import ErrorPage from './pages/ErrorPage'
import { RecoilRoot } from 'recoil';
import Shopping from './pages/Shop';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import ShopDetail from './pages/ShopDetail';
import ShopBasket from './pages/ShopBasket';

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
            <Route path='/shopdetail/:name' element={<ShopDetail/>}/>
            <Route path='/shopbasket' element={<ShopBasket/>}/>
            <Route path='/mypage' element={<MyPage/>}/>
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
