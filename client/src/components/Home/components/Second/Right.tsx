import coffeeBox from '../../../../assets/coffeebox.jpeg'
import coffeeBox1 from '../../../../assets/coffeebox1.jpeg'
import coffeeBox2 from '../../../../assets/coffeebox.jpg'
import coffeeBox3 from '../../../../assets/coffeebox1.jpg'
import styled from 'styled-components'

const LeftImg = styled.img`
  width: 40%;
  height: 85%;
  margin: 10px;
  border-radius: 15px;
  object-fit: cover;
`

const Left = () => {
  return ( 
    <>
      <div className="right__imgbox">
        <LeftImg src={coffeeBox2} alt="#" />
        <LeftImg src={coffeeBox1} alt="#" />
      </div>
      <div className="right__imgbox">
        <LeftImg src={coffeeBox} alt="#" />
        <LeftImg src={coffeeBox3} alt="#" />
      </div>
    </>
  );
}

export default Left;