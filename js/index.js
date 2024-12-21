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
          entry.target.classList.add("visible");
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
      picture.classList.toggle("active", index === currentIndex);
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
      portfolioList.forEach(wrapper => wrapper.classList.toggle("active", wrapper === item));
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // swiper 객체 초기화 및 이벤트 핸들러 추가
  const swiper = initializeSwiper();
  handleSlideChange(swiper);
  handlePlayPauseButton(swiper);

  // 관찰 대상 요소들 한 번에 처리
  const elementsToObserve = [
    ".member__card-item",      // 직원 소개
    ".company__info",          // 회사 소개
    ".company__thumbnail",
    ".company__card-item",
    ".vision__text-box",       // 비전
    ".vision__image",
    ".interview__card-item"    // 인터뷰
  ];
  elementsToObserve.forEach(selector => observeElements(selector));

  // 포트폴리오 기능 처리
  handleSlidePortfolio();
  handleZoomPortfolio();

  // 로딩 애니메이션
  loading();
});