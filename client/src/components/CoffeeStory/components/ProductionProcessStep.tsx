import React from "react";

interface ImgData {
  img: string;
  step: string;
}

interface ProcessData {
  num: number;
  step: ImgData;
}

const ProductionProcessStep:React.FC<ProcessData> = ({num, step}) => {
  return ( 
    <div className="step">
      <div className="step__inner">
        <img src={step.img} alt="#" />
        <div className="inner__introduce">
          <p className='introduce__step'>{`step${num}`}</p>
          <p>{step.step}</p>
        </div>
      </div>
    </div>
  );
}
export default ProductionProcessStep;