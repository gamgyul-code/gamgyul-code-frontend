import styled from "styled-components";
import { useState, useCallback } from "react";
import ArrowUp from "../../../assets/DropDown/arrow_down.svg";
import ArrowDown from "../../../assets/DropDown/arrow_up.svg";
import { theme } from "../../../style/theme";
import { applyFontStyles } from "../../../utils/fontStyles";

const DropDown = ({ title, children, number, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <StyledDropDown>
      <Header onClick={toggleOpen}>
        <NumberCircle>{number}</NumberCircle>
        <Title>{title}</Title>
        <Arrow src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
      </Header>
      {isOpen && <Content>{children}</Content>}
    </StyledDropDown>
  );
};

const StyledDropDown = styled.div`
  border: 2px solid ${theme.color.grayscale_BF};
  border-radius: 10px;
  margin: 0 0 20px 0;
`;

const Header = styled.h2`
  ${applyFontStyles(theme.font.body1)}
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 16px;
  margin: 0;
`;

const NumberCircle = styled.div`
  ${applyFontStyles(theme.font.body2)}
  width: 24px;
  height: 24px;
  background-color: #00a653;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Title = styled.span`
  flex-grow: 1;
`;

const Arrow = styled.img`
  width: 24px;
  height: 24px;
`;

const Content = styled.div`
  padding: 10px;
  color: #737373;
`;

export default DropDown;
