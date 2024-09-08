import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import { applyFontStyles } from "../../utils/fontStyles";
import { theme } from "../../style/theme";
import BackNaviBtn from "../../components/common/BackNaviBtn";
import Modal from "../../components/common/Modal";
import TripRouteItem from "../../components/common/TripRouteItem";

const TripRoutePage = () => {
  const type = "USER_DEFINE"; // 사용자가 만든 경로
  // const type = "PREDEFINE"; // 기존 제공 경로
  const [bookmark, setBookmark] = useState("off");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState(null);
  const [routeData, setRouteData] = useState([]);

  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const { naver } = window;

  useEffect(() => {
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(33.4008, 126.5601);
      mapRef.current = new naver.maps.Map("map", {
        center: location,
        zoom: 9,
        mapDataControl: false,
        scaleControl: false,
        logoControlOptions: { position: 3 },
      });
    }

    // data 요청 (temp data)
    setRouteData([
      { title: "제주 국제 공항", subtitle: "제주 시내", lat: 33.4995, lng: 126.5388 },
      { title: "제주 국제 공항", subtitle: "제주 시내", lat: 33.4521, lng: 126.4076 },
      { title: "제주 국제 공항", subtitle: "제주 시내", lat: 33.3893, lng: 126.4104 },
      { title: "제주 국제 공항", subtitle: "제주 시내", lat: 33.3058, lng: 126.5161 },
    ]);
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];

      if (routeData.length > 0) {
        const path = routeData.map((route) => new naver.maps.LatLng(route.lat, route.lng));

        // polyline
        const polyline = new naver.maps.Polyline({
          map: mapRef.current,
          path: path,
          strokeColor: theme.color.primary,
          strokeStyle: "shortdash",
          strokeWeight: 2,
        });

        routeData.forEach((route, index) => {
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(route.lat, route.lng),
            map: mapRef.current,
            icon: {
              url: `/images/Map/Markers/marker${index + 1}_${activeRoute === index ? "on" : "off"}.svg`,
              anchor: activeRoute === index ? new naver.maps.Point(26, 55) : new naver.maps.Point(15, 20),
            },
          });

          naver.maps.Event.addListener(marker, "click", () => {
            getClickMarker(index);
          });
          markersRef.current.push(marker);
        });
      }
    }
  }, [routeData, activeRoute]);

  const getClickMarker = (index) => {
    setActiveRoute(index);
  };

  const handleRouteClick = (index) => {
    console.log(index);
    // 변경 : 상세 루트 페이지로 이동
    setActiveRoute(index);
  };

  /** 북마크 버튼 클릭 => 이후 api 요청 추가 */
  const handleBookmarkClick = (bookmark) => {
    if (bookmark === "off") {
      setBookmark("on");
    } else {
      setBookmark("off");
    }
  };

  /** 모달 닫기 */
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  /** 모달 확인 버튼 클릭 */
  const handleModalCheck = (value) => {
    // API 요청
    console.log(value);
  };

  return (
    <TripRouteLayout>
      {isModalOpen && <Modal type="SAVE" onClick={handleModalCheck} onClose={handleCloseModal} />}
      <TripRouteContainer>
        <RouteMapSection>
          <BackNaviBtn />
          <TripRouteMapContainer ref={mapRef} id="map"></TripRouteMapContainer>
          <NavLinkButton>
            <img src="/images/Icon/navigation.svg" alt="" />
            <span>네비연동</span>
          </NavLinkButton>
        </RouteMapSection>
        <BottomSheetMain>
          <BottomSheetInfoContainer>
            <header>
              <h2>추천 경로</h2>
              <p>선택한 장소를 바탕으로 생성한 경로입니다.</p>
            </header>
            {type === "USER_DEFINE" ? (
              <RouteSaveButton onClick={() => setIsModalOpen(true)}>
                <img src="/images/Icon/save.svg" alt="" />
                <span>저장하기</span>
              </RouteSaveButton>
            ) : (
              <RouteBookmarkButton>
                <img
                  src={`/images/Icon/bookmark_${bookmark}.svg`}
                  alt={`bookmark_${bookmark}`}
                  onClick={() => handleBookmarkClick(bookmark)}
                />
              </RouteBookmarkButton>
            )}
          </BottomSheetInfoContainer>
          <BottomSheetRouteSection>
            <nav>
              <ul>
                {routeData.map((data, index) => {
                  return (
                    <TripRouteItem
                      key={index}
                      isFirst={index === 0}
                      isLast={index === routeData.length - 1}
                      stepNumber={index + 1}
                      data={data}
                      isActive={index === activeRoute}
                      onClick={() => handleRouteClick(index)}
                    />
                  );
                })}
              </ul>
            </nav>
          </BottomSheetRouteSection>
        </BottomSheetMain>
      </TripRouteContainer>
    </TripRouteLayout>
  );
};

const TripRouteLayout = styled(BasicLayout)`
  padding: 0;
  height: 100vh;
  position: relative;
`;

const TripRouteContainer = styled.div``;

/** Route 페이지의 상단 (Map API 들어가는 부분) */
const RouteMapSection = styled.section`
  width: 100%;
  height: 390px;
  position: relative;
`;

/** Naver MAP API 공간 */
const TripRouteMapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

/** Route 페이지 하단시트 (경로) */
const BottomSheetMain = styled.main`
  box-shadow: 0px 0px 10px 0px #0000001a;
  background-color: ${theme.color.background};
  height: calc(100vh - 360px);
  border-radius: 30px 30px 0px 0px;
  position: absolute;
  top: 360px;
  left: 0;
  right: 0;
`;

/** 하단시트 정보 (header + 버튼) */
const BottomSheetInfoContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  header > h2 {
    ${applyFontStyles(theme.font.subtitle)}
    margin-bottom: 4px;
  }
  header > p {
    ${applyFontStyles(theme.font.body3)}
    color: ${theme.color.gray1};
  }
`;

const BottomSheetRouteSection = styled.section`
  width: 100%;
  height: calc(100% - 114px);
  margin-top: 24px;
  overflow-y: scroll;
`;

/** 네비 연동 버튼 */
const NavLinkButton = styled.button`
  border: none;
  padding: 4px 8px;
  border-radius: 30px;
  box-shadow: 0px 2px 3px 0px #0000001a;
  background-color: ${theme.color.white};
  display: flex;
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 46px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-right: 4px;
  }
  span {
    ${applyFontStyles(theme.font.caption1)}
    color: ${theme.color.gray1};
  }
`;

/** 경로 저장 버튼 */
const RouteSaveButton = styled.button`
  width: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: inherit;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
  span {
    ${applyFontStyles(theme.font.caption1)}
    color: ${theme.color.primary};
  }
`;
const RouteBookmarkButton = styled.button`
  img {
    width: 100%;
    height: 100%;
  }
  width: 30px;
  height: 30px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  filter: invert(57%) sepia(42%) saturate(4074%) hue-rotate(121deg) brightness(95%) contrast(76%);
`;

export default TripRoutePage;
