import React from "react";

const CountryTop:React.FC = () => {
  return ( 
    <>
      <div className="country__top">
        <h1>SINGLE ORIGIN COFFEE</h1>
        <h2>Which country's coffee beans do you want?</h2>
      </div>
      <div className="country__banner">
        <h1>the bean country</h1>
      </div>
      <div className="country__map"></div>
    </>
  );
}

export default CountryTop;