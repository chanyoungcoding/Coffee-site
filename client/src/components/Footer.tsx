import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import '../styles/footer.scss'
import Logo from "./Logo";

const getCurrentYear = ():number => new Date().getFullYear();

const Footer:React.FC = () => {
  return ( 
    <div className="footer">
      <div className="footer__inner">
        <div className="inner__introduce">
          <p>CHAN COFFEE - &#169; {getCurrentYear()}</p>
        </div>
        <Logo/>
        <div className="inner__icon">
          <a href="/">
            <AiFillFacebook size ="40"/>
          </a>
          <a href="/">
            <AiFillInstagram size ="40"/>
          </a>
          <a href="/">
            <AiFillYoutube size ="40"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;