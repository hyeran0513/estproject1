import { initializeWeb } from "./main.js";
import { cardData } from "/assets/js/data/coworker.js";
import { createCard } from "/assets/js/modules/coworker-card.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeWeb();

  const cardContainer = document.querySelector(".coworker__card");

  cardData.forEach((data) => {
    const cardItem = createCard(data);
    cardContainer.appendChild(cardItem);
  });
});
