import React from "react";

interface BasketProfile {
  userName: string | undefined;
}

const BasketProfile:React.FC<BasketProfile> = ({userName}) => {
  return ( 
    <>
      <h1>내 정보</h1>
      <div className="profile__name">
        <p>사용자</p>
        <p>{userName}</p>
      </div>
    </>
  );
}

export default BasketProfile;