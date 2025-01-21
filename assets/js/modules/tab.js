export const tab = () => {
  document.querySelectorAll(".tab__button").forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      document
        .querySelectorAll(".tab__button")
        .forEach((btn) => btn.classList.remove("--active"));
      document
        .querySelectorAll(".notice__list")
        .forEach((panel) => panel.classList.remove("--active"));

      button.classList.add("--active");
      document.getElementById(targetTab).classList.add("--active");
    });
  });
};