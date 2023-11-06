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
import ShopOrder from './components/Shopping/ShopOrder/ShopOrder';
import ShopComplete from './components/Shopping/ShopComplete/ShopComplete';
import CoffeeHistory from './components/CoffeeStory/CoffeeHistory';
import CoffeeHealth from './components/CoffeeStory/CoffeeHealth';
import CoffeeProductionProcess from './components/CoffeeStory/CoffeeProductionProcess';
import CoffeeTypes from './components/CoffeeStory/CoffeeTypes';
import CoffeeClassification from './components/CoffeeStory/CoffeeClassification';
import CoffeeStoryCommon from './pages/CoffeeStoryCommon';

const queryClient = new QueryClient();

const App:React.FC = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Common/>}>
            <Route path="/" element={<Home/>}/>
            <Route path='/menu' element={<MenuMain/>}/>
            <Route path='/menuDetail/:name' element={<MenuDetail/>}/>
            <Route path='/country' element={<Country/>}/>
            <Route path='/recipeHome' element={<RecipeHome/>}/>
            <Route path='/recipe/:name' element={<Recipe/>}/>
            <Route path='/shop' element={<Shopping/>}/>
            <Route path='/shopdetail/:name' element={<ShopDetail/>}/>
            <Route path='/shopbasket' element={<ShopBasket/>}/>
            <Route path='/shoporder' element={<ShopOrder/>}/>
            <Route path='/shopcomplete' element={<ShopComplete/>}/>
            <Route element={<CoffeeStoryCommon/>}>
              <Route path='/coffeeproductionprocess' element={<CoffeeProductionProcess/>}/>
              <Route path='/coffeehistory' element={<CoffeeHistory/>}/>
              <Route path='/coffeetypes' element={<CoffeeTypes/>}/>
              <Route path='/coffeehealth' element={<CoffeeHealth/>}/>
              <Route path='/coffeeclassification' element={<CoffeeClassification/>}/>
            </Route>
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
