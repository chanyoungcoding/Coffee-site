import React, { useState } from "react";
import '../styles/navbar.scss'
import coffeeIcon from '../assets/coffeeicon.png'

const Navbar:React.FC = () => {

  const [visible, setVisible] = useState(false);

  const toggleNavVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="navbar">
      <div className="navbar__logo" onClick={toggleNavVisible}>
        <img src={coffeeIcon} alt="#" />
      </div>
      <div className="navbar__li">
        <div className="li__inner">
          <div className={`li__left ${visible ? "visible" : ""}`}>
            <li>HOME</li>
            <li>MENU</li>
            <li>RECIPE</li>
          </div>
        </div>
        <div className="li__inner">
          <div className={`li__right ${visible ? "visible" : ""}`}>
            <li>MADE</li>
            <li>INFROMATION</li>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;