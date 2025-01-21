export const updateFooterLogo = () => {
  const footerLogoImg = document.querySelector(".footer__logo-img");
  const footerLogoLink = document.querySelector(".footer__logo");

  if (footerLogoImg && footerLogoLink) {
    const theme = document.documentElement.getAttribute("data-theme");
    const baseUrl = window.baseUrl;

    const getLogoSrc = () => {
      return theme === "dark"
        ? `${baseUrl}assets/images/icon/common/icon_logo_white.svg`
        : `${baseUrl}assets/images/icon/common/icon_logo_black.svg`;
    };

    footerLogoImg.src = getLogoSrc();
    footerLogoLink.href = baseUrl;
  }
};
