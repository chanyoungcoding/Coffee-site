import health01_png from '../../assets/health01.png';
import health01_jpg from '../../assets/health01.jpg';
import health01_webp from '../../assets/health01.webp';

import health02_png from '../../assets/health02.png';
import health02_jpg from '../../assets/health02.jpg';
import health02_webp from '../../assets/health02.webp';

const CoffeeHealth = () => {
  return ( 
    <div className="coffeehealth">
      <h1>커피와 건강</h1>
      <h2>커피가 미치는 좋은 영향</h2>
      <div className="health__inner">
        <picture>
          <source srcSet={health01_webp} className='img1_1'/>
          <source srcSet={health01_jpg} className='img1_1'/>
          <img src={health01_png} alt="#" className='img1_1'/>
        </picture>
        <div className="inner__introduce">
          <h3>각종 암예방 효과</h3>
          <p>
            커피를 매일 3잔 이상 마시는 습관이 있는 사람은 마시지 않는 사람보다 위암에 걸릴 위험률이 절반 정도 밖에 안 되는 것으로 밝혀졌다.<br/>
            또한 직장암, 간암, 피부암등에도 예방 및 억제 효과가 있는 것으로 알려졌다.<br/>
            이는 커피에 포함되어 있는 항산화물질이 암세포 발생을 억제하는것으로 분석됐다.
          </p>
          <h3>다이어트 효과</h3>
          <p>
            카페인은 신체의 에너지 소비량을 약10%올린다.<br/>
            즉 같은것을 먹어도 카페인을 섭취한 사람 쪽이 칼로리 소비가 1할 높게 되어 비만을 방지한다.<br/> 
            카페인은 글리코겐보다 먼저 피하지방을 에너지로 변환하는 작용을 한다.<br/> 
            따라서 다이어트에 관심있는 여성들은 설탕과 크림을 넣지 않은 블랙커피를 마시는 것이 좋다.
          </p>
          <h3>우울증 예방 효과</h3>
          <p>
            미국 보건당국에 의하면 커피의 카페인은 세로토닌, 도파민, 아드레날린과 같은 신경 전달 물질의 분비량을 높임으로서 우울증 예방에 도움을 주며,<br/>
            하버드 보건대학 연구팀에서는 하루에 2-4잔 정도의 커피를 마신 사람들의 자살 위험률도 무려 50%나 떨어진다고 한다.
          </p>
        </div>
        <picture>
          <source srcSet={health01_webp} className='img1_3' />
          <source srcSet={health01_jpg} className='img1_3' />
          <img src={health01_png} alt="#" className='img1_3' />
        </picture>
      </div>
      <div className="health__inner">
        <picture>
          <source srcSet={health02_webp} className='img_2' />
          <source srcSet={health02_jpg} className='img_2' />
          <img src={health02_png} alt="#" className='img_2' />
        </picture>
        <div className="inner_introduce">
          <h3>성인병 예방 및 항산화 효과</h3>
          <p>
            커피에는 항산화 작용을 하는 폴리페놀 성분이 다량 함유되어 있어 당뇨, 치매, 암, 심장질환, 지방간의 예방 및 치료에 좋다.<br/>
            커피의 폴리페놀 함유량은 홍차의 9배, 포도주의 3배가 함유되어 있다.
          </p>
          <h3>계산력 향상 효과</h3>
          <p>
            카페인에 신경을 활성화하는 작용이 있기 때문에 머리를 맑게 해주고 일의 능률을 향상시켜주는 효과가 있어 계산력이 향상되는 것이다.<br/> 
            하루 120-200mg정도 섭취한 카페인은 대뇌피질 전반에 작용,사고력을 높이고 의식을 맑게 해 지적인 작업을 원활히 할 수 있도록 해준다.
          </p>
          <h3>숙취방지와 해소</h3>
          <p>
            술 마신 뒤에 알코올은 체내에서 분해되어 아세트알데히드라는 물질로 체내에 남아 있게 되는데 카페인은 간기능을 활발하게 해 아세트알데히드 분해를 빠르게 하고 신장의 움직임을 활발하게 하여 배설을 촉진시킨다.<br/> 
            따라서 술을 마신 후 한잔의 물과 커피를 마시면 큰 도움이 된다.
          </p>
          <h3>입냄새 제거</h3>
          <p>
            커피에 함유되어 있는 Furan류는 식사 후 입안의 음식냄새를 없애주는 작용을 한다.<br/> 
            특히 마늘, 파 등의 냄새 제거효과 가 뛰어나 우리에겐 식사 후 필수음료가 된 지 이미 오래다.<br/> 
            단, 한가지 알아들 것은 크림이나 우유를 타서 마시면 Furan류가 먼저 이쪽에 결합하므로 효과가 떨어진다.
          </p>
        </div>
      </div>
      <h2>커피 효능에 대한 기사</h2>
      <div className="health__inner">
        <div className="inner__introduce">
          <h3>한겨레 신문</h3>
          <span>"디카페인 커피 등 모든 커피, 대장암 예방 효과"</span>
          <p>
            커피가 대장암 예방에 적지 않은 효과가 있다는새로운 연구결과가 나왔다.<br/>
            미국 서던 캘리포니아 대학 종합암센터의 스티븐 그루버 박사는 카페인을 뺀 디카페인 커피, 인스턴트 커피 등 모든 종류의 커피가 대장암 예방에 상당히 도움이 된다는 연구결과를 발표했다고 메디컬 뉴스 투데이와 헬스데이 뉴스가 1일 보도했다.<br/>
            이스라엘 대장암분자역학조사에 참가한 대장암 환자 5천145명과 대장암이없는 4천97명을 대상으로 에스프레소, 인스턴트 커피, 디카페인 커피, 필터 커피 또는 다른 음료를 매일 얼마나 마시는지를 정밀조사, 대장암과의 연관성을 분석한 결과 이 같은 사실이 밝혀졌다고 그루버 박사는 말했다.<br/>
            커피를 하루 1~2잔 마시는 사람은 이보다 적게 마시는 사람에 비해 커피의 종류에 상관없이 대장암 발생률이 26% 낮았다. 커피를 하루 2.5잔 이상 마시는 사람은 대장암 위험이 최대 50%까지 감소하는 것으로 나타났다.<br/>
            이 결과는 대장암 가족력, 식습관, 운동, 흡연 등 대장암 위험요인들을 감안한 것이다.<br/> 
            이 분석결과에서 다소 놀라운 부분은 커피의 주성분인 카페인이 들어있지 않은 디카페인 커피도 효과가 마찬가지라는 사실이다.<br/> 
            그렇다면 커피에 들어있는 어떤 성분이 이러한 효과를 가져온 것일까.<br/>
            우선 커피에 들어있는 카페인과 폴리페놀은 모두 항산화 성분으로 대장암 세포의 성장을 억제할 수 있다.<br/> 
            이 밖에 커피를 볶는 과정에서 생성되는 멜라노이딘이라는 물질은 대장의 운동성을 촉진하고 커피에 들어있는 또 다른 성분인 디터펜은 DNA의 산화손상을 억제, 암 발생을 차단한다는 연구결과들이 있다고 그루버 박사는 지적했다.<br/> 
            다만 이러한 성분들은 커피 콩의 종류, 볶는 방식, 커피 내리는 방법에 따라 함량이 다를 수 있다고 이 논문의 제1저자인 스테파니 슈미트 박사는 밝혔다.<br/>
            이 연구결과에 대해 하버드 대학 의과대학 소화기내과 전문의 앤드루 찬 박사는커피가 대장암 위험을 감소시킨다는 증거가 점점 확실해지고 있다면서 그 성분이 무엇인지를 찾아낸다면 대장암 발병의 단서를 잡아낼 수 있을 것이라고 논평했다.<br/>
            <span>출처 : 한겨레신문 2016.04.02</span>
            <a href="http://www.hani.co.kr/arti/society/health/737959.html#csidx8104d36e4ba885a856b9d3065a7e6b1" className='article__a'>http://www.hani.co.kr/arti/society/health/737959.html#csidx8104d36e4ba885a856b9d3065a7e6b1</a>
          </p>
        </div>
      </div>
      <div className="health__inner">
        <div className="inner__introduce">
          <h3>SBS 뉴스</h3>
          <span>"하루 2잔 이상 커피, 파킨슨병 위험 40% 낮춘다"</span>
          <p>
            커피에 함유된 카페인이 기억력 증진, 뇌세포 파괴 방지 등에 효과가 있다는 연구결과가 잇따르고 있습니다.<br/>
            카페인이 각성 효과를 넘어서 기억력 증진 효과가 있으며 뇌세포 파괴도 막아준다는 연구 결과입니다.<br/>
            과학저널 '네이처 뉴로사이언스' 최근호에 실린 한 보고서는 커피 2잔에 함유된 것과 같은 분량인 200㎎의 카페인을 섭취하면 단기 기억을 장기 기억으로 변환시키는 능력을 강화해 준다고 밝혔습니다.<br/>
            하루 2잔 이상의 커피를 마시는 사람은 파킨슨병에 걸릴 위험이 40% 낮은 것으로 나타났습니다.<br/>
            2007년에 나온 보고서에 의하면 커피를 마시면 정신적으로 건강한 여성이 단어 선택 능력을 계속 유지하는데 도움을 주는 것으로 나타났습니다.<br/>
            장판천 미 보스턴의대 신경학과 교수는 "카페인이 인지 능력에 큰 효과가 있다"며 60개 이상 식물에서 발견되는 카페인은 인체에 흡수되면 신속히 뇌에 들어가 뇌의 브레이크 시스템 역할을 하는 아데노신의 활동을 차단함으로써 정신이 명료해지는 효과를 낸다고 말했습니다.<br/>
            또한 장판천 교수는 지난해 프레드홀름 교수와 공동으로 진행한 연구보고서에서 "최소 5건의 대규모 조사 결과 카페인을 더많이 섭취할수록 파킨슨병에 걸릴 위험이 낮았다"며 "생쥐를 대상으로 한 연구에서 규칙적인 카페인 섭취가 신경세포 손실을 막아주는 것으로 나타났다", "신경세포 보호를 위해 노인들에게 계속 커피를 마실 것을 권해야 한다"고 말했습니다.<br/>
            <span>출처 : SBS 뉴스 2014.03.17</span>
            <a href="http://news.sbs.co.kr/news/endPage.do?news_id=N1002297054&plink=COPYPASTE&cooper=SBSNEWSEND" className='article__a'>http://news.sbs.co.kr/news/endPage.do?news_id=N1002297054&plink=COPYPASTE&cooper=SBSNEWSEND</a>
          </p>
        </div>
      </div>
      <div className="health__inner">
        <div className="inner__introduce">
          <span>"커피, 간경화 사망위험 낮춘다"</span>
          <p>
            커피가 간경화에 의한 사망위험을 낮추는 효과가 있다는 연구결과가 나왔다.
            듀크-NUS 의학전문대학원의 코운파이 박사가 화교 6만3천275명인 45-74세가 참가한 싱가포르 화교 건강연구의 15년간 조사자료를 분석한 결과 이 같은 사실이 밝혀졌다고 사이언스 데일리가 보도했다.
            커피를 하루 2-3잔 이상 마시는 사람은 비바이러스성 간염에 의한 간경변으로 사망할 위험이 커피를 마시지 않는 사람에 비해 66% 낮은 것으로 나타났다고 코 박사는 밝혔다.
            <span>출처: SBS 뉴스</span>
            <a href="http://news.sbs.co.kr/news/endPage.do?news_id=N1002326911&plink=COPYPASTE&cooper=SBSNEWSEND" className='article__a'>http://news.sbs.co.kr/news/endPage.do?news_id=N1002326911&plink=COPYPASTE&cooper=SBSNEWSEND</a>
          </p>
        </div>
      </div>
      <div className="health__inner">
        <div className="inner__introduce">
          <h3>서울 신문</h3>
          <span>"커피가 간경화 위험을 낮춘다"는 연구결과가 나와 눈길을 끈다.</span>
          <p>
            커피를 하루에 2잔씩 꾸준히 마시면 간경화 위험을 줄일 수 있다는 연구결과가 나왔다.
            영국 사우샘프턴대학 연구팀은 커피소비와 간경변증과의 연관관계를 분석한 9건의 연구결과를 메타분석해 발표한 내용에 따르면 커피는 간경화에 도움을 준다고 밝혔다.
            총 43만 2000 여명의 참가자를 대상으로 분석한 결과, 하루 2잔의 커피를 마시면 간경화 위험이 56% 줄어들었고 이에 따라 사망위험도 55% 낮아졌다. 
            뿐만 아니라 알코올성 간경화 위험도 최대 62% 감소시켰다.
            연구팀은 "하루 2잔의 커피가 간경화 위험을 거의 반으로 줄인다는 사실을 알아냈다"며 "커피의 효과는 간경화를 막기 위해 사용되는 각종 약과 비교해도 손색이 없다"고 밝혔다.
            이어 연구팀은 "커피에는 카페인 외에도 생리활성물질 화학물이 많이 함유돼 있다"며 "이번 연구는 커피가 간경변 예방효과가 있음을 보여주는 확실한 결과"라고 전했다.
            <span>서울신문 2016-02-03</span>
            <a href="http://en.seoul.co.kr/news/newsView.php?id=20160203500337#csidx859278e84c462c3815cb604aeb8bbd4" className='article__a'>http://en.seoul.co.kr/news/newsView.php?id=20160203500337#csidx859278e84c462c3815cb604aeb8bbd4</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoffeeHealth;