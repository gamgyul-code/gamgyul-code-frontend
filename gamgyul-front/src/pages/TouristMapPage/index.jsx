import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { BasicLayout } from "../../components/common/BasicLayout/layout.style";
import ThemeNavFilter from "../../components/TouristMap/ThemeNavFilter";
import NavigationBar from "./../../components/common/NavigationBar/index";
import LocationInfo from "./../../components/TouristMap/LocationInfo";
import { theme } from "./../../style/theme";

const TouristMapPage = () => {
  /* const navigate = useNavigate(); */

  /*  const handleClickPopUp = () => {
    // 추후 라우터 수정
    navigate("/login");
  }; */

  const mapRef = useRef(null);
  const { naver } = window;

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [selectedMarkerData, setSelectedMarkerData] = useState(null); // 선택된 마커 데이터

  useEffect(() => {
    const mapOptions = {
      // 지도의 초기 중심 좌표
      center: new naver.maps.LatLng(33.3617, 126.5292),
      logoControl: false, // 네이버 로고 표시 X
      mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
      scaleControl: true, // 지도 축척 컨트롤의 표시 여부
      tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
      zoom: 10, // 지도의 초기 줌 레벨
    };

    const markersData = [
      { lat: 33.4622, lng: 126.3208, title: "Marker 1" },
      { lat: 33.4631, lng: 126.3197, title: "Marker 2" },
      { lat: 33.4654, lng: 126.3139, title: "Marker 3" },
    ];

    const mapInstance = new naver.maps.Map("map", mapOptions);
    mapRef.current = mapInstance;

    // 여러 마커 생성
    markersData.forEach(({ lat, lng, title }) => {
      let isClicked = false; // 마커 클릭 상태를 저장
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map: mapRef.current,
        icon: {
          url: "/src/assets/icon/ic_theme_heart_off.svg", // 아이콘 이미지 URL
          size: new naver.maps.Size(32, 32), // 아이콘 크기
          scaledSize: new naver.maps.Size(32, 32), // 이미지 크기를 스케일링
          origin: new naver.maps.Point(0, 0), // 아이콘의 시작 지점
        },
        title: title,
      });

      naver.maps.Event.addListener(marker, "click", () => {
        // 아이콘 변경
        const newIconUrl = isClicked
          ? "/src/assets/icon/ic_theme_heart_off.svg"
          : "/src/assets/icon/ic_theme_heart_on.svg";

        marker.setIcon({
          url: newIconUrl,
          size: new naver.maps.Size(32, 32),
          scaledSize: new naver.maps.Size(32, 32),
          origin: new naver.maps.Point(0, 0),
        });

        isClicked = !isClicked;

        // 모달창 열기
        setSelectedMarkerData({ title, lat, lng });
        setIsModalOpen(true);
      });
    });
  }, []); // 의존성 배열에서 markersData 제거

  /* useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(33.3617, 126.5292),
      logoControl: false,
      mapDataControl: false,
      scaleControl: true,
      tileDuration: 200,
      zoom: 10,
    };

    const mapInstance = new naver.maps.Map("map", mapOptions);
    mapRef.current = mapInstance;
  }, []);

  useEffect(() => {
    if (markers.length > 0) {
      // 기존 마커 제거
      mapRef.current && mapRef.current.clearOverlays();

      // 새로운 마커 추가
      markers.forEach(({ latitude, longitude, name }) => {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(latitude, longitude),
          map: mapRef.current,
          icon: {
            url: "/src/assets/icon/ic_theme_heart_off.svg",
            size: new naver.maps.Size(32, 32),
            scaledSize: new naver.maps.Size(32, 32),
            origin: new naver.maps.Point(0, 0),
          },
          title: name,
        });

        naver.maps.Event.addListener(marker, "click", () => {
          setSelectedMarkerData({ title: name, latitude, longitude });
          setIsModalOpen(true);
        });
      });
    }
  }, [markers]);

  const handleFilterSelect = async (filterId) => {
    try {
      const response = await axios.get(`http://43.200.126.36:8080/spots/filters/${filterId}`);
      setMarkers(response.data);
    } catch (error) {
      console.error("Failed to fetch data: ", error);
    }
  }; */

  const handleFilterSelect = async () => {};

  return (
    <>
      <TouristMapPageContainer id="map">
        <Nav>
          <ThemeNavFilter onFilterSelect={handleFilterSelect} />
        </Nav>
        {/* <TouristModal /> */}
        {/* <SaveLocationBtn /> */}

        <NavigationBar />
      </TouristMapPageContainer>
      {isModalOpen && (
        <ModalOverlay
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <LocationInfo handleClickPopUp={() => setIsModalOpen(false)} markerData={selectedMarkerData} />
        </ModalOverlay>
      )}
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 62%;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export default TouristMapPage;
