import { styled } from "styled-components";
import { theme } from "../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";

const NaverBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <BtnJoinGoogle src={`/images/Login/naverLogo.svg`} />
      네이버 계정 로그인
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 335px;
  height: 48px;
  border-radius: 10px;
  background-color: #00c300;
  border: none;
  outline: none;
  padding: 9px 0 9px 20px;
  ${applyFontStyles(theme.font.body2)}
  color: ${theme.color.white};
  margin-bottom: 8px;
`;

const BtnJoinGoogle = styled.img`
  margin-right: 65px;
`;

export default NaverBtn;
