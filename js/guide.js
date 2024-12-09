document.addEventListener("DOMContentLoaded", () => {
  // basePath 처리
  const homeLink = document.getElementById("homeLink");
  const basePath =
    window.location.hostname === "hyeran0513.github.io" ? "/estproject1" : "";
  homeLink.href = basePath + "/";

  // 메뉴 항목과 섹션을 선택
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll("section");

  // IntersectionObserver 설정
  const observerOptions = {
    root: null, // 뷰포트에서 관찰
    rootMargin: "0px", // 뷰포트와의 여백 없음
    threshold: 0.5, // 섹션이 50% 이상 보이면 트리거
  };

  // IntersectionObserver 콜백 함수
  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const menuItem = document.querySelector(
        `.menu-item a[href="#${id}"]`
      ).parentElement;

      if (entry.isIntersecting) {
        menuItem.classList.add("is-active");
      } else {
        menuItem.classList.remove("is-active");
      }
    });
  };

  // IntersectionObserver 인스턴스 생성
  const observer = new IntersectionObserver(
    intersectionCallback,
    observerOptions
  );

  // 모든 섹션을 관찰
  sections.forEach((section) => observer.observe(section));

  // 메뉴 항목 클릭 시 해당 섹션으로 스크롤하고 'is-active' 클래스 추가
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();

      menuItems.forEach((item) => item.classList.remove("is-active"));
      menuItem.classList.add("is-active");

      // 해당 섹션으로 스크롤
      const targetSection = document.querySelector(
        menuItem.querySelector("a").getAttribute("href")
      );
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});