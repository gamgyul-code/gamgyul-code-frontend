import { useState } from "react";
import { styled } from "styled-components";
import { BasicLayout } from "../../components/common/BasicLayout/layout.style";
import { theme } from "../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";

const LanguageSelectPage = () => {
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSendLanguage = () => {};

  return (
    <LanguagePageContainer>
      <LanguageImage>
        <img src={`/images/Icon/mainLogo.svg`} />
      </LanguageImage>
      <SelectContainer>
        <Info>언어를 선택해 주세요</Info>
        <SelectBox>
          <Select value={language} onChange={handleLanguageChange}>
            <option value="EN">English (영어)</option>
            <option value="KO">한국어</option>
          </Select>
          <SelectBtn onClick={handleSendLanguage}>다음</SelectBtn>
        </SelectBox>
      </SelectContainer>
    </LanguagePageContainer>
  );
};

const LanguagePageContainer = styled(BasicLayout)`
  background-color: ${theme.color.primary};
`;

const LanguageImage = styled.div`
  display: flex;
  justify-content: center;

  margin: 323px 0 106.4px;
`;

const SelectContainer = styled.section``;

const Info = styled.p`
  ${applyFontStyles(theme.font.body2)}
  color: ${theme.color.white};

  margin-left: 20px;
  margin-bottom: 8px;
`;

const SelectBox = styled.div`
  text-align: center;
`;

const Select = styled.select`
  ${applyFontStyles(theme.font.body2)}
  width: calc(100% - 40px);
  height: 55px;

  border-radius: 10px;
  border: 1px solid ${theme.color.gray3};

  appearance: none;

  text-align: center;
  -webkit-appearance: none; /* 크롬, 사파리 브라우저를 위한 스타일 */
  -moz-appearance: none; /* 파이어폭스 브라우저를 위한 스타일 */
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12%2016.5599L4.94696%209.50692L6.32546%208.12842L12%2013.8029L17.6745%208.12842L19.053%209.50692L12%2016.5599Z%22%20fill%3D%22gray%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;

  background-position: right 24px center;
  background-size: 24px;

  &::placeholder {
    ${applyFontStyles(theme.font.body2)}
  }

  option {
    ${applyFontStyles(theme.font.body2)}
  }

  margin-bottom: 8px;

  color: ${theme.color.gray1};
`;

const SelectBtn = styled.button`
  width: calc(100% - 40px);
  padding: 10px 0;

  text-align: center;

  border: none;
  border-radius: 10px;

  height: 55px;

  ${applyFontStyles(theme.font.body2)}
  background-color: ${theme.color.sub1};
  color: ${theme.color.gray1};
`;

export default LanguageSelectPage;
