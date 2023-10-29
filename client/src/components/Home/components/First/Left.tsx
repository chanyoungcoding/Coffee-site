import React from "react";

import Button from "../../../Button";

const Left:React.FC = () => {
  return ( 
    <>
      <h1>COFFEE</h1>
      <h2>An online coffee store</h2>
      <p>Learn more about coffee, and learn more about its types and recipes.</p>
      <div className="leftButton">
        <Button href={'/test'}>Explore our products</Button>
        <Button href={'/login'}>Log in / Sign up</Button>
      </div>
    </>
  );
}

export default Left;