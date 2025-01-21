import { initializeWeb } from "./main.js";
import { cardData } from "../../../assets/js/data/interview.js";
import { createCard } from "../../../assets/js/modules/component-card.js";

document.addEventListener("DOMContentLoaded", () => {
  // 웹 초기화 설정
  initializeWeb();

  const cardContainer = document.getElementById("card-container");

  cardData.map((data) => {
    const cardItem = createCard(data);
    cardContainer.appendChild(cardItem);
  });
});
