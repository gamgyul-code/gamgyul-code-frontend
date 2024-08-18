import styled from "styled-components";
import { theme } from "../../../style/theme";
import { applyFontStyles } from "../../../utils/fontStyles";

export const TabButton = styled.button`
  ${({ fontSize }) => applyFontStyles(fontSize)}
  background-color: inherit;
  width: ${({ btnCnt }) => (btnCnt ? `${100 / btnCnt}%` : "auto")};
  height: 48px;
  border: none;
  border-bottom: 3px solid ${({ isActive }) => (isActive ? theme.color.primary : theme.color.gray3)};
  color: ${({ isActive }) => !isActive && theme.color.gray2};
`;
