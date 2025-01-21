import { updateHeaderLogo } from "../../../assets/js/modules/header-logo.js";

export const handleScrollEvent = () => {
  const header = document.querySelector("#header");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 340) {
      header.classList.add("--active");
    } else {
      header.classList.remove("--active");
    }

    updateHeaderLogo();
  });
};
