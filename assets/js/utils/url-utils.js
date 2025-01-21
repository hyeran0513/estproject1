export const setBaseUrl = () => {
  const base = document.createElement("base");

  if (window.location.hostname === "hyeran0513.github.io") {
    base.href = "/estproject1/";
  } else {
    base.href = "/";
  }

  document.head.prepend(base);
};