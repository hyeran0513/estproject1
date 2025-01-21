export const createCard = (data) => {
  const cardItem = document.createElement("div");
  cardItem.classList.add("card__item");

  cardItem.innerHTML = `
    <div class="card__item-thumbnail">
      <img src="${data.image}" alt="${data.title}" />
    </div>
    <div class="card__item-info">
      <div class="card__item-title multi-ellipsis">${data.title}</div>
      <div class="card__item-date">
        <span class="card__item-label">${data.type}</span>
        <span class="card__item-separator">|</span>
        <span class="card__item-text" aria-label="${data.date}">
          ${data.date}
        </span>
      </div>
    </div>
  `;

  return cardItem;
};