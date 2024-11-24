import { styled } from "styled-components";
import { theme } from "./../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";

const SaveLocationBtn = () => {
  return (
    <LocationBtnContainer>
      <Icon src={`/images/TouristMap/bookmark.svg`} />
      <Title>저장한 장소</Title>
    </LocationBtnContainer>
  );
};

const LocationBtnContainer = styled.button`
  display: flex;
  border: 1px solid ${theme.color.background};
  align-items: center;
  padding: 10px;
  border-radius: 30px;

  /*   box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1); */
  background-color: ${theme.color.white};
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

const Title = styled.p`
  ${applyFontStyles(theme.font.body3)};
`;

export default SaveLocationBtn;
