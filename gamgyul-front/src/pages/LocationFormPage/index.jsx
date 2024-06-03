import { useState } from "react";
import { styled } from "styled-components";
import Button from "../../components/common/Button";
import { theme } from "../../style/theme";
import { FormLayout, StyledBottomWrapper, StyledTextBox } from "../ThemeFormPage";

const LocationFormPage = () => {
  const [selectLocation, setSelectLocation] = useState("");

  const handleOptionClick = (location) => {
    setSelectLocation(location);
  };

  return (
    <FormLayout>
      <StyledLocationTextBox>
        <img src="images/Background/halmangImg.svg" />
        <StyledLocationText>
          <span>
            Choose a location
            <br />
            for your trip
          </span>
        </StyledLocationText>
      </StyledLocationTextBox>
      <StyledBottomWrapper>
        {selectLocation === "" ? (
          <StyledOptionImg src={`/images/LocationMap/map_default.png`} alt={`map_default`} />
        ) : (
          <StyledOptionImg src={`/images/LocationMap/${selectLocation}.png`} alt={`${selectLocation}`} />
        )}
        <StyledOptionList>
          <StyledOptionBtnWrapper>
            {[
              "West Jeju City",
              "Jeju City",
              "East Jeju City",
              "West Seogwipo City",
              "Seogwipo City",
              "East Seoqwipo City",
            ].map((location) => (
              <StyledOptionBtn
                key={location}
                isSelected={selectLocation === location}
                onClick={() => handleOptionClick(location)}
              >
                {location}
              </StyledOptionBtn>
            ))}
          </StyledOptionBtnWrapper>
        </StyledOptionList>
        <Button disabled={!selectLocation}>다음</Button>
      </StyledBottomWrapper>
    </FormLayout>
  );
};

/** StyledTextBox LocationForm 스타일링 */
const StyledLocationText = styled(StyledTextBox)`
  text-align: left;
`;

/** 선택 버튼 list wrapper */
const StyledOptionList = styled.div`
  width: 100%;
  margin-top: 49px;
  margin-bottom: 20px;
`;

/** 선택 버튼 */
const StyledOptionImg = styled.img`
  width: 100%;
`;

/** 선택 버튼 */
const StyledOptionBtn = styled.button`
  width: 106px;
  height: 79px;
  font-weight: 600;
  border-radius: 10px;
  margin-bottom: 16px;
  border: 1px solid ${({ isSelected }) => (isSelected ? theme.color.primary : theme.color.grayscale_BF)};
  background-color: ${({ isSelected }) => (isSelected ? theme.color.primary : theme.color.white)};
  color: ${({ isSelected }) => (isSelected ? theme.color.white : theme.color.black)};
  font-size: ${theme.fontSize.body3};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledOptionBtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

/** LocationForm TextBox 스타일링 */
const StyledLocationTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 69px;

  & > *:nth-child(1) {
    width: 93px;
  }
`;

export default LocationFormPage;
