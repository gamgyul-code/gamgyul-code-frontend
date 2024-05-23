import styled from "styled-components";
import { theme } from "../../../style/theme";

const Button = ({ type, size, onClick, children, color, className, ...props }) => {
  return (
    <StyledButton type={type} size={size} onClick={onClick} color={color} className={className}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 353px;
  height: 64px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  background-color: ${theme.color.primary};
  color: ${theme.color.white};
  font-size: ${theme.fontSize.body1};
`;
export default Button;
