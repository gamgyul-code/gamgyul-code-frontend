import Button from "../../components/common/Button";
import { styled } from "styled-components";
import { theme } from "../../style/theme";
import { useState } from "react";
import { applyFontStyles } from "../../utils/fontStyles";

const ThemeFormPage = () => {
  const [selectTheme, setSelectTheme] = useState("");

  const handleOptionClick = (theme) => {
    setSelectTheme(theme);
  };

  return (
    <FormLayout>
      <StyledBackgroundWrap>
        <img src="images/Background/halmangImg.svg" />
      </StyledBackgroundWrap>
      <StyledThemeText>
        <span>
          Choose a theme
          <br />
          that you want to travel
        </span>
      </StyledThemeText>
      <StyledBottomWrapper>
        <StyledOptionList>
          {["Seolmundae halmang", "History", "Myth", "Love"].map((theme) => (
            <StyledOptionBtn key={theme} isSelected={selectTheme === theme} onClick={() => handleOptionClick(theme)}>
              {theme}
            </StyledOptionBtn>
          ))}
        </StyledOptionList>
        <Button disabled={!selectTheme}>다음</Button>
      </StyledBottomWrapper>
    </FormLayout>
  );
};

/** 텍스트 스타일링 */
export const StyledTextBox = styled.div`
  ${applyFontStyles(theme.font.subtitle)}
  text-align: center;
  margin: 0 auto;
`;

/** Theme 텍스트 스타일링 */
const StyledThemeText = styled(StyledTextBox)`
  margin-top: 30px;
`;

/** 선택 버튼 list wrapper */
const StyledOptionList = styled.div`
  width: 100%;
  margin-top: 49px;
  display: flex;
  flex-wrap: wrap;

  & > *:nth-child(odd) {
    margin-right: 19px;
  }
`;

/** 선택 버튼 */
const StyledOptionBtn = styled.button`
  ${applyFontStyles(theme.font.body1)}
  width: 167px;
  height: 98px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid ${({ isSelected }) => (isSelected ? theme.color.primary : theme.color.grayscale_BF)};
  background-color: ${({ isSelected }) => (isSelected ? theme.color.primary : theme.color.white)};
  color: ${({ isSelected }) => (isSelected ? theme.color.white : theme.color.black)};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

/** 이미지 제외 위치 고정 박스 */
export const StyledBottomWrapper = styled.div`
  position: absolute;
  bottom: 20px; /* 하단에서의 거리 */
  width: calc(100% - 40px); /* FormLayout의 패딩을 고려한 너비 */
  left: 20px; /* FormLayout의 왼쪽 패딩 */
  right: 20px; /* FormLayout의 오른쪽 패딩 */
`;

/** 공통 FormLayout (내부여백) */
export const FormLayout = styled.div`
  padding: 0px 20px 58px 20px;
  height: calc(100vh - 58px);
  width: calc(100% - 40px);
  background-color: ${theme.color.background};
  position: relative;
`;

const StyledBackgroundWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    width: 220px;
    margin-top: 78px;
  }
`;

export default ThemeFormPage;
