import React from "react";

const Line:React.FC = () => {
  const lineText = ['COFFEE','COFFEE','COFFEE','COFFEE','COFFEE','COFFEE'];

  return ( 
    <div className="homefifth__line">
      {lineText.map((text,index) => (<p key={index}>{text}</p>))}
    </div>
  );
}
export default Line;