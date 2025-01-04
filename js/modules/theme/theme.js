export const handleTheme = () => {
  const toggleButton = document.getElementById("btn-theme-toggle");
  const headerLogo = document.getElementById("headerLogo");
  const footerLogo = document.getElementById("footerLogo");

  // 테마 설정 함수
  const setTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // 로고 및 버튼 아이콘 변경
    toggleButton.innerHTML = `<i class='bx bx-${isDark ? "sun" : "moon"}'></i>`;
    const logoPath = `./images/icon/common/icon_logo_${
      isDark ? "white" : "black"
    }.svg`;

    if (headerLogo) {
      headerLogo.src = logoPath;
    }

    if (footerLogo) {
      footerLogo.src = logoPath;
    }
  };

  // 버튼 클릭 이벤트 리스너
  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });

  // 초기 테마 설정
  setTheme(localStorage.getItem("theme") || "light");
};