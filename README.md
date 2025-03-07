# 이스트소프트 프론트엔드 부트캠프 3조 - 건축사무소 소개 홈페이지 구축

## 🌟 팀원

| 훈련생 | 역할 | 담당 업무                                                                                                                                                                                                                                                                                                                                                   |
| ------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 김혜란 | 팀장 | Git 관리자,<br/> 개발환경 기초 세팅 및 폴더 구조 정의,<br/> (헤더, 푸터, 사이드바, 로딩, 배너, 작업자 소개, 뉴스, 문의) 영역 담당,<br/> 코드 리뷰 및 코딩 컨벤션 작성,<br/> 다크모드 및 라이트모드 기능 구현,<br/> 시연 영상 제작,<br/> 결과 보고서 작성,<br/> 회의록 작성, <br/> 피드백 반영: 모든 페이지 SCSS로 변경, JS 모듈화, 레이아웃 Fetch로 구현 등 |
| 박세진 | 팀원 | (슬라이드형 포트폴리오, 확대형 포트폴리오, 비전) 영역 담당,<br/>결과 보고서 차별성 조사 및 자체 평가 의견 작성                                                                                                                                                                                                                                              |
| 최승이 | 팀원 | (회사 소개, 직원 소개) 영역 담당,<br/>결과 보고서 차별성 조사 및 자체 평가 의견 작성                                                                                                                                                                                                                                                                        |
| 형주희 | 팀원 | (인터뷰, 공지사항) 영역 담당,<br/>결과 보고서 차별성 조사 및 자체 평가 의견 작성                                                                                                                                                                                                                                                                            |

<br/>

## 피드백 - 김혜란

- [x] **DOM 렌더링 시 시각적 처리**

  - 렌더링 전에 `opacity: 0` 처리 후, DOM이 완전히 렌더링되면 `opacity: 1`로 전환

