import styled from 'styled-components'

import coffeebox1_png from "../../../../assets/coffeebox.png"
import coffeebox1_jpg from "../../../../assets/coffeebox.jpg"
import coffeebox1_webp from "../../../../assets/coffeebox.webp"

import coffeebox2_png from "../../../../assets/coffeebox2.png"
import coffeebox2_jpg from "../../../../assets/coffeebox2.jpg"
import coffeebox2_webp from "../../../../assets/coffeebox2.webp"

import coffeebox3_png from "../../../../assets/coffeebox3.png"
import coffeebox3_jpg from "../../../../assets/coffeebox3.jpg"
import coffeebox3_webp from "../../../../assets/coffeebox3.webp"

import coffeebox4_png from "../../../../assets/coffeebox4.png"
import coffeebox4_jpg from "../../../../assets/coffeebox4.jpg"
import coffeebox4_webp from "../../../../assets/coffeebox4.webp"


const CoffeeBoxBase = `
  width: 40%;
  height: 85%;
  margin: 10px;
  border-radius: 15px;
  object-fit: cover;
`;

const CoffeeBoxImage = styled.img`
  ${CoffeeBoxBase}
`

const CoffeeBoxSource = styled.source`
  ${CoffeeBoxBase}
`

const Left = () => {
  return ( 
    <>
      <div className="right__imgbox">
        <picture>
          <CoffeeBoxSource srcSet={coffeebox1_webp} />
          <CoffeeBoxSource srcSet={coffeebox1_jpg} />
          <CoffeeBoxImage src={coffeebox1_png}/>
        </picture>
        
        <picture>
          <CoffeeBoxSource srcSet={coffeebox2_webp} />
          <CoffeeBoxSource srcSet={coffeebox2_jpg} />
          <CoffeeBoxImage src={coffeebox2_png}/>
        </picture>

      </div>
      <div className="right__imgbox">
      <picture>
          <CoffeeBoxSource srcSet={coffeebox3_webp} />
          <CoffeeBoxSource srcSet={coffeebox3_jpg} />
          <CoffeeBoxImage src={coffeebox3_png}/>
        </picture>

        <picture>
          <CoffeeBoxSource srcSet={coffeebox4_webp} />
          <CoffeeBoxSource srcSet={coffeebox4_jpg} />
          <CoffeeBoxImage src={coffeebox4_png}/>
        </picture>
      </div>
    </>
  );
}

export default Left;