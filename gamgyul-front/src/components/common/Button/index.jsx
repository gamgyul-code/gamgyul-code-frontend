import styled from "styled-components";
import { theme } from "../../../style/theme";

const Button = ({ type, size, onClick, children, color, className, disabled, ...props }) => {
  return (
    <StyledButton type={type} size={size} onClick={onClick} color={color} className={className} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100%;
  height: ${({ type }) => (type === "small" ? "40px" : "64px")};
  border-radius: 10px;
  border: 0;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) => (disabled ? theme.color.grayscale_BF : theme.color.primary)};
  color: ${theme.color.white};
  font-size: ${theme.fontSize.body1};
`;
export default Button;
