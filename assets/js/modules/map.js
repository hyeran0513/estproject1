// 지도 초기화
export const initializeMap = (
  containerId,
  lat = 37.5665,
  lng = 126.978,
  level = 3
) => {
  const container = document.getElementById(containerId);
  const options = {
    center: new kakao.maps.LatLng(lat, lng), // 초기값: 서울 중심
    level: level,
  };

  return new kakao.maps.Map(container, options);
};

// 주소로 좌표 검색
export const searchAddress = (address, geocoder, callback) => {
  geocoder.addressSearch(address, (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      callback(coords, result);
    } else {
      console.error("주소 검색에 실패했습니다:", status);
    }
  });
};

// 마커 생성
export const createMarker = (map, coords) => {
  return new kakao.maps.Marker({
    map: map,
    position: coords,
  });
};

// 길찾기 버튼 생성
export const createFindRouteButton = (address, coords) => {
  const infoContent = `
    <a href="https://map.kakao.com/link/to/${address},${coords.getLat()},${coords.getLng()}" target="_blank" class="link">
      <i class="fa-solid fa-map-location-dot"></i>길찾기
    </a>
  `;

  const findRouteBtn = document.querySelector(".btn-find-route");
  findRouteBtn.innerHTML = infoContent;
};