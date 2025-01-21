export const initializePage = () => {
  // body에 'hidden' 클래스 추가
  document.body.classList.add("hidden");

  // 로딩바 요소 가져오기
  const loading = document.getElementById("loading");

  return loading;
};