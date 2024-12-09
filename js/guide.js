document.addEventListener('DOMContentLoaded', () => {
  // basePath 처리
  const homeLink = document.getElementById('homeLink');
  const basePath = window.location.hostname === 'hyeran0513.github.io' ? '/estproject1' : '';
  homeLink.href = basePath + '/';
});