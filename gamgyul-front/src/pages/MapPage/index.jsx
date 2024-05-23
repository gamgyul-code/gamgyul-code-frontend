import { useState, useEffect } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { FormLayout } from "../LocationFormPage";
import Modal from "../../components/common/Modal";
import Button from "../../components/common/Button";

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
    return () => {
      map.remove();
    };
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
              src: "/images/Map/Pin.png", // 마커이미지의 주소입니다
              size: {
                width: 24,
                height: 35,
              }, // 마커이미지의 크기입니다
            }}
            title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
        ))}
      </StyledMap>
    </FormLayout>
  );
};

const StyledMap = styled(Map)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export default MapPage;
