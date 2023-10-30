import coffeeBox from '../../../../assets/coffeebox.jpeg'
import coffeeBox1 from '../../../../assets/coffeebox1.jpeg'
import coffeeBox2 from '../../../../assets/coffeebox.jpg'
import coffeeBox3 from '../../../../assets/coffeebox1.jpg'

const Left = () => {
  return ( 
    <>
      <div className="right__imgbox">
        <img src={coffeeBox2} alt="#" />
        <img src={coffeeBox1} alt="#" />
      </div>
      <div className="right__imgbox">
        <img src={coffeeBox} alt="#" />
        <img src={coffeeBox3} alt="#" />
      </div>
    </>
  );
}

export default Left;