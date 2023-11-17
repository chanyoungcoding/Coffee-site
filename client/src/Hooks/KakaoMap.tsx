/* eslint-disable */ 
import { ChangeEvent, useEffect, useState } from "react";
import coffeIcon from '../assets/coffeeicon.png';
import { useApiKakaoMapInfo } from "../services/api";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const [coffeeName, setCoffeeName] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const kakaoMapInfoDB = 'http://localhost:4000/api/kakaoMapInfo';
  const { data } = useApiKakaoMapInfo(kakaoMapInfoDB);

  const positions = data?.map(item => ({
    content: item.storeName,
    latlng: new window.kakao.maps.LatLng(item.latitude, item.longitude)
  })) || [];  

  useEffect(() => {
    //카카오 맵의 스타트 지점
    const container = document.getElementById('map');
    const options = { 
      center: new window.kakao.maps.LatLng(37.570373784923696, 126.97684577053963), 
      level: 3 
    };
    // 카카오 맵 만들기
    const map = new window.kakao.maps.Map(container, options);

    // 카카오 맵 마커 이미지 설정
    const imageSrc = coffeIcon;
    const imageSize = new window.kakao.maps.Size(64, 69);
    const imageOption = { offset: new window.kakao.maps.Point(27, 69) };

    // 검색 매점 이름의 좌표 찾기
    const findLatLngByFirstLetter = (positions:any, coffeeName:string) => {
      for (let i = 0; i < positions.length; i++) {
        const content = positions[i].content;
        
        if (Array.from(coffeeName).some(char => content.startsWith(char))) {
          return positions[i].latlng;
        }
      }
      return null;
    };

    const resultLatLng = findLatLngByFirstLetter(positions, coffeeName);

    // 만약 검색 매점 좌표가 있다면 해당 좌표로 스타트 지점 설정
    if(resultLatLng) {
      map.setCenter(resultLatLng)
    }

    // 마커 이미지 만들기
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    
    // 반복해서 마커 여러개 생성
    for (let i = 0; i < positions.length; i++) {
      if (positions[i]?.content && positions[i].content.includes(coffeeName)) {
        const marker = new window.kakao.maps.Marker({ 
          position: positions[i].latlng,
          image: markerImage
        });

        marker.setMap(map);

        const content = '<div class="kakaomapcontainer">' +
                          '<a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
                            `<span class="title">${positions[i].content}</span>` +
                          '</a>' +
                        '</div>';

        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: positions[i].latlng,
          content: content,
          xAnchor: .4,
          yAnchor: 0
        });

        const makeMouseOverListener = () => {
          return function() {
            customOverlay.setMap(map);
          }
        }

        const makeOutListener = () => {
          return function() {
            customOverlay.setMap(null);
          }
        }

        const makeClickListener = () => {
          return function() {
            window.open('https://map.kakao.com/link/map/11394059', '_blank');
          }
        }
        
        window.kakao.maps.event.addListener(marker, 'mouseover', makeMouseOverListener());
        window.kakao.maps.event.addListener(marker, 'mouseout', makeOutListener());
        window.kakao.maps.event.addListener(marker, 'click', makeClickListener());
      }
    }
  }, [coffeeName, positions, data]);

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleClickChange = () => {
    setCoffeeName(filterValue)
    setFilterValue('');
  }

  return (
    <div>
      <p>Filter by name:</p>
      <input type="text" value={filterValue} onChange={handleInputChange} />
      <button onClick={handleClickChange}>검색하기</button>
      <div id="map" style={{ width: '1300px', height: '1000px' }}></div>
    </div>
  )
}

export default KakaoMap;
