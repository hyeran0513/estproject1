export const observeElements = (selector) => {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("--visible");
          observer.unobserve(entry.target); // 더 이상 관찰하지 않음
        }
      });
    },
    { threshold: 0.1 } // 요소가 10% 보일 때 애니메이션 시작
  );

  elements.forEach((element) => observer.observe(element));
};