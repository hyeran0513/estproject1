import { observeElements } from "../modules/utils/observe-utils.js";
import { initializeSlideBanner } from "../modules/swiper/swiper.js";
import { handleMap } from "../modules/map/map-handler.js";
import { sliderPortfolio } from "../modules/portfolio/slide-portfolio.js";
import { zoomPortfolio } from "../modules/portfolio/zoom-portfolio.js";

window.onload = () => {
  const elementsToObserve = [
    ".company__info", // 회사 소개
    ".company__thumbnail",
    ".company__card-item",
    ".influence__description", //영향
    ".interview__card-item", // 인터뷰
    ".member__card-item", // 작업자 소개
  ];

  elementsToObserve.forEach((selector) => observeElements(selector));

  /* 지도 */
  handleMap();
};

document.addEventListener("DOMContentLoaded", () => {
  /* 슬라이드 배너 초기화 */
  initializeSlideBanner();

  const slider = sliderPortfolio();
  slider.addEventListeners();

  // 확대형 포트폴리오
  zoomPortfolio();
});