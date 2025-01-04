import { sliderPortfolio } from "../modules/portfolio/slide-portfolio.js";
import { cardData } from "../data/portfolio/portfolio-card.js";
import { createCard } from "../modules/card/component-card.js";

document.addEventListener('DOMContentLoaded', () => {
  /* 슬라이드형 포트폴리오 */
  const slider = sliderPortfolio();
  slider.addEventListeners();

  /* 카드형 포트폴리오 */
  const cardContainer = document.getElementById('card-container');

  cardData.map(data => {
    const cardItem = createCard(data);
    cardContainer.appendChild(cardItem);
  });
});