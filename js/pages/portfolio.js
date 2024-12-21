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

document.addEventListener("DOMContentLoaded", () => {
  // 포트폴리오 기능 처리
  handleSlidePortfolio();
});