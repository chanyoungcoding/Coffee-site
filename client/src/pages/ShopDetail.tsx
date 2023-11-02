import React from "react";

import '../styles/shopDetail.scss';
import DetailOrderSection from "../components/Shopping/ShopDetail/DetailOrderSection";

const ShopDetail:React.FC = () => {

  return ( 
    <div className="shopdetail">
      <div className="detail__shop">
        <DetailOrderSection/>
      </div>

      <div className="detail__shopdetail">

      </div>
    </div>
  );
}

export default ShopDetail;