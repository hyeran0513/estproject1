const baseHref = window.location.hostname === "127.0.0.1" ? "/" : "/estproject1/";

const headerTemplate = `
  <div class="header__inner">
    <a href="${baseHref}" class="header__logo">
      <img
        src="./images/icon/common/icon_logo_white.svg"
        alt="로고"
        class="header__logo--white"
        loading="lazy"
        width="100"
        height="34"
      />
      <img
        src="./images/icon/common/icon_logo_black.svg"
        alt="로고"
        class="header__logo--black"
        loading="lazy"
        width="100"
        height="34"
      />
    </a>
  
    <div class="a11y-hidden">메뉴</div>
  
    <nav class="gnb" aria-label="주 메뉴">
      <ul class="gnb__list">
        <li class="gnb__list-item">
          <a
            href="./about.html"
            class="gnb__list-link"
            title="회사소개 페이지로 이동"
            >회사소개</a
          >
        </li>

        <li class="gnb__list-item">
          <a
            href="./portfolio.html"
            class="gnb__list-link"
            title="포트폴리오 페이지로 이동"
            >포트폴리오</a
          >
        </li>

         <li class="gnb__list-item">
          <a
            href="./coworker.html"
            class="gnb__list-link"
            title="직원소개 페이지로 이동"
            >직원소개</a
          >
        </li>

        <li class="gnb__list-item">
          <a
            href="./interview.html"
            class="gnb__list-link"
            title="인터뷰 페이지로 이동"
            >인터뷰</a
          >
        </li>

                <li class="gnb__list-item">
          <a
            href="./news.html"
            class="gnb__list-link"
            title="뉴스 페이지로 이동"
            >뉴스</a
          >
        </li>
  
        <li class="gnb__list-item">
          <a
            href="./notice.html"
            class="gnb__list-link"
            title="공지사항 페이지로 이동"
            >공지사항</a
          >
        </li>
      </ul>
    </nav>
  
    <div class="btn-wrap">
      <button
        type="button"
        id="btn-theme-toggle"
        aria-label="테마 변경"
        title="테마 변경"
      >
        <i class="bx bx-moon"></i>
      </button>
  
      <button
        type="button"
        class="btn-hamburger"
        aria-label="메뉴 열기"
        title="햄버거 버튼"
      >
        <i class="bx bx-menu"></i>
      </button>
    </div>
  </div>
`;

const sidebarTemplate = `
  <div class="sidebar__inner">
    <div class="sidebar__head">
      <button type="button" title="메뉴 닫기" class="btn-close">
        <i class="bx bx-x"></i>
      </button>
    </div>
  
    <nav class="sidebar__menu">
      <ul class="menu__list">
        <li class="menu__list-item">
          <a
            href="./about.html"
            class="menu__list-link"
            title="회사소개 페이지로 이동"
            >회사소개</a
          >
        </li>

        <li class="menu__list-item">
          <a
            href="./portfolio.html"
            class="menu__list-link"
            title="포트폴리오 페이지로 이동"
            >포트폴리오</a
          >
        </li>

         <li class="menu__list-item">
          <a
            href="./coworker.html"
            class="menu__list-link"
            title="직원소개 페이지로 이동"
            >직원소개</a
          >
        </li>

        <li class="menu__list-item">
          <a
            href="./interview.html"
            class="menu__list-link"
            title="인터뷰 페이지로 이동"
            >인터뷰</a
          >
        </li>

                <li class="menu__list-item">
          <a
            href="./news.html"
            class="menu__list-link"
            title="뉴스 페이지로 이동"
            >뉴스</a
          >
        </li>
  
        <li class="menu__list-item">
          <a
            href="./notice.html"
            class="menu__list-link"
            title="공지사항 페이지로 이동"
            >공지사항</a
          >
        </li>
      </ul>
    </nav>
  </div>
`;

const footerTemplate = `
  <div class="footer__inner">
    <div class="footer__logo">
      <img
        src="./images/icon/common/icon_logo_white.svg"
        alt="로고"
        class="footer__logo--white"
        loading="lazy"
      />
      <img
        src="./images/icon/common/icon_logo_black.svg"
        alt="로고"
        class="footer__logo--black"
        loading="lazy"
      />
    </div>
  
    <!-- 푸터 메뉴 -->
    <div class="footer__menu">
      <div class="footer__menu-item">
        <p class="footer__menu-title">소셜</p>
        <ul class="footer__list" role="list">
          <li class="footer__list-item">
            <a href="" class="footer__list-link" aria-label="인스타그램 링크"
              >인스타그램</a
            >
          </li>
          <li class="footer__list-item">
            <a href="" class="footer__list-link" aria-label="비핸스 링크"
              >비핸스</a
            >
          </li>
          <li class="footer__list-item">
            <a href="" class="footer__list-link" aria-label="링크드인 링크"
              >링크드인</a
            >
          </li>
        </ul>
      </div>
  
      <div class="footer__menu-item">
        <p class="footer__menu-title">정보</p>
        <ul class="footer__list" role="list">
          <li class="footer__list-item">
            <a href="" class="footer__list-link" aria-label="문의하기"
              >문의하기</a
            >
          </li>
          <li class="footer__list-item">
            <a href="" class="footer__list-link" aria-label="이용 약관"
              >이용 약관</a
            >
          </li>
          <li class="footer__list-item">
            <a href="" class="footer__list-link" aria-label="스튜디오"
              >스튜디오</a
            >
          </li>
        </ul>
      </div>
  
      <div class="footer__menu-item">
        <p class="footer__menu-title">연락처</p>
        <ul class="footer__list" role="list">
          <li class="footer__list-item">
            <a
              href="https://www.google.com/maps/search/서울특별시 서초구 반포대로3 이스트빌딩"
              class="footer__list-link"
              aria-label="주소: 서울특별시 서초구 반포대로3 이스트빌딩"
              >서울특별시 서초구 반포대로3 이스트빌딩(우)06711</a
            >
          </li>
          <li class="footer__list-item">
            <a
              href="tel:025834620"
              class="footer__list-link"
              aria-label="전화 걸기: 02-583-4620"
              >02-583-4620</a
            >
          </li>
          <li class="footer__list-item">
            <a
              href="mailto:estsoft@example.com"
              class="footer__list-link"
              aria-label="이메일 보내기: estsoft@example.com"
              >estsoft@example.com</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  <!-- 서브 푸터 -->
  <div class="subfooter">
    <div class="subfooter__inner">
      ⓒ 2024 ESTSOFT Bootcamp 3조. All rights reserved.
    </div>
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#header").innerHTML = headerTemplate;

  // 현재 페이지의 파일명 추출
  const currentPage = window.location.pathname.split("/").pop();

  const menuLinks = document.querySelectorAll(".gnb__list-link");

  // 각 링크를 순회하며 활성화 상태 설정
  menuLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").replace("./", "");

    if (currentPage === linkPage) {
      link.classList.add("--active");
    }
  });

  document.querySelector("#sidebar").innerHTML = sidebarTemplate;
  document.querySelector("#footer").innerHTML = footerTemplate;
});
