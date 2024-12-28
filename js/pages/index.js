// swiper 객체 초기화
const initializeSwiper = () => {
  return new Swiper(".swiper", {
    loop: true,
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction:false,
    },
  });
};

// 슬라이드 변경 이벤트 핸들러
const handleSlideChange = (swiper) => {
  swiper.on("slideChange", () => {
    const currentIndex = swiper.realIndex + 1;
    const totalSlides = swiper.slides.length;

    document.querySelector(
      ".swiper-fraction"
    ).textContent = `${currentIndex} / ${totalSlides}`;
  });
};

// 재생/일시정지 버튼 이벤트 핸들러
const handlePlayPauseButton = (swiper) => {
  const playPauseButton = document.querySelector(".btn-play-pause");
  playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';

  playPauseButton.addEventListener("click", () => {
    if (swiper.autoplay.running) {
      swiper.autoplay.stop();
      playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
      swiper.autoplay.start();
      playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
  });
};

// 요소 애니메이션 관찰
const observeElements = (selector) => {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("--visible");
          observer.unobserve(entry.target); // 더 이상 관찰하지 않음
        }
      });
    },
    { threshold: 0.1 } // 요소가 10% 보일 때 애니메이션 시작
  );

  elements.forEach((element) => observer.observe(element));
};

// 슬라이드형 포트폴리오
const handleSlidePortfolio = () => {
  const pictureWrap = document.querySelector(".portfolio__picture-container");
  const nextButton = document.querySelector(".portfolio__control-next");
  const prevButton = document.querySelector(".portfolio__control-prev");
  const pictures = document.querySelectorAll(".portfolio__picture");

  let currentIndex = 0;
  let slideWidth = 0;

  const calculateSlideWidth = () => {
    slideWidth = pictures[0].offsetWidth + parseInt(getComputedStyle(pictureWrap).gap);
  };

  const updateActiveClass = () => {
    pictures.forEach((picture, index) => {
      picture.classList.toggle("--active", index === currentIndex);
    });
  };

  const moveSlide = () => {
    pictureWrap.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateActiveClass();
  };

  nextButton.addEventListener("click", () => {
    if (currentIndex < pictures.length - 1) {
      currentIndex++;
      moveSlide();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      moveSlide();
    }
  });

  const init = () => {
    calculateSlideWidth();
    moveSlide();
  };

  window.addEventListener("resize", init);
  window.addEventListener("load", init);
};

// 로딩 애니메이션
const loading = () => {
  const loading = document.getElementById("loading");

  setTimeout(() => {
    loading.classList.add("hidden");
  }, 2000);
}

// 확대형 포트폴리오
const handleZoomPortfolio = () => {
  //모든 포트폴리오 컨텐츠 래퍼 수집
  const portfolioList = document.querySelectorAll(".portfolio__wrapper");

  portfolioList.forEach((item) => {
    item.addEventListener("click", () => {
      // 모든 요소에서 active 제거 후 클릭된 요소에 추가
      portfolioList.forEach(wrapper => wrapper.classList.toggle("--active", wrapper === item));
    });
  });
};

// 카카오맵 핸들러
const handleMap = () => {
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
}

document.addEventListener("DOMContentLoaded", () => {
  // swiper 객체 초기화 및 이벤트 핸들러 추가
  const swiper = initializeSwiper();
  handleSlideChange(swiper);
  handlePlayPauseButton(swiper);

  // 포트폴리오 기능 처리
  handleSlidePortfolio();
  handleZoomPortfolio();

  // 로딩 애니메이션
  loading();
});

window.onload = () => {
  // 카카오맵 핸들러
  handleMap();

  // 관찰 대상 요소들 한 번에 처리
  const elementsToObserve = [
    ".member__card-item",      // 직원 소개
    ".company__info",          // 회사 소개
    ".company__thumbnail",
    ".company__card-item",
    ".interview__card-item",    // 인터뷰
    ".influence__description"   // 영향
  ];
  elementsToObserve.forEach(selector => observeElements(selector));  
};