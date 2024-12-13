document.addEventListener("DOMContentLoaded", () => {
  // baseurl 처리
  setBaseUrl();

  // 스크롤 이벤트를 감지하여 헤더 배경색 변경
  handleScrollEvent();

  // swiper 객체 초기화
  const swiper = initializeSwiper();

  // 슬라이드 변경 이벤트 핸들러 추가
  handleSlideChange(swiper);

  // 재생/일시정지 버튼 이벤트 핸들러
  handlePlayPauseButton(swiper);

  // 카드 애니메이션 관찰
  observeCards();
});

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
    if (window.scrollY >= 500) {
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
      clickable: true,
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
      disableOnInteraction: false,
    },
  });
};

// 슬라이드 변경 이벤트 핸들러 추가
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

// 카드 애니메이션 관찰
const observeCards = () => {
  const cards = document.querySelectorAll(".card__item");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // 요소가 보이면 더 이상 관찰하지 않음
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => observer.observe(card)); // 각 카드 요소를 관찰
};

const portfolioNextBtn = document.querySelector('.portfolio__img__next');

portfolioNextBtn.addEventListener( 'click' , function(event){
  let portfolio_image = document.querySelector('.portfolio__image__modify');
  portfolio_image.style.flexBasis = "0";
})


const portfolioPrevBtn = document.querySelector('.portfolio__img__prev');

portfolioPrevBtn.addEventListener( 'click' , function(event){
  let portfolio_image = document.querySelector('.portfolio__image__modify');
  portfolio_image.style.flexBasis = "107.2313rem";
})