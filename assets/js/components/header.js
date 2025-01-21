import { loadTemplate } from "/assets/js/utils/template-utils.js";
import { handleTheme } from "/assets/js/modules/theme.js";

export const loadHeader = () => {
  loadTemplate("/components/header.html", "#header").then(() => {
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
