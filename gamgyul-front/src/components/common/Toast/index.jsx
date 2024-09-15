import styled from "styled-components";
import { theme } from "../../../style/theme";
import { applyFontStyles } from "../../../utils/fontStyles";

const Toast = ({ children, ...props }) => {
  return (
    <ToastContainer>
      <ToastIcon src="/images/Complete/route-complete.svg" alt="" />
      <ToastMessage>{children}</ToastMessage>
    </ToastContainer>
  );
};

export default Toast;

const ToastContainer = styled.section`
  max-width: calc(${theme.maxWidth} - 40px);
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: ${theme.color.gray1};
  display: flex;
  align-items: center;

  position: fixed;
  bottom: 170px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  box-shadow: 0px 2px 2px 0px #00000033;
`;

const ToastIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;
const ToastMessage = styled.p`
  ${applyFontStyles(theme.font.body2)}
  color: ${theme.color.white};
  width: 100%;
  white-space: pre-line;
`;
