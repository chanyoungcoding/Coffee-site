/* eslint-disable */ 
import { useEffect } from "react";
import coffeIcon from '../assets/coffeeicon.png';

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = { 
      center: new window.kakao.maps.LatLng(37.570373784923696, 126.97684577053963), 
      level: 3 
    };
  
    const map = new window.kakao.maps.Map(container, options);

    const imageSrc = coffeIcon;
    const imageSize = new window.kakao.maps.Size(64, 69);
    const imageOption = { offset: new window.kakao.maps.Point(27, 69) };

    const positions = [
      {
        content: '스타벅스', 
        latlng: new window.kakao.maps.LatLng(37.57043727089248, 126.97907571276365)
      },
      {
        content: '<div id="infowindow">투썸</div>', 
        latlng: new window.kakao.maps.LatLng(37.5698246140704, 126.97918907926261)
      },
      {
        content: '<div>메가커피</div>', 
        latlng: new window.kakao.maps.LatLng(37.57206798691837, 126.97859982283231)
      }
    ];

    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    
    for (let i = 0; i < positions.length; i++) {
      const marker = new window.kakao.maps.Marker({ 
        position: positions[i].latlng,
        image: markerImage
      });

      marker.setMap(map);

      const content = '<div class="customoverlay">' +
                        '<a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
                          `<span class="title">${positions[i].content}</span>` +
                        '</a>' +
                      '</div>';

    const customOverlay = new window.kakao.maps.CustomOverlay({
      position: positions[i].latlng,
      content: content,
      xAnchor: .5,
      yAnchor: 5
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

  },[]);

  return (
    <div>
      <p>hello</p>
      <div id="map" style={{width:'1000px', height: '1000px'}}></div>
    </div>
  )
}

export default KakaoMap;