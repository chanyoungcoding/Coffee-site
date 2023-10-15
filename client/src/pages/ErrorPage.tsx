import errorImg from '../assets/error.png';
import '../styles/error.scss';

const Error = () => {
  return ( 
    <div className="error">
      <h1>Uh oh!</h1>
      <p>Something went wrong at our end.</p>
      <p>Don't worry, it's network problem - please try again</p>
      <img src={errorImg} alt="#"/>
    </div>
  );
}

export default Error;