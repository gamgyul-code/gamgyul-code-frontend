import Button from "../../components/common/Button";
import { styled } from "styled-components";
import { theme } from "../../style/theme";
import { useState } from "react";

const LocationFormPage = () => {
  const [selectTheme, setSelectTheme] = useState("");

  const handleOptionClick = (theme) => {
    setSelectTheme(theme);
  };

  return (
    <FormLayout>
      <div>할망 이미지 들어갈 공간</div>
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
      <Button />
    </FormLayout>
  );
};

/** 텍스트 스타일링 */
const StyledTextBox = styled.div`
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

/** 선택 버튼 (hover 유무에 따른 변경 필요) */
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

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? theme.color.primary : theme.color.grayscale_C4)};
  }
`;

/** 공통 FormLayout (내부여백) */
export const FormLayout = styled.div`
  padding: 0px 20px 58px 20px;
  height: calc(100vh - 58px);
  width: calc(100% - 40px);
  background-color: gray;

  position: relative;
`;

export default LocationFormPage;
