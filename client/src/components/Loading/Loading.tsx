import React from "react";
import { FadeLoader } from "react-spinners";

const Loading:React.FC = () => {
  return ( 
    <div className="loading">
      <FadeLoader color="rgba(255, 166, 61, 1)" />
    </div>
  );
}

export default Loading;