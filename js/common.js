document.addEventListener("DOMContentLoaded", () => {
  // baseurl 처리
  setBaseUrl();

  // 스크롤 이벤트를 감지하여 헤더 배경색 변경
  handleScrollEvent();

  // theme 핸들러
  handleTheme();

  // 사이드바 핸들러
  handleSidebar();
});

// baseurl 처리
const setBaseUrl = () => {
  if (window.location.hostname === "hyeran0513.github.io") {
    const base = document.createElement("base");
    base.href = "/estproject1/";
    document.head.appendChild(base);
  }
};

// 스크롤 이벤트를 감지하여 헤더 배경색 변경
const handleScrollEvent = () => {
  const header = document.querySelector("#header");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 340) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
};

// theme 핸들러
const handleTheme = () => {
  const toggleButton = document.getElementById("btn-theme-toggle");

  // 현재 theme 상태 확인 및 설정
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // 버튼 텍스트 변경
    if (theme === "dark") {
      toggleButton.innerHTML = `<i class='bx bx-sun'></i>`;
    } else {
      toggleButton.innerHTML = `<i class='bx bx-moon'></i>`;
    }
  };

  // 버튼 클릭 이벤트 리스너
  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    currentTheme === "dark" ? setTheme("light") : setTheme("dark");
  });

  // 초기 설정: 로컬 스토리지 확인
  const savedTheme = localStorage.getItem("theme") || "light";

  setTheme(savedTheme);
};

// 사이드바 핸들러
const handleSidebar = () => {
  const sidebar = document.querySelector("#sidebar");
  const closeBtn = document.querySelector(".btn-close");
  const openBtn = document.querySelector(".btn-hamburger");
  const menuLinks = document.querySelectorAll(".menu__list-link");

  const toggleSidebar = (isOpen) => {
    sidebar.classList.toggle("sidebar--open", isOpen);
  };

  openBtn.addEventListener("click", () => toggleSidebar(true));

  closeBtn.addEventListener("click", () => toggleSidebar(false));

  menuLinks.forEach((link) =>
    link.addEventListener("click", () => toggleSidebar(false))
  );
};