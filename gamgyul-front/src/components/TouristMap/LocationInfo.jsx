import { useState } from "react";
import { styled } from "styled-components";
import { IcBookMarkOff, IcBookMarkOn, IcInfoPlace, IcInfoTime } from "../../assets";
import { theme } from "./../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";

const LocationInfo = ({ handleClickPopUp }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [locationInfoData, setLocationInfoData] = useState(null);

  // 북마크
  const handleIconClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <LocationInfoContainer>
      <LocationImg>{locationInfoData?.imgUrl}</LocationImg>
      <LocationContainer>
        <InfoTop>
          <InfoContainer>
            <Title>{locationInfoData?.name}</Title>
            <Info>{locationInfoData?.simpleExplanation}</Info>
          </InfoContainer>
          <span onClick={handleIconClick}>{isSaved ? <IcBookMarkOn /> : <IcBookMarkOff />}</span>
        </InfoTop>
        <InfoBottom>
          <InfoText>
            <IcInfoPlace />
            {locationInfoData?.address}
          </InfoText>
          <InfoText>
            <IcInfoTime />
            {locationInfoData?.openingHours}
          </InfoText>
        </InfoBottom>
      </LocationContainer>
    </LocationInfoContainer>
  );
};

const LocationInfoContainer = styled.article`
  width: 335px;
  height: 130px;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
`;

const LocationContainer = styled.div`
  padding: 16px 0 0 14px;
`;

const LocationImg = styled.div`
  width: 106px;
  height: 130px;
  background-color: aqua;
  border-radius: 20px 0 0 20px;
`;

const InfoTop = styled.div`
  display: flex;
`;

const InfoBottom = styled.div``;

const InfoContainer = styled.div`
  width: 165px;
  margin-right: 10px;
`;

const Title = styled.p`
  ${applyFontStyles(theme.font.body1)};
  margin-bottom: 4px;
`;

const Info = styled.p`
  ${applyFontStyles(theme.font.caption1)};
  width: 165px;
  margin-bottom: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${theme.color.primary};
`;

const InfoText = styled.p`
  ${applyFontStyles(theme.font.body3)};
  display: flex;
  gap: 2px;
  align-items: center;
  margin-bottom: 1px;
`;
export default LocationInfo;
