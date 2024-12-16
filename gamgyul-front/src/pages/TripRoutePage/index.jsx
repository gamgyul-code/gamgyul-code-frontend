import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { theme } from "../../style/theme";
import { applyFontStyles } from "../../utils/fontStyles";
import { applyIconColors } from "../../utils/iconStyles";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import BackNaviBtn from "../../components/common/BackNaviBtn";
import Modal from "../../components/common/Modal";
import TripRouteItem from "../../components/TripRoute/TripRouteItem";
import { IcBookMarkOff, IcBookMarkOn } from "../../assets";
import RouteEditSection from "../../components/TripRoute/RouteEditSection";
// import { BottomButton } from "../../components/common/Button/BottomButton.style";

const TripRoutePage = () => {
  const curLocation = useLocation();
  const routeType = curLocation.state.routeType;

  const [bookmark, setBookmark] = useState(curLocation.state.bookmark);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState(null);
  const [routeData, setRouteData] = useState([]);
  const [distances, setDistances] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  // const [checkRoutes, setCheckRoutes] = useState([]);

  // const dragItem = useRef();
  // const dragOverItem = useRef();
  // /** 드래그 시작 */
  // const handleDragStart = (e, position) => {
  //   dragItem.current = position;
  //   console.log(e);
  // };

  // /** 드래그 포개졌을 때 */
  // const handleDragEnter = (e, position) => {
  //   dragOverItem.current = position;
  // };

  // /** 드래그 종료 */
  // const handleDrop = () => {
  //   const copyListItems = [...routeData];
  //   const dragItemContent = copyListItems[dragItem.current];

  //   // 아이템 재정렬
  //   copyListItems.splice(dragItem.current, 1); // 드래그 시작한 아이템 삭제
  //   copyListItems.splice(dragOverItem.current, 0, dragItemContent); // 새로운 위치에 삽입

  //   dragItem.current = null;
  //   dragOverItem.current = null;
  //   setRouteData(copyListItems); // 상태 업데이트
  // };

  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const polylineRef = useRef(null);
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

    // data 요청 (temp data) => CUSTOM SERVICE DONE에 따라 구분
    if (routeType === "CUSTOM") {
      // setRouteData(curLocation.state.routeData);
      setRouteData([
        // temp data
        { title: "제주 장소1", subtitle: "서브 타이틀1", lat: 33.4995, lng: 126.5388 },
        { title: "제주 장소2", subtitle: "서브 타이틀2", lat: 33.4521, lng: 126.4076 },
        { title: "제주 장소3", subtitle: "서브 타이틀3", lat: 33.3893, lng: 126.4104 },
        { title: "제주 장소4", subtitle: "서브 타이틀4", lat: 33.3058, lng: 126.5161 },
      ]);
    } else {
      // SERVICE와 DONE의 경우 백엔드 API 요청 필요
      setRouteData([
        { title: "제주 장소1", subtitle: "서브 타이틀1", lat: 33.4995, lng: 126.5388 },
        { title: "제주 장소2", subtitle: "서브 타이틀2", lat: 33.4521, lng: 126.4076 },
        { title: "제주 장소3", subtitle: "서브 타이틀3", lat: 33.3893, lng: 126.4104 },
        { title: "제주 장소4", subtitle: "서브 타이틀4", lat: 33.3058, lng: 126.5161 },
      ]);
    }

    // 변경 예정 (임시 데이터) @@이후 m, km 변환 필요
    setDistances([100, 100, 100]);
  }, []);

  // CUSTOM일 때, 추천 경로 계산 테스트 요청 => 백엔드 소통 진행중
  // useEffect(() => {
  //   if (routeData.length > 0) {
  //     axios
  //       .get("/map-direction/v1", {
  //         params: {
  //           start: `${routeData[0].lat},${routeData[0].lng}`,
  //           goal: routeData
  //             .slice(1)
  //             .map((data) => `${data.lat},${data.lng}`)
  //             .join(":"),
  //         },
  //         headers: {
  //           "x-ncp-apigw-api-key-id": "<%= naverMapId %>",
  //           "x-ncp-apigw-api-key": "<%= naverMapSecret %>",
  //         },
  //       })
  //       .then((response) => {
  //         console.log("데이터", response);
  //       })
  //       .catch((error) => console.log("Error", error));
  //   }
  // }, [routeData]);

  // marker + polyline
  useEffect(() => {
    if (mapRef.current) {
      markersRef.current.forEach((marker) => marker.setMap(null));
      markersRef.current = [];

      if (polylineRef.current) {
        polylineRef.current.setMap(null);
        polylineRef.current = null;
      }

      if (routeData.length > 0) {
        routeData.forEach((route, index) => {
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(route.lat, route.lng),
            map: mapRef.current,
            icon: {
              url: `/images/Map/Markers/marker${index + 1}_${activeRoute === index ? "on" : "off"}.svg`,
              anchor: activeRoute === index ? new naver.maps.Point(26, 55) : new naver.maps.Point(15, 20),
            },
            zIndex: activeRoute === index ? 100 : 1,
          });

          naver.maps.Event.addListener(marker, "click", () => {
            getClickMarker(index);
          });
          markersRef.current.push(marker);
        });

        // polyline
        const path = routeData.map((route) => new naver.maps.LatLng(route.lat, route.lng));
        polylineRef.current = new naver.maps.Polyline({
          map: mapRef.current,
          path: path,
          strokeColor: theme.color.primary,
          strokeStyle: "shortdash",
          strokeWeight: 2,
        });
      }
    }
  }, [routeData, activeRoute]);

  /** 네비연동 버튼 클릭 */
  const handleNaviLinkClick = () => {
    const isAndroid = /android/i.test(navigator.userAgent);
    const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const urlString = "배포 / 사용 URL 주소";

    // 액션 경로 설정
    const actionString = routeData
      .map((element, idx) => {
        if (idx === 0) {
          return `slat=${element.lat}&slng=${element.lng}&sname=${element.title}`;
        } else if (idx === routeData.length - 1) {
          return `dlat=${element.lat}&dlng=${element.lng}&dname=${element.title}`;
        } else {
          return `v${idx}lat=${element.lat}&v${idx}lng=${element.lng}&v${idx}name=${element.title}`;
        }
      })
      .join("&");

    if (isAndroid) {
      // 안드로이드 테스트 필요
      location.href = `intent://route/car?${actionString}&appname=${urlString}#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end`;
    } else if (isiOS) {
      const clickedAt = +new Date();

      location.href = `nmap://route/car?${actionString}&appname=${urlString}`;

      setTimeout(function () {
        if (+new Date() - clickedAt < 2000) {
          location.href = "http://itunes.apple.com/app/id311867728?mt=8";
        }
      }, 1500);
    }
  };

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
    if (bookmark === false) {
      setBookmark(true);
    } else {
      setBookmark(false);
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

  /** 편집 버튼 클릭 */
  const handleEditButtonClick = () => {
    if (isEditing) {
      // API 요청 후, 성공했을 경우 저장 + false처리
      // 만약 실패했을 경우? => Toast?
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  /** 루트 아이템 체크 */
  // const handleCheckChange = (id) => {
  //   // 이미 체크된 항목을 클릭했을 때 체크 해제
  //   if (checkRoutes.includes(id)) {
  //     setCheckRoutes((prev) => prev.filter((item) => item !== id));
  //     return;
  //   }

  //   setCheckRoutes((prev) => [...prev, id]);
  // };

  return (
    <>
      <TripRouteLayout>
        {isEditing && <RouteEditSection setIsEditing={setIsEditing} routeData={routeData} />}
        {isModalOpen && <Modal type="SAVE" onClick={handleModalCheck} onClose={handleCloseModal} />}
        <TripRouteContainer>
          <RouteMapSection>
            <BackNaviBtn />
            <TripRouteMapContainer ref={mapRef} id="map"></TripRouteMapContainer>
            <NavLinkButton onClick={handleNaviLinkClick}>
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
              {routeType === "CUSTOM" ? (
                <RouteSaveButton onClick={() => setIsModalOpen(true)}>
                  <img src="/images/Icon/save.svg" alt="save button" />
                </RouteSaveButton>
              ) : (
                <RouteBookmarkButton onClick={() => handleBookmarkClick(bookmark)}>
                  {bookmark ? <IcBookMarkOn /> : <IcBookMarkOff />}
                </RouteBookmarkButton>
              )}
            </BottomSheetInfoContainer>
            {routeType === "CUSTOM" && (
              <RouteEditBtnContainer>
                <RouteEditButton onClick={handleEditButtonClick} $isEditing={isEditing}>
                  {/* {isEditing ? "완료" : "편집"} */}
                  편집
                </RouteEditButton>
              </RouteEditBtnContainer>
            )}
            <BottomSheetRouteSection $routeType={routeType}>
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
                        isChecked={checkRoutes.includes(index)}
                        distance={index < distances.length ? distances[index] : null}
                        // onCheckChange={() => handleCheckChange(index)}
                        // onDragStart={(e) => handleDragStart(e, index)}
                        // onDragEnter={(e) => handleDragEnter(e, index)}
                        // onDrop={handleDrop}
                      />
                    );
                  })}
                </ul>
              </nav>
            </BottomSheetRouteSection>
          </BottomSheetMain>
        </TripRouteContainer>
      </TripRouteLayout>
      {/* {isEditing && <BottomButton>삭제하기</BottomButton>} */}
    </>
  );
};

export default TripRoutePage;

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
  height: ${(props) => (props.$routeType === "SERVICE" ? "calc(100% - 113px)" : "calc(100% - 125px)")};
  margin-top: ${(props) => (props.$routeType === "SERVICE" ? "24px" : "0")};
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
  height: 40px;
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
`;
const RouteBookmarkButton = styled.button`
  ${applyIconColors("gray1")}
  img {
    width: 100%;
    height: 100%;
  }
  width: 30px;
  height: 30px;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const RouteEditBtnContainer = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 8px 20px;
`;

const RouteEditButton = styled.button`
  ${applyFontStyles(theme.font.body3)}
  color: ${(props) => (props.$isEditing ? theme.color.primary : theme.color.gray1)};
  border: none;
  background-color: inherit;
  height: 100%;
  padding: 0 7px;
  cursor: pointer;
`;
