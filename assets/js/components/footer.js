import { updateFooterLogo } from "../../../assets/js/modules/footer-logo.js";

// 푸터 초기화
const initializeFooter = () => {
  updateFooterLogo();
};

export const loadFooter = () => {
  const url =
    window.location.hostname === "hyeran0513.github.io"
      ? "/estproject1/components/footer.html"
      : "/components/footer.html";

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;

      // 푸터 초기화
      initializeFooter();
    })
    .catch((error) => console.error("푸터 fetch 오류:", error));
};
