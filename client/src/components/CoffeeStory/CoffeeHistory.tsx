import history_1_png from '../../assets/history01.png';
import history_1_jpg from '../../assets/history01.jpg';
import history_1_webp from '../../assets/history01.webp';

import history_2_png from '../../assets/history02.png';
import history_2_jpg from '../../assets/history02.jpg';
import history_2_webp from '../../assets/history02.webp';

import history_3_png from '../../assets/history03.png';
import history_3_jpg from '../../assets/history03.jpg';
import history_3_webp from '../../assets/history03.webp';

const CoffeeHistory = () => {
  return ( 
    <div className="coffeehistory">
      <h1>커피의 역사</h1>
      <h2>커피의 발견</h2>
      <div className="history__inner">
        <picture>
          <source srcSet={history_1_webp} className='img1_3' />
          <source srcSet={history_1_jpg} className='img1_3' />
          <img src={history_1_png} alt="#" className='img1_3' />
        </picture>
        <p>
          오랜 옛날 &#40;6~7세기경으로 추정&#41; 아프리카의 에디오피아&#40;Ethiopia&#41; 양치기 소년 칼디&#40;Kaldi&#41;가 살았는데, 어느날 칼디는 자기가 기르고 있는 염소들이 흥분하여 이리저리 뛰어다니더니 그날밤 잠을 자지 못하는 것을 발견했다.<br/> 
          염소들이 갑작스레 흥분하는 모습을 본 칼디는 그 뒤로 염소들이 주변에 잇는 어떤 나무의 빨간 열매를 따 먹었을 때 이러한 현상이 일어난다는 것을 알게 되었다.<br/>
          그 열매를 먹어 본 칼디는 자신도 머리가 맑아지고 신기하게 기분이 상쾌해짐을 느낄 수 있었다.<br/>
          칼디는 이러한 사실을 가까운 이슬람 사원 승려에게 알렸고, 승려는 여러가지 실험을 거쳐 그 빨간열매가 기분이 좋아지고 잠을 좇는 효과가 있음을 알게 되었다.<br/> 
          그 뒤로 커피는 신비의 열매로 알려지면서 곧 여러사원으로 퍼져 나갔다.
        </p>
      </div>
      <h2>커피의 전파</h2>
      <div className="history__inner">
        <p>
          원산지 에티오피아에서는 농부들이 자생하는 커피열매를 끓여서 죽이나 약으로 먹기도 했으며, 9세기 무렵 아라비아반도로 전해져 처음 재배되었고 이집트·시리아·터키에 전해졌다.<br/> 
          이곳에서는 커피열매를 끓여 그 물을 마시거나 열매의 즙을 발효해서 카와라는 알코올 음료를 만들어 마셨다.<br/>
          기독교 문화권인 유럽에는 12세기 십자군전쟁 때 처음 들어왔으나 이교도의 음료라 하여 배척당했으나 밀무역으로 이탈리아에 들어온 뒤 교황으로부터 그리스도교의 음료로 공인받게 되어 일부 귀족들과 상인들을 중심으로 곧 유럽 전역으로 퍼져나갔다.<br/>
          15세기에 이르자 아랍인들은 그들의 커피를 독점하고 지키기 위해 싹이 터서 발아할 수 있는 종자의 반출을 막고, 열매를 끓이거나 볶아서 유럽행 배에 선적했다.<br/>
          외국인은 커피농장 방문이 금지되었으며, 호주머니에 몰래 원두나 묘목을 숨겨 달아나지 못하도록 감시당했다.<br/>
          그러나, 16세기 부터 인도에서 밀반출한 커피를 재배하기 시작했고, 1616년 마침내 네덜란드의 한 상인이 인도의 순례자로부터 원두를 입수해 유럽으로 밀반출하여 전파했다.<br/> 
          이후 70년동안 네덜란드는 식민지였던 인도네시아의 플랜테이션에서 커피를 재배하였고, 커피는 네덜란드의 가장 인기있는 음료가 되었다.<br/>
          그후 유럽의 제국주의 강대국들이 인도와 인도네시아 등의 아시아 지역을 식민지로 만들고 커피를 대량 재배하면서 전세계에 알려졌다.<br/>
          커피나무가 세계로 퍼져 나가면서 인도, 서인도제도, 중앙아메리카, 그리고 에티오피아의 바로 이웃나라인 케냐, 탄자니아 등에서도 광범위하게 재배되었다.<br/>
          커피가 점차 대중화되면서 유럽 곳곳에 커피하우스가 생기기 시작했다.<br/>
        </p>
        <picture>
          <source srcSet={history_2_webp} className="img1_2" />
          <source srcSet={history_2_jpg} className="img1_2" />
          <img src={history_2_png} alt="#" className="img1_2" />
        </picture>
      </div>
      <h2>우리나라 커피의 역사</h2>
      <div className="history__inner">
        <picture>
          <source srcSet={history_3_webp} className="img1_3" />
          <source srcSet={history_3_jpg} className="img1_3" />
          <img src={history_3_png} alt="#" className="img1_3" />
        </picture>
        <p>
          한국에서는 1895년 을미사변 당시 러시아 공사관에 피신해 있던 고종황제가 처음 커피를 마셨다고 전해진다.<br/>
          고종은 세자와 함께 약 1년간 러시아 공사관에 머물면서 커피를 마셨고, 궁중의 다례의식에까지 사용하도록 했을 만큼 커피를 좋아했다.<br/>
          덕수궁에 정관헌이라는, 사방이 트인 서양식 정자를 짓고 이곳에서 커피를 마시며 외국공사들과 연회를 갖기도 했다.<br/> 
          일반 민가에도 외국인 선교사, 상인들을 통해 커피가 파급되었고, 흔히 양탕국이라고 불렸다.<br/>
          독일인 손탁이 정동구락부라는 최초의 커피점에서 커피를 팔기시작했고 이후 1910년대부터 명동 충무로 종로 등지에 커피점들이 생겨나면서 소수의 사람들에게 알려졌다.<br/> 
          그 뒤 8.15해방과 6.25전쟁을 거치면서 미군부대에서 원두커피와 1회용 인스턴트 커피들이 대량 공급되어 대중들이 즐기는 기호음료가 되었고 1970년 우리나라 최초로 인스턴트 커피를 생산하게 되었다.<br/>
        </p>
      </div>
      <div className="inner__link">
        <h5>추가적인 정보</h5>
        <a href="https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC%EC%9D%98_%EC%97%AD%EC%82%AC">위키피디아 - 커피의 역사</a>
        <a href="http://www.seehint.com/word.asp?no=11018">최낙언의 자료보관소 - 커피의 기원</a>
        <a href="https://www.dongsuh.co.kr/2017/03_mediaCenter/06_coffeeClass_step1_view3.asp">동서식품 - 커피의 역사</a>
        <a href="https://www.wbckorea.com/%EC%BB%A4%ED%94%BC%EC%9D%98-%EC%97%AD%EC%82%AC/">월드베스트커피 - 커피의 역사</a>
      </div>
    </div>
  );
}

export default CoffeeHistory;