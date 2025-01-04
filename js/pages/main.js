import { initializePage } from "../modules/utils/page-utils.js";
import { setBaseUrl } from "../modules/utils/url-utils.js";
import { handleScrollEvent } from "../modules/scroll/scroll-event.js";
import { loadHeader } from "../components/header.js";
import { loadSidebar } from "../components/sidebar.js";
import { loadFooter } from "../components/footer.js";

const loading = initializePage();

document.addEventListener("DOMContentLoaded", () => {
  // 레이아웃
  loadHeader();
  loadSidebar();
  loadFooter();

  // baseurl 처리
  setBaseUrl();

  // 스크롤 이벤트를 감지하여 헤더 배경색 변경
  handleScrollEvent();

  // DOM이 렌더링된 후에 요소 보이도록
  document.body.classList.replace("hidden", "visible");
  loading.classList.add("hidden");
});