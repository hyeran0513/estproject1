import { initializePage } from "/assets/js/utils/page-utils.js";
import { setBaseUrl } from "/assets/js/utils/url-utils.js";
import { handleScrollEvent } from "/assets/js/modules/scroll-event.js";
import { loadHeader } from "/assets/js/components/header.js";
import { loadSidebar } from "/assets/js/components/sidebar.js";
import { loadFooter } from "/assets/js/components/footer.js";

const loading = initializePage();

export const initializeWeb = () => {
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
};
