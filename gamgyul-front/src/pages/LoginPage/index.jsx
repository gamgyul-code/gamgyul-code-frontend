import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BasicLayout } from "../../components/common/BasicLayout/layout.style";
import SocialButton from "../../components/Login/SocialButton";
import { theme } from "../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";

const LoginPage = () => {
  const navigate = useNavigate();

  // 쿠키 가져오기 유틸 함수
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  // 로그인 성공 후 토큰 확인
  useEffect(() => {
    const accessToken = getCookie("accessToken"); // 쿠키에서 accessToken 가져오기

    console.log("Access Token:", accessToken);
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      navigate("http://localhost:3000/"); // 로그인 성공 시 맵 페이지로 이동
    }
  }, [navigate]);

  // 소셜 로그인 요청 처리 함수
  const handleSocialLogin = (provider) => {
    const loginUrls = {
      Google: "http://43.200.126.36:8080/members/login/oauth2/google",
      Naver: "http://43.200.126.36:8080/members/login/oauth2/naver",
      Kakao: "http://43.200.126.36:8080/members/login/oauth2/kakao",
    };

    try {
      // 선택한 소셜 로그인 페이지로 리다이렉트
      window.location.href = loginUrls[provider];
    } catch (error) {
      console.error("Social login error:", error);
      alert("소셜 로그인에 실패했습니다. 다시 시도해주세요.");
    }
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
        <SocialButton category="Google" onClick={() => handleSocialLogin("Google")} />
        <SocialButton category="Naver" onClick={() => handleSocialLogin("Naver")} />
        <SocialButton category="Kakao" onClick={() => handleSocialLogin("Kakao")} />
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
