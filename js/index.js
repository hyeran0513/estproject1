document.addEventListener('DOMContentLoaded', () => {
	// baseurl 처리
	if (window.location.hostname === 'hyeran0513.github.io') {
		var base = document.createElement('base');
		base.href = '/estproject1/';
		document.head.appendChild(base);
	}

	// header.html 불러오기
	fetch('components/common/header.html')
		.then((response) => response.text())
		.then((data) => (document.getElementById('header').innerHTML = data));

	// footer.html 불러오기
	fetch('components/common/footer.html')
		.then((response) => response.text())
		.then((data) => (document.getElementById('footer').innerHTML = data));

	// banner.html 불러오기
	fetch('components/common/banner.html')
		.then((response) => response.text())
		.then((data) => (document.getElementById('banner').innerHTML = data));

	// about.html 불러오기
	fetch('components/about.html')
		.then((response) => response.text())
		.then((data) => (document.getElementById('about').innerHTML = data));

	// hrkim.html 불러오기
	fetch('components/hrkim.html')
		.then((response) => response.text())
		.then((data) => (document.getElementById('hrkim').innerHTML = data));

	// jhhyung.html 불러오기
	fetch('components/jhhyung.html')
		.then((response) => response.text())
		.then((data) => (document.getElementById('jhhyung').innerHTML = data));

	// slchoi.html 불러오기
	fetch('components/slchoi.html')
		.then((response) => response.text())
		.then((data) => (document.getElementById('slchoi').innerHTML = data));
});
