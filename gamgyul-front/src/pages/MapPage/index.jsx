import { useState, useEffect } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { FormLayout } from "../LocationFormPage";
import Button from "../../components/common/Button";
import { theme } from "../../style/theme";
import { StyledBody2Gray, StyledSubTitleText } from "../MapDetailPage";
import { Link } from "react-router-dom";

const MapPage = () => {
  const positions = [
    {
      title: "카카오",
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
    {
      title: "생태연못",
      latlng: { lat: 33.450936, lng: 126.569477 },
    },
    {
      title: "텃밭",
      latlng: { lat: 33.450879, lng: 126.56994 },
    },
    {
      title: "근린공원",
      latlng: { lat: 33.451393, lng: 126.570738 },
    },
  ];

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 컴포넌트가 unmount될 때 지도 인스턴스 제거
    return;
    /* () => {
      map.remove();
    }; */
  }, []);

  /** 모달 임시 클릭 (달성 조건 추가 필요) */
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  // test
  const handleTest = (data) => {
    console.log(data);
  };

  return (
    <FormLayout>
      <StyledMap
        id="map"
        center={{
          lat: 33.450701,
          lng: 126.570667,
        }}
        level={3}
      >
        {positions.map((position, index) => (
          <MapMarker
            key={`${position.title}-${position.latlng}`}
            position={position.latlng} // 마커를 표시할 위치
            onClick={() => handleTest(position.latlng)}
            image={{
              src: "/images/Map/ActivePin.svg", // 마커이미지의 주소입니다
              size: {
                width: 45,
                height: 66,
              }, // 마커이미지의 크기입니다
            }}
            title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
        ))}
      </StyledMap>
      <StyledBottomSheet>
        <StyledContentsWrap>
          <StyledContentImg />
          <StyledLocationDetail>
            <StyledSubTitleText>장소 이름</StyledSubTitleText>
            <StyledBody2Gray>제주의 사랑 이야기가 담긴 장소 5개를 여행하며 어쩌구 저쩌구</StyledBody2Gray>
          </StyledLocationDetail>
        </StyledContentsWrap>
        <Link to="/detail2">
          <Button type="small">View Description</Button>
        </Link>
      </StyledBottomSheet>
    </FormLayout>
  );
};

/** Map 스타일링 */
const StyledMap = styled(Map)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-indx: 990;
`;

const StyledBottomSheet = styled.div`
  width: 100%;
  height: 249px;
  border-radius: 20px 20px 0 0;
  position: absolute;
  background-color: ${theme.color.white};
  bottom: 0;
  left: 0;
  z-index: 999;
  padding: 30px 20px 59px 20px;
  box-sizing: border-box;
  box-shadow: 0px 3.39px 16.94px 0px #0000001a;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledContentsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLocationDetail = styled.div`
  width: 233px;
  display: flex;
  flex-direction: column;

  *:nth-child(2) {
    margin-top: 6px;
  }
`;

/** content 이미지 스타일링 */
const StyledContentImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 10px;
`;

export default MapPage;
