import { useState } from "react";
import { styled } from "styled-components";
import { theme } from "./../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";
const LocationInfo = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleIconClick = () => {
    setIsSaved(!isSaved); // 클릭할 때마다 상태를 토글
  };

  return (
    <LocationInfoContainer>
      <LocationImg>
        <Img />
      </LocationImg>
      <Location>
        <InfoContainer>
          <Title>한라산 정상</Title>
          <Info>설문대 할망 관련 장소 경기도 고양시 일산서ssssssssssss구</Info>
          <Badge>연간 방문객 보통</Badge>
        </InfoContainer>
        <Icon
          src={isSaved ? `/images/TouristMap/book_on.svg` : `/images/TouristMap/book_off.svg`}
          onClick={handleIconClick} // 아이콘 클릭 이벤트 추가
        />
      </Location>
    </LocationInfoContainer>
  );
};

const LocationInfoContainer = styled.article`
  width: 335px;
  height: 139px;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
`;

const LocationImg = styled.div`
  width: 106px;
  height: 139px;
  background-color: aqua;
  border-radius: 20px 0 0 20px;
`;

const Img = styled.img``;

const Location = styled.div`
  display: flex;
  padding: 16px;
`;

const InfoContainer = styled.div`
  width: 165px;
`;

const Title = styled.p`
  ${applyFontStyles(theme.font.body1)};
  margin-bottom: 4px;
`;

const Info = styled.p`
  ${applyFontStyles(theme.font.body3)};
  width: 165px;
  margin-bottom: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Badge = styled.p`
  border: 1px solid yellow;
  padding: 4px 8px;
  ${applyFontStyles(theme.font.caption1)};
  border-radius: 20px;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export default LocationInfo;
