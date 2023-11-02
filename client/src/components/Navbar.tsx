import React, { useState } from "react";
import '../styles/navbar.scss'
import coffeeIcon from '../assets/coffeeicon.png'
import { Link } from "react-router-dom";

import { SlBasket, SlLogin } from "react-icons/sl";

const Navbar:React.FC = () => {

  const [visible, setVisible] = useState(false);

  const toggleNavVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="navbar">
      <div className="navbar__basket">
        <Link to='/login'>
          <SlLogin size="40"/>
        </Link>
        <Link to='/shopbasket'>
          <SlBasket size="40"/>
        </Link>
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
            <Link to='/shop'><li>SHOP</li></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;