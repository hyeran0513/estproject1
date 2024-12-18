// baseurl 처리
const setBaseUrl = () => {
  if (window.location.hostname === "hyeran0513.github.io") {
    const base = document.createElement("base");
    base.href = "/estproject1/";
    document.head.appendChild(base);
  }
};

// 스크롤 이벤트를 감지하여 헤더 배경색 변경
const handleScrollEvent = () => {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 340) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
};

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
      disableOnInteraction: true,
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
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // 더 이상 관찰하지 않음
        }
      });
    },
    { threshold: 0.1 } // 요소가 10% 보일 때 애니메이션 시작
  );

  elements.forEach((element) => observer.observe(element));
};

// 지도 이벤트 핸들러
const handleMap = () => {
  // 지도 생성
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
  geocoder.addressSearch(address, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      // 결과 좌표를 지도 중심으로 설정
      map.setCenter(coords);

      // 마커 생성
      const marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });

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
};

// 포트폴리오 이미지 슬라이드
const handlePortfolio = () => {
  const pictureWrap = document.querySelector(".portfolio__picture-container");
  const nextButton = document.querySelector(".portfolio__control-next");
  const prevButton = document.querySelector(".portfolio__control-prev");
  const pictures = document.querySelectorAll(".portfolio__picture");

  let currentIndex = 0; // 현재 이미지의 인덱스 초기화
  let slideWidth = 0;

  // 이미지와 gap의 너비를 계산
  const calculateSlideWidth = () => {
    slideWidth =
      pictures[0].offsetWidth + parseInt(getComputedStyle(pictureWrap).gap);
  };

  // active 클래스를 관리
  const updateActiveClass = () => {
    pictures.forEach((picture, index) => {
      picture.classList.toggle("active", index === currentIndex);
    });
  };

  // 슬라이드 이동
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

  // 초기화 함수
  const init = () => {
    calculateSlideWidth();
    moveSlide();
  };

  // 화면 리사이즈 시 슬라이드 너비 재계산
  window.addEventListener("resize", () => {
    init();
  });

  // 페이지 로드 시 초기화
  init();
};

// 포트폴리오 리스트 요소 동작
const handlePortfoliolist = () => {
  //모든 포트폴리오 컨텐츠 래퍼 수집
  const portfolioList = document.querySelectorAll(".portfolio__wrapper");

  // 모든 래퍼 컨텐츠의 자식요소에 기능 할당.
  portfolioList.forEach((portfolioEle) => {
    portfolioEle.addEventListener("click", () => {
      removeWrapperActive(portfolioList);
      // 래퍼컨텐츠에 active클래스 추가
      portfolioEle.classList.add("active");
    });
  });

  const removeWrapperActive = (portfolioList) => {
    portfolioList.forEach((wrapper) => {
      // 래퍼컨텐츠에 active클래스 제거
      wrapper.classList.remove("active");
    });
  };
};

// theme 핸들러
const handleTheme = () => {
  const toggleButton = document.getElementById("btn-theme-toggle");

  // 현재 theme 상태 확인 및 설정
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // 버튼 텍스트 변경
    if (theme === "dark") {
      toggleButton.innerHTML = `<i class='bx bx-sun'></i>`;
    } else {
      toggleButton.innerHTML = `<i class='bx bx-moon'></i>`;
    }
  };

  // 버튼 클릭 이벤트 리스너
  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    currentTheme === "dark" ? setTheme("light") : setTheme("dark");
  });

  // 초기 설정: 로컬 스토리지 확인
  const savedTheme = localStorage.getItem("theme") || "light";

  setTheme(savedTheme);
};

// 사이드바 핸들러
const handleSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".btn-close");
  const openBtn = document.querySelector(".btn-hamburger");
  const menuLinks = document.querySelectorAll(".menu__list-link");

  if (!sidebar || !closeBtn || !openBtn || menuLinks.length === 0) {
    return;
  }

  const toggleSidebar = (isOpen) => {
    sidebar.classList.toggle("sidebar--open", isOpen);
  };

  openBtn.addEventListener("click", () => toggleSidebar(true));

  closeBtn.addEventListener("click", () => toggleSidebar(false));

  menuLinks.forEach((link) =>
    link.addEventListener("click", () => toggleSidebar(false))
  );
};

// 로딩 애니메이션
const loading = () => {
  const loading = document.getElementById("loading");

  setTimeout(() => {
    loading.classList.add("hidden");
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  // baseurl 처리
  setBaseUrl();

  // 로딩 애니메이션
  loading();

  // 스크롤 이벤트를 감지하여 헤더 배경색 변경
  handleScrollEvent();

  // swiper 객체 초기화
  const swiper = initializeSwiper();

  // 슬라이드 변경 이벤트 핸들러 추가
  handleSlideChange(swiper);

  // 재생/일시정지 버튼 이벤트 핸들러
  handlePlayPauseButton(swiper);

  // 직원 소개: 카드 아이템 관찰
  observeElements(".member__card-item");

  // 회사 소개: 텍스트 영역 관찰
  observeElements(".company__info");
  observeElements(".company__thumbnail");
  observeElements(".company__card-item");

  // 비전: 텍스트 영역 관찰
  observeElements(".vision__text-box");
  observeElements(".vision__image ");

  // 인터뷰: 인터뷰 카드 영역 관찰
  observeElements(".interview__card-item");

  // 포트폴리오 이미지 슬라이드
  handlePortfolio();

  // 포트폴리오 리스트 버튼
  handlePortfoliolist();

  // theme 핸들러
  handleTheme();

  // 사이드바 핸들러
  handleSidebar();

  // 지도 이벤트 핸들러
  handleMap();
});