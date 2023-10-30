import React from "react";

const Main:React.FC = () => {
  const navbarLists = ['COFFEE','TASTE','COUNTRY',"SMELL"]
  return ( 
    <>
      <h1>MENU</h1>
      <div className="third__navbar">
        {navbarLists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </>
  );
}

export default Main;