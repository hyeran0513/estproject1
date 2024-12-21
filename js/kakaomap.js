document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("map");
  const options = {
    center: new kakao.maps.LatLng(37.5665, 126.978), // 초기값: 서울 중심
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);

  // 주소-좌표 변환 객체 생성
  const geocoder = new kakao.maps.services.Geocoder();

  // 입력된 주소
  const address = "서울시 서초구 반포대로3 이스트빌딩(우)06711";

  // 주소로 좌표를 검색
  geocoder.addressSearch(address, (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      // 결과 좌표를 지도 중심으로 설정
      map.setCenter(coords);

      // 마커 생성
      const marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });

      // 길찾기 버튼
      const infoContent = `
        <a href="https://map.kakao.com/link/to/이스트빌딩,${result[0].y},${result[0].x}" target="_blank" class="link">
          <i class="fa-solid fa-map-location-dot"></i>길찾기
        </a>
      `;

      const findRouteBtn = document.querySelector(".btn-find-route");
      findRouteBtn.innerHTML = infoContent;
    } else {
      console.error("주소 검색에 실패했습니다:", status);
    }
  });
});
