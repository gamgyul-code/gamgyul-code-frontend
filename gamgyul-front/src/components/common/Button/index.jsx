import styled from "styled-components";
import { theme } from "../../../style/theme";
import { applyFontStyles } from "../../../utils/fontStyles";

const Button = ({ type, size, onClick, children, color, className, disabled, isShadow, isIcon, ...props }) => {
  return (
    <StyledButton
      type={type}
      size={size}
      onClick={onClick}
      color={color}
      className={className}
      disabled={disabled}
      isShadow={isShadow}
      isIcon={isIcon}
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

  background-color: ${({ disabled, color }) => {
    if (color && color.includes("sub")) {
      return disabled ? theme.color.sub3 : theme.color[color];
    }
    if (color === "none") {
      return "inherit";
    }
    return disabled ? theme.color.gray2 : color === "gray" ? theme.color.gray4 : theme.color.primary;
  }};

  color: ${({ disabled, color }) => {
    if (color && color.includes("sub")) {
      return disabled ? theme.color.gray2 : theme.color.gray1;
    }
    if (color === "none") {
      return theme.color.primary;
    }
    return color === "gray" ? theme.color.gray2 : theme.color.white;
  }};
  box-shadow: ${({ isShadow }) => (isShadow ? "0px 2px 2px 0px #00000033" : "none")};
  ${({ isIcon, disabled }) =>
    isIcon &&
    `
    path {
      fill: ${disabled ? theme.color.gray2 : theme.color.gray1};
    }
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
export default Button;
