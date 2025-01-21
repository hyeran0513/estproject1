export const createCard = (data) => {
  const cardItem = document.createElement("div");
  cardItem.classList.add("news__list-item");
  const baseUrl = window.baseUrl;

  cardItem.innerHTML = `
    <div class="news__thumbnail">
    ${
      data.image
        ? `<img src="${baseUrl}assets/images/bg/${data.image}" alt="${data.title}" />`
        : `<div class="news__thumbnail-default">
             <i class="bx bxs-image"></i>
           </div>`
    }
    </div>
    <div class="news__info">
      <div class="news__info-title multi-ellipsis">${data.title}</div>
      <div class="news__info-content multi-ellipsis">${data.content}</div>
      <div class="news__info-date">${data.date}</div>
    </div>
  `;

  return cardItem;
};
