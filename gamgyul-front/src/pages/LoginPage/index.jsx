// LoginPage.jsx
import { styled } from "styled-components";
import { BasicLayout } from "../../components/common/BasicLayout/layout.style";
import SocialButton from "../../components/Login/SocialButton";
import { theme } from "../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";

const LoginPage = ({ Google }) => {
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
        <SocialButton category="Google" onClick={() => handleJoinBtnClick()} />
        <SocialButton category="Naver" onClick={() => handleJoinBtnClick()} />
        <SocialButton category="Kakao" onClick={() => handleJoinBtnClick()} />
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
