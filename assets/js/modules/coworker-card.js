export const createCard = (data) => {
  const cardItem = document.createElement("div");
  cardItem.classList.add("coworker__card-item");

  if (data.type === "description") {
    cardItem.innerHTML = `
      <div class="coworker__card-description has-bg">
        ${data.text}
      </div>
    `;
    cardItem.classList.add("description");
  } else if (data.type === "image") {
    cardItem.innerHTML = `
    <div class="coworker__card-thumbnail">
      <img src="${data.image}" alt="${data.coworkerName}" />
    </div>
     `;
  } else {
    cardItem.innerHTML = `
      <div class="coworker__card-info">
        <div class="coworker__card-name">${data.coworkerName}</div>
        <div class="coworker__card-position">${data.position}</div>
        <div class="coworker__card-sns">
          ${data.sns
            .map(
              (sns) =>
                `<a href="${sns.link}" class="${sns.icon}" aria-label="${
                  data.coworkerName
                }의 ${sns.icon.split(" ")[1]}"></a>`
            )
            .join("")}
        </div>
      </div>
    `;
  }

  return cardItem;
};
