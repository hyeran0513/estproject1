export const loadFooter = () => {
  const url =
    window.location.hostname === "hyeran0513.github.io"
      ? "/estproject1/components/footer.html"
      : "/components/footer.html";

  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("푸터 fetch 오류:", error));
};
