export const zoomPortfolio = () => {
  // 모든 포트폴리오 컨텐츠 래퍼 수집
  const portfolioList = document.querySelectorAll(".portfolio__wrapper");

  portfolioList.forEach((item) => {
    item.addEventListener("click", () => {
      // 모든 요소에서 active 제거 후 클릭된 요소에 추가
      portfolioList.forEach(wrapper => wrapper.classList.toggle("--active", wrapper === item));
    });
  });
};