import { useState, useEffect } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { FormLayout } from "../ThemeFormPage";
import Button from "../../components/common/Button";
import { theme } from "../../style/theme";
import { StyledBody2Gray, StyledSubTitleText } from "../MapDetailPage";
import { Link } from "react-router-dom";
import axios from "axios";

const MapPage = () => {
  const dataId = window.localStorage.getItem("placeId");
  const [tempDataId, setTempDataId] = useState(dataId);
  const [itemData, setItemData] = useState();
  const positions = [
    {
      id: 1,
      title: "영실기암",
      latlng: { lat: 33.3545211, lng: 126.570677 },
    },
    {
      id: 2,
      title: "한라산 국립공원",
      latlng: { lat: 33.3917738, lng: 126.4945012 },
    },
    {
      id: 3,
      title: "제주 돌문화공원",
      latlng: { lat: 33.4373391, lng: 126.6668484 },
    },
    {
      id: 4,
      title: "고근산",
      latlng: { lat: 33.2707366, lng: 126.5126032 },
    },
    {
      id: 5,
      title: "당케포구",
      latlng: { lat: 33.3264171, lng: 126.8468674 },
    },
  ];

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.3917738, 126.4945012),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 컴포넌트가 unmount될 때 지도 인스턴스 제거
    return;
    /* () => {
      map.remove();
    }; */
  }, []);

  useEffect(() => {
    if (tempDataId) {
      fetchMapIntro(tempDataId);
    }
  }, [tempDataId]);

  // API 요청 함수
  const fetchMapIntro = (id) => {
    axios
      .get(`https://k0bcc2aad5ee3a.user-app.krampoline.com/api/readings/mapIntro/${id}`)
      .then((response) => {
        console.log(response.data);
        // 여기서 응답 데이터를 처리하고 원하는 동작을 수행하세요.
        setItemData(response.data);
      })
      .catch((error) => {
        console.error("API 요청이 실패했습니다:", error);
      });
  };

  // test
  const handleTest = (data) => {
    window.localStorage.setItem("placeId", data);
    setTempDataId(data);
    fetchMapIntro(data);
  };

  const MAX_INTRO_TEXT_LENGTH = 30; // 최대 표시 길이

  // itemData.introText를 표시할 때 길이 제한을 두고 자르는 함수
  const truncateIntroText = (text) => {
    if (text.length > MAX_INTRO_TEXT_LENGTH) {
      return text.slice(0, MAX_INTRO_TEXT_LENGTH) + "...";
    }
    return text;
  };

  return (
    <FormLayout>
      <StyledMap
        id="map"
        center={{
          lat: 33.3917738,
          lng: 126.4945012,
        }}
        level={3}
      >
        {positions.map((position, index) => {
          console.log(position);
          return (
            <MapMarker
              key={position.title}
              position={position.latlng}
              onClick={() => handleTest(position.id)}
              image={{
                src: "/images/Map/ActivePin.svg",
                size: {
                  width: 45,
                  height: 66,
                },
              }}
              title={position.title}
            />
          );
        })}
      </StyledMap>
      {itemData ? (
        <StyledBottomSheet>
          <StyledContentsWrap>
            <StyledContentImg src={itemData.placePictureUrl} />
            <StyledLocationDetail>
              <StyledSubTitleText>{itemData.name}</StyledSubTitleText>
              <StyledBody2Gray>{truncateIntroText(itemData.introText)}</StyledBody2Gray>
            </StyledLocationDetail>
          </StyledContentsWrap>
          <Link to="/detail2">
            <Button type="small">View Description</Button>
          </Link>
        </StyledBottomSheet>
      ) : (
        <StyledBottomSheet>
          <StyledContentsWrap>
            <StyledContentImg />
            <StyledLocationDetail>
              <StyledSubTitleText>Hallasan National Park</StyledSubTitleText>
              <StyledBody2Gray>Hallasan, one of Korea's three...</StyledBody2Gray>
            </StyledLocationDetail>
          </StyledContentsWrap>
          <Link to="/detail2">
            <Button type="small">View Description</Button>
          </Link>
        </StyledBottomSheet>
      )}
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
  border-radius: 10px;
`;

export default MapPage;
