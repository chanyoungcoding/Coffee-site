import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Common = () => {
  return ( 
    <div className="main">
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default Common;