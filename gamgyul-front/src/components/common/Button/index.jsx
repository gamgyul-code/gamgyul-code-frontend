import styled from "styled-components";
import { theme } from "../../../style/theme";
import { applyFontStyles } from "../../../utils/fontStyles";

const Button = ({ type, size, onClick, children, color, className, disabled, isShadow, ...props }) => {
  return (
    <StyledButton
      type={type}
      size={size}
      onClick={onClick}
      color={color}
      className={className}
      disabled={disabled}
      isShadow={isShadow}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${applyFontStyles(theme.font.body2)}
  width: 100%;
  height: ${({ type }) => (type === "small" ? "42px" : "55px")};
  border-radius: ${({ type }) => (type === "small" ? "10px" : "20px")};
  border: 0;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled, color }) =>
    disabled ? theme.color.gray2 : color === "gray" ? theme.color.white : theme.color.primary};
  color: ${({ color }) => (color === "gray" ? theme.color.gray2 : theme.color.white)};
  box-shadow: ${({ isShadow }) => (isShadow ? "0px 2px 2px 0px #00000033" : "none")};
`;
export default Button;
