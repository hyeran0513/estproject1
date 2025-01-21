import {
  initializeMap,
  searchAddress,
  createMarker,
  createFindRouteButton,
} from "./map.js";

export const handleMap = () => {
  const map = initializeMap("map");

  // 주소-좌표 변환 객체 생성
  const geocoder = new kakao.maps.services.Geocoder();

  // 입력된 주소
  const address = "서울시 서초구 반포대로3 이스트빌딩(우)06711";

  // 주소로 좌표를 검색
  searchAddress(address, geocoder, (coords, result) => {
    // 지도 중심 설정
    map.setCenter(coords);

    // 마커 생성
    createMarker(map, coords);

    // 길찾기 버튼 생성
    createFindRouteButton("이스트빌딩", coords);
  });
};