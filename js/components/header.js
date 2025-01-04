import { loadTemplate } from "../modules/utils/template-utils.js"
import { handleTheme } from "../modules/theme/theme.js";

export const loadHeader = () => {
  loadTemplate("../../templates/header.html", "#header").then(() => {
    const currentPage = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll(".gnb__list-link");

    menuLinks.forEach((link) => {
      const linkPage = link.getAttribute("href").replace("./", "");

      if (currentPage === linkPage) {
        link.classList.add("--active");
      }
    });

    // theme 핸들러
    handleTheme();
  });
};
