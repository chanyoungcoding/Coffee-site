import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/common.scss'

import { QueryClientProvider, QueryClient } from 'react-query';

import Home from './pages/Home'
import Common from './pages/Common'
import MenuDetail from './components/Menu/MenuDetail'
import MenuMain from './components/Menu/MenuMain'
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
import CoffeeStoryCommon from './pages/CoffeeStoryCommon';
import SignIn from './pages/SignIn';
import LoginRoutes from './routes/LoginRoutes';
import KakaoMap from './Hooks/KakaoMap';

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
            <Route element={<CoffeeStoryCommon/>}>
              <Route path='/coffeeproductionprocess' element={<CoffeeProductionProcess/>}/>
              <Route path='/coffeehistory' element={<CoffeeHistory/>}/>
              <Route path='/coffeetypes' element={<CoffeeTypes/>}/>
              <Route path='/coffeehealth' element={<CoffeeHealth/>}/>
            </Route>
            <Route element={<LoginRoutes/>}>
              <Route path='/mypage' element={<MyPage/>}/>
              <Route path='/shopbasket' element={<ShopBasket/>}/>
              <Route path='/shoporder' element={<ShopOrder/>}/>
              <Route path='/shopcomplete' element={<ShopComplete/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/kakaomap' element={<KakaoMap/>}/>
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
