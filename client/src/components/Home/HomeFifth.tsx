import React from 'react';
import '../../styles/home.scss';
import Line from './components/Fifth/Line';
import Inner from './components/Fifth/Inner';

const HomeFifth:React.FC = () => {

  return ( 
    <div className="homefifth">
      <Line/>
      <div className="homefifth__inner">
        <Inner/>
      </div>
    </div>
  );
}
export default HomeFifth;