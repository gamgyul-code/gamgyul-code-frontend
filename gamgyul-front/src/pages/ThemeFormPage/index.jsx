import Button from "../../components/common/Button";
import { styled } from "styled-components";
import { theme } from "../../style/theme";
import { useState } from "react";

const ThemeFormPage = () => {
  const [selectTheme, setSelectTheme] = useState("");

  const handleOptionClick = (theme) => {
    setSelectTheme(theme);
  };

  return (
    <FormLayout>
      <div>할망 이미지 들어갈 공간</div>
      <StyledBottomWrapper>
        <StyledTextBox>
          <span>
            Choose a theme
            <br />
            that you want to travel
          </span>
        </StyledTextBox>

        <StyledOptionList>
          {["설문대 할망", "역사", "신화", "사랑"].map((theme) => (
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
  font-size: ${theme.fontSize.subtitle};
  text-align: center;
  margin: 0 auto;
`;

/** 선택 버튼 list wrapper */
const StyledOptionList = styled.div`
  width: 100%;
  margin-top: 49px;

  & > *:nth-child(odd) {
    margin-right: 19px;
  }
`;

/** 선택 버튼 */
const StyledOptionBtn = styled.button`
  width: 167px;
  height: 98px;
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid ${({ isSelected }) => (isSelected ? theme.color.primary : theme.color.grayscale_BF)};
  background-color: ${({ isSelected }) => (isSelected ? theme.color.primary : theme.color.white)};
  color: ${({ isSelected }) => (isSelected ? theme.color.white : theme.color.black)};
  font-size: ${theme.fontSize.body1};
  cursor: pointer;
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

export default ThemeFormPage;
