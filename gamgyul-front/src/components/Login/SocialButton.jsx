import styled from "styled-components";
import { theme } from "./../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";

const SocialButton = ({ category, onClick }) => {
  const CONTENTS = [
    {
      category: "Google",
      text: "구글 계정 로그인",
      icon: "/images/Login/googleLogo.svg",
    },
    {
      category: "Naver",
      text: "네이버 계정 로그인",
      icon: "/images/Login/naverLogo.svg",
    },
    {
      category: "Kakao",
      text: "카카오 계정 로그인",
      icon: "/images/Login/kakaoLogo.svg",
    },
  ];

  const content = CONTENTS.find((item) => item.category === category);

  return (
    <Button type="button" category={category} onClick={onClick}>
      <IconContainer category={category}>
        <img src={content.icon} alt={`${category} logo`} />
      </IconContainer>
      <BtnText>{content.text}</BtnText>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  margin-bottom: 8px;
  ${applyFontStyles(theme.font.body2)};
  width: calc(${theme.maxWidth} - 40px);

  padding: ${({ category }) => {
    switch (category) {
      case "Google":
        return "9px 115px 9px 20px";
      case "Naver":
        return "9px 108px 9px 20px";
      case "Kakao":
        return "9px 108px 9px 20px";
      default:
        return "9px 108px 9px 20px";
    }
  }};

  background-color: ${({ category }) => {
    switch (category) {
      case "Google":
        return "#f2f4f6";
      case "Naver":
        return "#00c300";
      case "Kakao":
        return "#ffe617";
      default:
        return "#000"; // 기본값
    }
  }};

  color: ${({ category }) => {
    switch (category) {
      case "Google":
        return theme.color.black;
      case "Naver":
        return theme.color.white;
      case "Kakao":
        return theme.color.black;
      default:
        return "#FFFFFF"; // 기본값
    }
  }};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* category에 따른 margin-right 설정 */
  margin-right: ${({ category }) => {
    switch (category) {
      case "Google":
        return "65px";
      case "Naver":
        return "58px";
      case "Kakao":
        return "58px";
      default:
        return "58px"; // 기본값
    }
  }};
`;

const BtnText = styled.p`
  flex-grow: 1;
  text-align: center;
`;

export default SocialButton;
