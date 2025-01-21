export const loadSidebar = () => {
  const url =
    window.location.hostname === "hyeran0513.github.io"
      ? "/estproject1/components/sidebar.html"
      : "/components/sidebar.html";

  // 메뉴 항목 배열
  const menuItems = [
    { title: "회사소개", link: "./about.html" },
    { title: "포트폴리오", link: "./portfolio.html" },
    { title: "직원소개", link: "./coworker.html" },
    { title: "인터뷰", link: "./interview.html" },
    { title: "뉴스", link: "./news.html" },
    { title: "공지사항", link: "./notice.html" },
  ];

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar").innerHTML = data;

      // 메뉴 항목을 동적으로 생성하여 메뉴 리스트에 추가
      const menuList = document.querySelector(".menu__list");
      menuList.innerHTML = menuItems
        .map(
          (item) => `
            <li class="menu__list-item">
              <a href="${item.link}" class="menu__list-link" title="${item.title} 페이지로 이동">
                ${item.title}
              </a>
            </li>`
        )
        .join("");

      // 햄버거 버튼 로직
      const hamburgerButton = document.querySelector(".btn-hamburger");
      const sidebar = document.querySelector(".sidebar");
      const closeButton = document.querySelector(".btn-close");

      // 햄버거 버튼 클릭 시 사이드바 열기
      hamburgerButton.addEventListener("click", () => {
        sidebar.style.display = "flex";
        sidebar.classList.add("sidebar--open");
      });

      // 닫기 버튼 클릭 시 사이드바 닫기
      closeButton.addEventListener("click", () => {
        sidebar.classList.remove("sidebar--open");
        sidebar.style.display = "none";
      });
    })
    .catch((error) => console.error("사이드바 fetch 오류:", error));
};
