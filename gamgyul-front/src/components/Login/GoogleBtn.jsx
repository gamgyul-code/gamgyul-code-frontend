import { styled } from "styled-components";
import { theme } from "../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";

const GoogleBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <BtnJoinGoogle src={`/images/Login/googleLogo.svg`} />
      구글 계정 로그인
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 335px;
  height: 48px;
  border-radius: 10px;
  background-color: #f2f4f6;
  border: none;
  outline: none;
  padding: 9px 0 9px 20px;
  ${applyFontStyles(theme.font.body2)}
  margin-bottom: 8px;
`;

const BtnJoinGoogle = styled.img`
  margin-right: 65px;
`;

export default GoogleBtn;
