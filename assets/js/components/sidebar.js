import { loadTemplate } from "/assets/js/utils/template-utils.js";

export const loadSidebar = () => {
  loadTemplate("/components/sidebar.html", "#sidebar");
};
