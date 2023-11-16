import React, { useState } from "react";
import { SlBasket, SlLogin, SlLogout,SlUser, SlLoop } from "react-icons/sl";
import Cookies from "js-cookie";

import coffeeIcon from '../assets/coffeeicon.png'
import { Link, useNavigate } from "react-router-dom";

import '../styles/navbar.scss'

const Navbar:React.FC = () => {

  const username = Cookies.get('사용자명')
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const toggleNavVisible = () => {
    setVisible(!visible)
  }

  const clearCookies = () => {
    Cookies.remove('사용자명');
    navigate('/')
    window.location.reload();
  }

  const test = 'test'
  console.log("🚀 ~ file: Navbar.tsx:28 ~ test:", test)

  return (
    <div className="navbar">
      <div className="navbar__side">
        {username ? 
        <>
          <button className="logout" onClick={clearCookies}>
            <SlLogout size="30"/>
          </button>
          <Link to='/shopbasket'>
            <SlBasket size="30"/>
          </Link> 
          <Link to='/mypage'>
            <SlUser size="30"/>
          </Link>
        </>
          :
          <>
          <Link to='/login'>
            <SlLogin size="30"/>
          </Link>
          <Link to='/signin'>
            <SlLoop size="30"/>
          </Link>
          </>
        }
      </div>
      <div className="navbar__logo" onClick={toggleNavVisible}>
        <img src={coffeeIcon} alt="#" />
      </div>
      <div className="navbar__li">
        <div className="li__inner">
          <div className={`li__left ${visible ? "visible" : ""}`}>
            <Link to='/'><li>HOME</li></Link>
            <Link to='/menu'><li>MENU</li></Link>
            <Link to='/recipeHome'><li>RECIPE</li></Link>
          </div>
        </div>
        <div className="li__inner">
          <div className={`li__right ${visible ? "visible" : ""}`}>
            <Link to='/country'><li>COUNTRY</li></Link>
            <Link to='/coffeeproductionprocess'><li>COFFEES</li></Link>
            <Link to='/shop'><li>SHOP</li></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;