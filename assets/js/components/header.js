import { handleTheme } from "/assets/js/modules/theme.js";

// 메뉴 데이터 정의
const menuItems = [
  { href: "./about.html", title: "회사소개 페이지로 이동", text: "회사소개" },
  {
    href: "./portfolio.html",
    title: "포트폴리오 페이지로 이동",
    text: "포트폴리오",
  },
  {
    href: "./coworker.html",
    title: "직원소개 페이지로 이동",
    text: "직원소개",
  },
  { href: "./interview.html", title: "인터뷰 페이지로 이동", text: "인터뷰" },
  { href: "./news.html", title: "뉴스 페이지로 이동", text: "뉴스" },
  { href: "./notice.html", title: "공지사항 페이지로 이동", text: "공지사항" },
];

// 메뉴 항목을 동적으로 생성
const createMenuItem = ({ href, title, text }) => {
  const listItem = document.createElement("li");
  listItem.className = "gnb__list-item";

  const link = document.createElement("a");
  link.href = href;
  link.title = title;
  link.className = "gnb__list-link";
  link.textContent = text;

  listItem.appendChild(link);
  return listItem;
};

// 메뉴 항목들을 동적으로 추가
const renderMenuItems = (menuList) => {
  menuItems.forEach((menuItem) => {
    const menuItemElement = createMenuItem(menuItem);
    menuList.appendChild(menuItemElement);
  });
};

// 현재 페이지와 일치하는 메뉴 링크에 --active 클래스를 추가
const highlightActiveMenuLink = () => {
  const currentPage = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll(".gnb__list-link");

  menuLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (currentPage === linkPage) {
      link.classList.add("--active");
    }

    link.addEventListener("click", () => {
      if (currentPage === linkPage) {
        link.classList.add("--active");
      }
    });
  });
};

// 로고 및 메뉴 초기화
const initializeHeader = () => {
  const logoLink = document.querySelector(".header__logo");
  const logoImg = document.querySelector(".header__logo-img");

  const theme = document.documentElement.getAttribute("data-theme");

  // 테마에 따라 로고 변경
  const updateLogo = () => {
    if (theme === "dark") {
      logoImg.src = `${window.baseUrl}assets/images/icon/common/icon_logo_white.svg`;
    } else if (theme === "light") {
      logoImg.src = `${window.baseUrl}assets/images/icon/common/icon_logo_black.svg`;
    }
  };

  // 로고 업데이트 함수 호출
  updateLogo();

  // 테마 변경 시 로고 변경
  const themeRadios = document.querySelectorAll('input[name="color-scheme"]');
  themeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      const selectedTheme = document.querySelector(
        'input[name="color-scheme"]:checked'
      ).value;
      document.documentElement.setAttribute("data-theme", selectedTheme);
      updateLogo();
    });
  });

  logoLink.href = `${window.baseUrl}`;

  const menuList = document.querySelector(".gnb__list");
  renderMenuItems(menuList);
  highlightActiveMenuLink();
};

// 헤더를 로드하는 함수
export const loadHeader = () => {
  console.log("loadHeader called");
  const url =
    window.location.hostname === "hyeran0513.github.io"
      ? "/estproject1/components/header.html"
      : "/components/header.html";

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // 테마
      handleTheme();

      // 헤더 설정
      initializeHeader();
    })
    .catch((error) => console.error("헤더 fetch 오류:", error));
};
