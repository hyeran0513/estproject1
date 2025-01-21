import { loadTemplate } from "/assets/js/utils/template-utils.js";
import { handleTheme } from "/assets/js/modules/theme.js";

export const loadFooter = () => {
  loadTemplate("/components/footer.html", "#footer").then(() => {
    // theme 핸들러
    handleTheme();
  });
};
