import { initializeWeb } from "./main.js";
import { sliderPortfolio } from "/assets/js/modules/slide-portfolio.js";
import { cardData } from "/assets/js/data/portfolio.js";
import { createCard } from "/assets/js/modules/component-card.js";

window.onload = () => {
  /* 슬라이드형 포트폴리오 */
  const slider = sliderPortfolio();
  slider.addEventListeners();
};

document.addEventListener("DOMContentLoaded", () => {
  // 웹 초기화 설정
  initializeWeb();

  /* 카드형 포트폴리오 */
  const cardContainer = document.getElementById("card-container");

  cardData.map((data) => {
    const cardItem = createCard(data);
    cardContainer.appendChild(cardItem);
  });
});
