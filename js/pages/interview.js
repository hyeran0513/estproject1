import { cardData } from "../data/interview/interview-card.js";
import { createCard } from "../modules/card/component-card.js";

document.addEventListener('DOMContentLoaded', () => {
  /* 카드형 인터뷰 */
  const cardContainer = document.getElementById('card-container');

  cardData.map(data => {
    const cardItem = createCard(data);
    cardContainer.appendChild(cardItem);
  });
});