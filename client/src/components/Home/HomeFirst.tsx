
import { useSpring, animated } from 'react-spring';
import Left from "./components/First/Left";
import Right from "./components/First/Right";

const HomeFirst = () => {

  const springPropsLeft = useSpring({
    from: {opacity: 0, x: -200},
    to: {opacity: 1, x: 0},
    config: { duration: 500}
  })

  return ( 
    <div className="homeFirst">

      <animated.div style={springPropsLeft} className="firstLeft">
        <Left/>
      </animated.div>

      <div className="firstRight">
        <Right/>
      </div>

    </div>
  );
}

export default HomeFirst;