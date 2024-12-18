import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { BasicLayout } from "../../components/common/BasicLayout/layout.style";
import ThemeNavFilter from "../../components/TouristMap/ThemeNavFilter";
import NavigationBar from "./../../components/common/NavigationBar/index";
import { theme } from "./../../style/theme";

const TouristMapPage = () => {
  /* const navigate = useNavigate(); */

  /*  const handleClickPopUp = () => {
    // 추후 라우터 수정
    navigate("/login");
  }; */

  const mapRef = useRef(null);
  const { naver } = window;

  useEffect(() => {
    const mapOptions = {
      // 지도의 초기 중심 좌표
      center: new naver.maps.LatLng(37.5666103, 126.9783882),
      logoControl: false, // 네이버 로고 표시 X
      mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
      scaleControl: true, // 지도 축척 컨트롤의 표시 여부
      tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
      zoom: 14, // 지도의 초기 줌 레벨
    };

    const markersData = [
      { lat: 37.5666103, lng: 126.9783882, title: "Marker 1" },
      { lat: 37.567, lng: 126.978, title: "Marker 2" },
      { lat: 37.565, lng: 126.976, title: "Marker 3" },
    ];

    const mapInstance = new naver.maps.Map("map", mapOptions);
    mapRef.current = mapInstance;

    // 여러 마커 생성
    markersData.forEach(({ lat, lng, title }) => {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map: mapInstance,
        title: title,
      });
    });
  }, []);

  return (
    <>
      <TouristMapPageContainer id="map">
        <Nav>
          <ThemeNavFilter />
        </Nav>
        {/* <TouristModal /> */}
        {/* <SaveLocationBtn /> */}
        {/* <LocationInfo handleClickPopUp={handleClickPopUp} /> */}
        <NavigationBar />
      </TouristMapPageContainer>
    </>
  );
};

const TouristMapPageContainer = styled(BasicLayout)`
  background-color: ${theme.color.gray3};
  position: relative;
`;

const Nav = styled.div`
  padding: 67px 20px 0 20px;
  position: absolute; /* 네이버 맵 위로 띄우기 */
  top: 67px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10; /* 네이버 맵 위로 올리기 위해 높은 값 설정 */
  padding: 0 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default TouristMapPage;
