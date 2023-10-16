import React from 'react';
import '../../styles/home.scss';

const HomeFifth:React.FC = () => {

  const lineText = ['COFFEE','COFFEE','COFFEE','COFFEE','COFFEE','COFFEE'];

  return ( 
    <div className="homefifth">
      <div className="homefifth__line">
        {lineText.map(text => (<p>{text}</p>))}
      </div>
      <div className="homefifth__inner">
        
      </div>
    </div>
  );
}
export default HomeFifth;