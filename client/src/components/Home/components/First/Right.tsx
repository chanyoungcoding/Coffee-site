import styled from "styled-components";

import coffeecup_png from "../../../../assets/coffeecup1.png";
import coffeecup_jpg from "../../../../assets/coffeecup1.jpg";
import coffeecup_webp from "../../../../assets/coffeecup1.webp";
import coffeecup1_png from "../../../../assets/coffeecup2.png";
import coffeecup1_jpg from "../../../../assets/coffeecup2.jpg";
import coffeecup1_webp from "../../../../assets/coffeecup2.webp";

const RightBox = styled.div`
  position: relative;
  width: 700px;
  height: 700px;
  margin: 50px 0px;
`

const CoffeeImgBase = `
  position: absolute;
  width: 400px;
  height: 400px;  

  // iPad Pro
  @media (max-width: 1024px) {
    position: absolute;
    width: 300px;
    height: 300px;
  }
`;

const CoffeeImg = styled.img`
  ${CoffeeImgBase}
`;

const CoffeeSource = styled.source`
  ${CoffeeImgBase}
`;


const Right = () => {

  const items = [
    [coffeecup_webp, coffeecup_jpg, coffeecup_png],
    [coffeecup1_webp, coffeecup1_jpg, coffeecup1_png]
  ]; 

  return ( 
    <RightBox className="right__box">

      {items.map((item, index) => (
        <picture key={index}>
          <CoffeeSource className={`box__img${index + 1}`}  srcSet={item[0]} />
          <CoffeeSource className={`box__img${index + 1}`}  srcSet={item[1]} />
          <CoffeeImg className={`box__img${index + 1}`}  src={item[2]} alt="cup"/>
        </picture>
      ))}

    </RightBox>
  );
}

export default Right;