- [x] **다크모드 작업 방식 JavaScript로 처리하지 말고 light-dark 함수 사용하기**

  - [YouTube 링크](https://www.youtube.com/watch?v=IhrfGroePPk&t=21s)에서 방법 참고

- [x] **스크립트 모듈화**

  - JavaScript 파일을 `type="module"`로 모듈화

- [x] **Header와 Footer 공통 컴포넌트 처리**

  - `fetch` 를 사용하여 Header와 Footer를 공통 컴포넌트로 관리

- [x] **a11y-hidden h2 태그 처리**

  - 숨겨진 접근성 텍스트는 h2 태그로 구현

- [x] **기존 CSS 작업을 SCSS로 변환**
  - sass --watch assets/scss:assets/css

<br/><br/>

## 📒 프로젝트 개요

이번 프로젝트는 건축사무소 웹사이트를 리디자인하고 새롭게 개발하는 작업이었습니다. 기존 디자인을 기반으로 하되, 사용자가 더 편리하게 탐색할 수 있도록 몇 가지 인터랙티브 기능과 반응형 디자인을 추가했고, 디자인에는 없던 문의하기, 작업자 소개, 뉴스 섹션 같은 새로운 기능도 더했습니다. 웹사이트를 통해 건축사무소의 비전, 포트폴리오, 팀 소개 등의 정보를 직관적이고 매력적으로 전달하는 것을 목표로 했습니다.
<br/><br/><br/>

## 🕹️ 주요 기능 설명

1. 로딩 화면 <br/>
   페이지 로딩 시 로딩바를 통해 사용자에게 콘텐츠가 준비되는 과정을 시각적으로 보여줍니다. 이를 통해 페이지 로딩 대기 시간이 지루하지 않게 느껴지도록 했습니다.

2. 이미지 슬라이드 <br/>
   이미지 슬라이드는 Swiper.js를 사용해 만들었습니다. 사용자가 슬라이드를 일시정지하거나 재생, 이전/다음 버튼을 눌러 직접 제어할 수 있습니다.

3. 회사 소개 <br/>
   회사를 소개하는 섹션은 인터랙티브한 효과를 강조했습니다. 사용자가 특정 요소에 호버하면 색상이 조금씩 바뀌거나 텍스트 밑줄이 생기고, 이미지는 확대되는 효과를 볼 수 있습니다. 이런 효과들이 사용자의 관심을 끌고, 건축사무소의 브랜드 이미지를 잘 전달할 수 있게 돕습니다.

4. 회사 비전 <br/>
   비전 섹션에서는 이미지에 호버 시 확대 효과를 주어, 회사의 핵심 가치와 비전을 더 잘 느낄 수 있도록 했습니다.

5. 포트폴리오 <br/>
   포트폴리오는 두 가지 형식으로 제공됩니다. 첫 번째는 슬라이드 형식으로 프로젝트를 볼 수 있고, 두 번째는 특정 프로젝트를 클릭하면 그 프로젝트만 확대되어 상세히 볼 수 있는 방식입니다.

6. 직원 소개 <br/>
   직원 소개 섹션에서는 주요 인력과 팀원들을 강조했습니다.

7. 인터뷰 <br/>
   건축사무소의 이야기를 담은 인터뷰 섹션있니다. 인터뷰 사진에 확대 효과를 추가하여, 방문자들이 쉽게 건축사무소의 철학과 비전을 이해할 수 있도록 했습니다.

8. 뉴스 <br/>
   뉴스 섹션에서는 회사의 최신 소식과 활동을 소개합니다. 사용자는 이 섹션을 통해 건축사무소의 동향과 성과를 확인할 수 있습니다.

9. 작업자 소개 <br/>
   프로젝트 작업자들의 역할과 기여도를 한눈에 볼 수 있는 섹션입니다.
   이 서비스 요소는 프로젝트의 투명성과 신뢰도를 보여줍니다.

10. 공지사항 <br/>
    공지사항은 파트너 관련과 직원 관련으로 나뉘어져 있어서 필요한 정보를 빠르게 찾을 수 있습니다.

11. 문의하기 <br/>
    문의하기 섹션에서는 카카오맵을 활용해 건축사무소의 위치를 안내하고, 길찾기 기능을 제공해 방문자가 쉽게 사무소를 찾을 수 있도록 도와줍니다.

12. 네비게이션 <br/>
    헤더 메뉴를 통해 사용자는 사이트 내에서 쉽게 원하는 섹션으로 이동할 수 있습니다. 모바일 버전에서는 햄버거 메뉴를 통해 사이드바로 메뉴를 열고, 탐색할 수 있도록 했습니다.

13. 다크모드 <br/>
    웹사이트는 다크모드를 지원해 눈의 피로를 줄여줍니다. 또한, 사용자가 다크모드를 설정하면 그 설정을 localStorage에 저장하여 다음 방문 시에도 동일한 모드로 웹사이트를 이용할 수 있습니다.

14. 반응형 디자인 <br/>
    모바일 기기에서도 반응형 디자인을 적용하여, 웹사이트가 화면 크기에 맞게 자동으로 조정됩니다.
    <br/>

## 깃허브 url 주소

https://hyeran0513.github.io/estproject1/
<br/>

## 📱 QR코드

![image](https://github.com/user-attachments/assets/afdae05f-f527-4886-a55c-539ce4d9ed4b)
<br/>

## 🎬 시연 영상

https://www.youtube.com/watch?v=WVf0szhZ7wc
<br/><br/><br/>

## 📁 폴더 구조

```
📦estproject1
 📦assets
 ┣ 📂images
 ┃ ┣ 📂bg
 ┃ ┗ 📂icon
 ┣ 📂js
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜footer.js
 ┃ ┃ ┣ 📜header.js
 ┃ ┃ ┗ 📜sidebar.js
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📜coworker.js
 ┃ ┃ ┣ 📜interview.js
 ┃ ┃ ┣ 📜member.js
 ┃ ┃ ┣ 📜news.js
 ┃ ┃ ┗ 📜portfolio.js
 ┃ ┣ 📂modules
 ┃ ┃ ┣ 📜component-card.js
 ┃ ┃ ┣ 📜coworker-card.js
 ┃ ┃ ┣ 📜footer-logo.js
 ┃ ┃ ┣ 📜header-logo.js
 ┃ ┃ ┣ 📜map-handler.js
 ┃ ┃ ┣ 📜map.js
 ┃ ┃ ┣ 📜member-card.js
 ┃ ┃ ┣ 📜news-card.js
 ┃ ┃ ┣ 📜scroll-event.js
 ┃ ┃ ┣ 📜slide-portfolio.js
 ┃ ┃ ┣ 📜swiper.js
 ┃ ┃ ┣ 📜tab.js
 ┃ ┃ ┣ 📜theme.js
 ┃ ┃ ┗ 📜zoom-portfolio.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜about.js
 ┃ ┃ ┣ 📜coworker.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜interview.js
 ┃ ┃ ┣ 📜main.js
 ┃ ┃ ┣ 📜news.js
 ┃ ┃ ┣ 📜notice.js
 ┃ ┃ ┗ 📜portfolio.js
 ┃ ┗ 📂utils
 ┃ ┃ ┣ 📜observe-utils.js
 ┃ ┃ ┣ 📜page-utils.js
 ┃ ┃ ┣ 📜template-utils.js
 ┃ ┃ ┗ 📜url-utils.js
 ┗ 📂scss
 ┃ ┣ 📂base
 ┃ ┃ ┣ 📜common.scss
 ┃ ┃ ┣ 📜layout.scss
 ┃ ┃ ┣ 📜reset.scss
 ┃ ┃ ┗ 📜variables.scss
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜card.scss
 ┃ ┃ ┗ 📜slide-portfolio.scss
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📜about.scss
 ┃ ┃ ┣ 📜coworker.scss
 ┃ ┃ ┣ 📜index.scss
 ┃ ┃ ┣ 📜interview.scss
 ┃ ┃ ┣ 📜main.scss
 ┃ ┃ ┣ 📜news.scss
 ┃ ┃ ┣ 📜notice.scss
 ┃ ┃ ┗ 📜portfolio.scss
 📦components
 ┣ 📜footer.html
 ┣ 📜header.html
 ┗ 📜sidebar.html
 ┣ 📜about.html
 ┣ 📜coworker.html
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜interview.html
 ┣ 📜news.html
 ┣ 📜notice.html
 ┣ 📜portfolio.html
 ┣ 📜README.md
 ┗ 📜robots.txt
```
