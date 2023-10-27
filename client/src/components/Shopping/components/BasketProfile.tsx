import React from "react";
import { useRecoilValue } from "recoil";
import { userName } from "../../../recoil/shop";

const BasketProfile:React.FC= () => {
  const username = useRecoilValue(userName);
  
  return ( 
    <>
      <h1>내 정보</h1>
      <div className="profile__name">
        <p>사용자</p>
        <p>{username}</p>
      </div>
    </>
  );
}

export default BasketProfile;