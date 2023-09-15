import React from "react";
import '../styles/navbar.scss'
import coffeeIcon from '../assets/coffeeicon.png'

const Navbar:React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={coffeeIcon} alt="#" />
      </div>
      <div className="navbar__li">
        <div className="li__left">
          <li>HOME</li>
          <li>MENU</li>
          <li>RECIPE</li>
        </div>
        <div className="li__right">
          <li>MADE</li>
          <li>INFROMATION</li>
        </div>
      </div>
    </div>
  );
}
export default Navbar;