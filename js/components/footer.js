import { loadTemplate } from "../modules/utils/template-utils.js"
import { handleTheme } from "../modules/theme/theme.js";

export const loadFooter = () => {
  loadTemplate("../../templates/footer.html", "#footer").then(() => {
      // theme 핸들러
      handleTheme();
  })
};
