import styled from "styled-components";
import { theme } from "../../style/theme";

/** home Layout (기본 크기) */
export const HomeLayout = styled.div`
  padding: 0 0 100px 0;
  height: calc(100vh - 100px);
  width: 100%;
  background-color: ${theme.color.background};
  overflow-y: auto;
`;

/** Container (양쪽 padding 20px부분) */
export const Container = styled.div`
  padding: 0 20px;
`;
