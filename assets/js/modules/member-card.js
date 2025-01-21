export const createCard = (data) => {
  const cardItem = document.createElement("div");
  cardItem.classList.add("member__card-item");
  const baseUrl = window.baseUrl;

  cardItem.innerHTML = `
    <div class="member__card-profile">
      <img src="${baseUrl}assets/images/bg/${data.image}" alt="" />
    </div>
    <div class="member__card-info">
      <div class="member__card-details">
        <span class="member__card-name">${data.koName}</span>
        <span class="member__card-separator">|</span>
        <span class="member__card-english-name">${data.egName}</span>
      </div>

      <div class="member__card-role">${data.role}</div>
    </div>
  `;

  return cardItem;
};
