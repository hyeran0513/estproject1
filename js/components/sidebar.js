import { loadTemplate } from "../modules/utils/template-utils.js"

export const loadSidebar = () => {
  loadTemplate("../../templates/sidebar.html", "#sidebar");
};
