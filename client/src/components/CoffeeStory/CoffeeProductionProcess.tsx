import ProductionProcessStep from "./components/ProductionProcessStep";

import process1 from '../../assets/process-1.jpeg';
import process2 from '../../assets/process-2.jpeg';
import process3 from '../../assets/process-3.jpeg';
import process4 from '../../assets/process-4.jpeg';
import process5 from '../../assets/process-5.jpeg';
import process6 from '../../assets/process-6.jpeg';
import process7 from '../../assets/process-7.jpeg';
import process8 from '../../assets/process-8.jpeg';
import process9 from '../../assets/process-9.jpeg';
import process10 from '../../assets/process-10.jpeg';
import process11 from '../../assets/process-11.jpeg';
import process12 from '../../assets/process-12.jpeg';
import process13 from '../../assets/process-13.jpeg';
import process14 from '../../assets/process-14.jpeg';
import { useMemo } from "react";
const CoffeeProductionProcess = () => {

  const productionStep = useMemo(() => [
    {img: process1, step: '커피모종'},
    {img: process2, step: '커피나무'},
    {img: process3, step: '커피나무 꽃'},
    {img: process4, step: '커피나무 그린 열매'},
    {img: process5, step: '커피나무 엘로우 열매'},
    {img: process6, step: '커피나무 레드 열매'},
    {img: process7, step: '커피 열매 수확'},
    {img: process8, step: '커피 열매 수확 후 선별'},
    {img: process9, step: '선별된 열매 탈피 후 1차 세척'},
    {img: process10, step: '발효 및 2차 세척'},
    {img: process11, step: '세척 후 건조'},
    {img: process12, step: '건조 후 불량 콩 선별'},
    {img: process13, step: '선별 후 포장'},
    {img: process14, step: '포장 후 창고 보관'},
  ],[])

  return ( 
    <div className="coffeeproductionprocess">
      <h1>커피재배와 생산과정</h1>
      <div className="productionprocess__inner">
        <p>
          커피는 토양에 따라 맛에 미묘한 차이가 있는데, 유기성이 풍부한 화산회토질에서 잘 자랍니다.<br/>
          화산작용으로 생긴 화산회질과 부식토는 유기성이 풍부하고 질소 인산, 석회 포타슘이 다량 함유되어 있어 커피풍작에 안성맞춤 토질입니다.<br/>
          에티오피아 커피생산지인 아라비아 고원, 중미의 고산지나 남미의 안데스 산 지역, 아프리카 고원지대등 커피 생산국의 토양이 대부분 화산 작용으로 인해 생성되어 화산회질과 부식토가 잘 어울려 질 좋은 커피 생산하고 있습니다.<br/>
          커피는 고도 1000M 이상의 고온다습한 열대 및 아열대 지역에서 잘 자라는데,뜨겁게 내리쪼이는 열대의 강렬한 태양을 식혀주는 안개나 구름이 적당히 끼고 기온이 낮아서 커피 열매가 천천히 숙성하는데 가장 좋은 조건입니다. <br/>
          고산지에서 자라는 농작물은 병충해가 적고 낮과 밤의 기온 차가 심하기 때문에 커피 두의 육질이 단단해져서 커피의 맛과 농도에 깊은 영향을 줍니다.<br/>
          커피나무는 다년생 쌍떡잎식물,꼭두서니 과에 속하는 상록수로 노니와 치자가 같은 과에 속하며,커피 씨앗을 심은후 40~60일이 지나면 싹이 트고, 9~18개월이 지나면 50~70cm 정도로 성장합니다. <br/>
          씨앗을 심어 열매를 수확할 때까지 3년 정도의 시간이 필요하며 그 후로 30년 동안은 계속 열매 수확이 가능합니다. <br/>
          커피꽃은 작고 하얀색으로 재스민, 오렌지 꽃과 비슷한 향이 나며, 꽃이 지고 수일 후에 열매가 맺히고 초록색의 둥근 열매는 6~8개월 후부터 점점 붉은 색으로 바뀌어 갑니다. 
          수확은 일반적으로 1년에 1~2회 정도 합니다
        </p>
        <div className="inner__step">
          {productionStep.map((item, index) => (
            <ProductionProcessStep key={index} num={index} step={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CoffeeProductionProcess;