export const loadTemplate = (url, selector) => {
  return fetch(url)
    .then((response) => response.text())
    .then((template) => {
      document.querySelector(selector).innerHTML = template;
    });
};