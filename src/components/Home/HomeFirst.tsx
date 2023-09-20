import coffeecup from "../../assets/coffeecup1.png";
import coffeecup1 from "../../assets/coffeecup1.png";

const HomeFirst = () => {
  return ( 
    <div className="homeFirst">
      <div className="firstLeft">
        <h1>COFFEE</h1>
        <h2>An online coffee store</h2>
        <p>Learn more about coffee, and learn more about its types and recipes.</p>
      </div>
      <div className="firstRight">
        <img src={coffeecup} alt="#" />
        <img src={coffeecup1} alt="#" />
      </div>

    </div>
  );
}

export default HomeFirst;