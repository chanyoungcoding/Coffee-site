import { useRecoilValue } from "recoil";
import { userName } from "../../recoil/shop";

const BasketProfile = () => {
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