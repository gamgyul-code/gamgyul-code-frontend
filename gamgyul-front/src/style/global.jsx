import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
    * {
      padding: 0;
      text-decoration: none;
      margin: 0;
      

      /* 스크롤 안 보이게 하기 */
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      /* 기본 고정 폰트 지정 */
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;;
    }

    ul {
      list-style: none;
    }
    
    .layout {
      height: 100vh;
      max-width: ${theme.maxWidth};
      margin: 0 auto;
    }

    .FormLayout {
      padding: 0 20 58 20;
    }
`;
