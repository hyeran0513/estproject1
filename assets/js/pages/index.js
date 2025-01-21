import { initializeWeb } from "./main.js";
import { observeElements } from "/assets/js/utils/observe-utils.js";
import { initializeSlideBanner } from "/assets/js/modules/swiper.js";
import { handleMap } from "/assets/js/modules/map-handler.js";
import { sliderPortfolio } from "/assets/js/modules/slide-portfolio.js";
import { zoomPortfolio } from "/assets/js/modules/zoom-portfolio.js";
import { cardData } from "/assets/js/data/member.js";
import { createCard } from "/assets/js/modules/member-card.js";

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
  // 웹 초기화 설정
  initializeWeb();

  /* 슬라이드 배너 초기화 */
  initializeSlideBanner();

  // 확대형 포트폴리오
  zoomPortfolio();

  // 작업자 소개
  const cardContainer = document.querySelector(".member__card");

  cardData.map((data) => {
    const cardItem = createCard(data);
    cardContainer.appendChild(cardItem);
  });

  // 슬라이드형 포트폴리오
  const slider = sliderPortfolio();
  slider.init();
  slider.addEventListeners();
});
