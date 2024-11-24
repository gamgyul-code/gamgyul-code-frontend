import styled from "styled-components";
import { theme } from "../../../style/theme";
import { applyFontStyles } from "../../../utils/fontStyles";

export const BottomButton = styled.button`
  ${applyFontStyles(theme.font.body2)}
  width: ${theme.maxWidth};
  height: 83px;
  background-color: ${theme.color.primary};
  border: none;
  color: ${theme.color.white};
  padding-bottom: 20px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  cursor: pointer;
`;