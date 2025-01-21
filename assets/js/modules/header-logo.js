export const updateHeaderLogo = () => {
  const header = document.querySelector(".header");
  const headerLogoLink = document.querySelector(".header__logo");
  const headerLogoImg = document.querySelector(".header__logo-img");

  if (headerLogoLink && headerLogoImg) {
    const theme = document.documentElement.getAttribute("data-theme");
    const path = window.location.pathname;
    const baseUrl = window.baseUrl.endsWith("/")
      ? window.baseUrl
      : `${window.baseUrl}/`;

    // 경로 끝의 슬래시 제거
    const normalizePath = (url) => url.replace(/\/+$/, "");
    const isHomePage =
      normalizePath(path) === normalizePath(baseUrl) ||
      path === `${baseUrl}index.html`;

    console.log("Theme:", theme);
    console.log("Path:", path);
    console.log("Base URL:", baseUrl);
    console.log("Is Home Page:", isHomePage);

    const getLogoSrc = () => {
      const isDarkTheme = theme === "dark";
      const isLightTheme = theme === "light";

      if (isDarkTheme) {
        return `${baseUrl}assets/images/icon/common/icon_logo_white.svg`;
      }

      if (isHomePage && header.classList.contains("--active")) {
        return `${baseUrl}assets/images/icon/common/icon_logo_black.svg`;
      }

      if (isLightTheme && !isHomePage) {
        return `${baseUrl}assets/images/icon/common/icon_logo_black.svg`;
      }

      return `${baseUrl}assets/images/icon/common/icon_logo_white.svg`;
    };

    headerLogoImg.src = getLogoSrc();
    headerLogoLink.href = baseUrl;
  }
};
