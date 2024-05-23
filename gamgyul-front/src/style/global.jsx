import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
    * {
        padding: 0;
        text-decoration: none;
        margin: 0;

        /* 기본 고정 폰트 지정 */
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;;
    }

    .layout {
      height: 100vh;
      max-width: 393px;
      margin-left: auto;
      margin-right: auto;
      background-color: #9c2626;
    }

    .FormLayout {
      padding: 0 20 58 20;
    }
`;
