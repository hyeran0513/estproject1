export const updateHeaderLogo = () => {
  const header = document.querySelector(".header");
  const headerLogoLink = document.querySelector(".header__logo");
  const headerLogoImg = document.querySelector(".header__logo-img");

  if (headerLogoLink && headerLogoImg) {
    const theme = document.documentElement.getAttribute("data-theme");

    console.log(theme + "???????");
    const path = window.location.pathname;
    const baseUrl = window.baseUrl;

    const getLogoSrc = () => {
      const isDarkTheme = theme === "dark";
      const isLightTheme = theme === "light";
      const isHomePage = path === "/" || path === "/index.html";

      console.log(isHomePage);
      console.log(header.classList.contains("--active"));

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

    headerLogoImg.src = getLogoSrc(true);
    headerLogoLink.href = baseUrl;
  }
};
