// LoginPage.jsx
import { styled } from "styled-components";
import { BasicLayout } from "../../components/common/BasicLayout/layout.style";
import GoogleBtn from "../../components/Login/GoogleBtn";
import KakaoBtn from "../../components/Login/KakaoBtn";
import NaverBtn from "../../components/Login/NaverBtn";
import { theme } from "../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";

const LoginPage = () => {
  const handleLogin = async () => {
    /* 로그인 구현 */
  };

  return (
    <LoginContainer>
      <LoginTitle>
        <LoginImage src={`/images/Login/loginLogo.svg`} />
        <Title>
          설문대 할망과 설화 <br /> 여행을 떠나보세요!
        </Title>
      </LoginTitle>
      <LoginButtonContainer>
        <GoogleBtn onClick={() => handleLogin("google")} />
        <NaverBtn onClick={() => handleLogin("naver")} />
        <KakaoBtn onClick={() => handleLogin("kakao")} />
      </LoginButtonContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled(BasicLayout)`
  text-align: center;
  background-color: ${theme.color.white};
`;

const LoginButtonContainer = styled.div`
  padding-left: 20px;
`;

const LoginTitle = styled.section`
  margin: 151px 0 126px;
`;

const LoginImage = styled.img`
  margin-bottom: 28px;
`;

const Title = styled.p`
  ${applyFontStyles(theme.font.subtitle)}
`;

export default LoginPage;
