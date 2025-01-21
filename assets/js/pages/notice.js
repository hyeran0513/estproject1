import { initializeWeb } from "./main.js";
import { tab } from "/assets/js/modules/tab.js";

document.addEventListener("DOMContentLoaded", () => {
  // 웹 초기화 설정
  initializeWeb();

  // 탭
  tab();
});
