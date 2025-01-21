import { initializeWeb } from "./main.js";
import { cardData } from "../../../assets/js/data/news.js";
import { createCard } from "../../../assets/js/modules/news-card.js";

document.addEventListener("DOMContentLoaded", () => {
  // 웹 초기화 설정
  initializeWeb();

  const cardContainer = document.querySelector(".news__list");

  cardData.map((data) => {
    const cardItem = createCard(data);
    cardContainer.appendChild(cardItem);
  });
});
