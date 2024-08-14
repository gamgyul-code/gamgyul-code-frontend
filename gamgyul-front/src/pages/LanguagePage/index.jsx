import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import background from "../../assets/background/background.png";
import Button from "./../../components/common/Button/index";
import { LanguageContext } from "../../contexts/LanguageContext";

import { theme } from "./../../style/theme";
import axios from "axios";
import { applyFontStyles } from "../../utils/fontStyles";

const LanguagePage = () => {
  // const { language, changeLanguage } = useContext(LanguageContext);
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSendLanguage = () => {
    console.log(language);
    axios
      .post(`https://k0bcc2aad5ee3a.user-app.krampoline.com/api/languages/set?language=${language}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledLanguage>
      <StlyedSpan>Select Language</StlyedSpan>
      <div>
        <StyledSelect value={language} onChange={handleLanguageChange}>
          <option value="EN">English (영어)</option>
          <option value="KO">한국어</option>
          <option value="JP">日本語 (일본어)</option>
          <option value="CN">中國語 (중국어)</option>
          {/* 필요에 따라 다른 언어 추가 */}
        </StyledSelect>
      </div>
      <StyledBottomWrapper>
        <Link to="/detail">
          <Button onClick={handleSendLanguage}>NEXT</Button>
        </Link>
      </StyledBottomWrapper>
    </StyledLanguage>
  );
};

const StlyedSpan = styled.span`
  ${applyFontStyles(theme.font.body2)}
  padding-bottom: 14px;
  text-align: left;
  display: block;
  width: 100%;
  margin-left: 45px;
`;
const StyledLanguage = styled.div`
  background-image: url(${background});
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const StyledSelect = styled.select`
  ${applyFontStyles(theme.font.body1)}
  width: 353px;
  height: 64px;
  border-radius: 10px;

  border: 1px solid ${theme.color.grayscale_BF};
  background-color: #fff;
  color: ${theme.color.black};
  appearance: none;
  text-align: center;
  -webkit-appearance: none; /* 크롬, 사파리 브라우저를 위한 스타일 */
  -moz-appearance: none; /* 파이어폭스 브라우저를 위한 스타일 */
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12%2016.5599L4.94696%209.50692L6.32546%208.12842L12%2013.8029L17.6745%208.12842L19.053%209.50692L12%2016.5599Z%22%20fill%3D%22black%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 24px;

  &::placeholder {
    ${applyFontStyles(theme.font.body1)}
  }

  option {
    height: 64px; /* StyledSelect의 높이와 동일하게 설정 */
    ${applyFontStyles(theme.font.body1)}
  }

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const StyledBottomWrapper = styled.div`
  width: calc(100% - 40px); /* FormLayout의 패딩을 고려한 너비 */
  padding: 10px 0;
  text-align: center;
`;

export default LanguagePage;
