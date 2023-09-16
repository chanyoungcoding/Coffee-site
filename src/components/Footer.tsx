import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import coffeeIcon from '../assets/coffeeicon.png'
import '../styles/footer.scss'

const getCurrentYear = () => new Date().getFullYear();

const Footer:React.FC = () => {
  return ( 
    <div className="footer">
      <div className="footer__inner">
        <div className="inner__introduce">
          <p>CHAN COFFEE - &#169; {getCurrentYear()}</p>
          <p>hello</p>
        </div>
        <img src={coffeeIcon} alt="#" />
        <div className="inner__icon">
          <a href="javascript:void(0)">
            <AiFillFacebook size ="40"/>
          </a>
          <a href="javascript:void(0)">
            <AiFillInstagram size ="40"/>
          </a>
          <a href="javascript:void(0)">
            <AiFillYoutube size ="40"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;