import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AttractionItem from "../../components/common/AttractionItem";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import { applyFontStyles } from "../../utils/fontStyles";
import { theme } from "../../style/theme";
import { TabButton } from "../../components/common/Button/TabButton.style";
import Button from "../../components/common/Button";
import NavigationBar from "../../components/common/NavigationBar";
import Modal from "../../components/common/Modal";
import Toast from "../../components/common/Toast";
import { MY_TRIP_PAGE_TEXT } from "../../constants/String";
import { privateApi } from "../../api/axiosInstance";

const MyTripPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("places");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [checkRoutes, setCheckRoutes] = useState([]);

  const [bookmarkedSpots, setBookmarkedSpots] = useState([]);
  const [bookmarkedRoutes, setBookmarkedRoutes] = useState([]);
  const [savedRoutes, setSavedRoutes] = useState([]);

  // const language = window.localStorage.getItem("lanType");
  const language = "KR";
  const text = MY_TRIP_PAGE_TEXT[language];

  /** 데이터 변환 */
  const normalizeData = (data) => ({
    ...data,
    id: data.id || data.spotId,
    name: data.routeName || data.name,
    bookmarked: data.bookmark || data.bookmarked,
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get("tab");
    tab === "routes" && setActiveTab("routes");
  }, [location.search]);

  // 북마크한 장소
  useEffect(() => {
    privateApi
      .get("/spots/bookmarks")
      .then((response) => {
        console.log("Spot bookmarks Response", response.data);
        // setBookmarkedSpots(response.data);
        setBookmarkedSpots([
          {
            spotTranslationId: 1,
            spotId: 1,
            name: "성산일출봉",
            imgUrl: "http://~~~.com/~~~.jpg",
            simpleExplanation: "설문대할망이 태어난 장소",
            bookmarked: true,
            spotCategories: "HISTORY, LOVE",
          },
          {
            spotTranslationId: 2,
            spotId: 2,
            name: "성산일출봉",
            imgUrl: "http://~~~.com/~~~.jpg",
            simpleExplanation: "설문대할망이 태어난 장소",
            bookmarked: true,
            spotCategories: "HISTORY, LOVE",
          },
          {
            spotTranslationId: 3,
            spotId: 3,
            name: "성산일출봉",
            imgUrl: "http://~~~.com/~~~.jpg",
            simpleExplanation: "설문대할망이 태어난 장소",
            bookmarked: true,
            spotCategories: "HISTORY, LOVE",
          },
        ]);
      })
      .catch((error) => {
        console.log("Spot bookmarks Error", error);
      });
  }, []);

  // 북마크한 경로
  useEffect(() => {
    privateApi
      .get("/bookmarks/recommend-routes")
      .then((response) => {
        console.log("recommend-routes Response", response.data);
        // setBookmarkedRoutes(response.data);
        setBookmarkedRoutes([
          {
            id: 1,
            routeName: "나의 경로",
            imgUrl: "http://~~~.com/~~~.jpg",
            bookmark: true,
          },
          {
            id: 2,
            routeName: "나의 경로",
            imgUrl: "http://~~~.com/~~~.jpg",
            bookmark: true,
          },
          {
            id: 3,
            routeName: "나의 경로",
            imgUrl: "http://~~~.com/~~~.jpg",
            bookmark: true,
          },
        ]);
      })
      .catch((error) => {
        console.log("recommend-routes Error", error);
      });
  }, []);

  // 저장한 (내)경로
  useEffect(() => {
    privateApi
      .get("/routes")
      .then((response) => {
        console.log("my routes Response", response.data);
        // setSavedRoutes(response.data);
        setSavedRoutes([
          {
            id: 1,
            routeName: "나의 경로",
            imgUrl: "http://~~~.com/~~~.jpg",
            bookmark: true,
          },
          {
            id: 2,
            routeName: "나의 경로",
            imgUrl: "http://~~~.com/~~~.jpg",
            bookmark: true,
          },
          {
            id: 3,
            routeName: "나의 경로",
            imgUrl: "http://~~~.com/~~~.jpg",
            bookmark: true,
          },
        ]);
      })
      .catch((error) => {
        console.log("my routes Error", error);
      });
  }, []);

  /** 루트 아이템 체크 */
  const handleCheckChange = (id) => {
    // 객체 형태로 루트 데이터 담아야 함
    // 이미 체크된 항목을 클릭했을 때 체크 해제
    if (checkRoutes.includes(id)) {
      setCheckRoutes((prev) => prev.filter((item) => item !== id));
      return;
    }

    // 지정 개수 넘길 수 없을 때 return
    if (checkRoutes.length === 6) {
      if (!isToastVisible) {
        setIsToastVisible(true);
        setTimeout(() => {
          setIsToastVisible(false);
        }, 2000);
      }
      console.log("지정 개수를 넘길 수 없어요");
      return;
    }

    setCheckRoutes((prev) => [...prev, id]);
  };

  /** 경로 만들기 버튼 클릭 */
  const handleCreateRouteClick = () => {
    console.log("내 경로 만들기 버튼 클릭");
    console.log(checkRoutes);
    const customId = 4123; // 커스텀 고유 번호 필요
    navigate(`/route/${customId}`, { state: { routeId: customId, routeType: "CUSTOM", routeData: checkRoutes } });
  };

  /** 삭제 아이콘 클릭 */
  const handleDeleteClick = () => {
    setIsModalOpen(true);
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
    <MyTripLayout>
      {isModalOpen && <Modal type="DELETE" onClick={handleModalCheck} onClose={handleCloseModal} />}
      <StyledMyTripHeader>
        <Container>
          <h2>{text.HEADER_MAIN}</h2>
        </Container>
        <nav aria-label="내 여행 (장소 / 경로)">
          <TabButton
            onClick={() => setActiveTab("places")}
            isActive={activeTab === "places"}
            fontSize={theme.font.body1}
            btnCnt={2}
          >
            {text.NAV_PLACE}
          </TabButton>
          <TabButton
            onClick={() => setActiveTab("routes")}
            isActive={activeTab === "routes"}
            fontSize={theme.font.body1}
            btnCnt={2}
          >
            {text.NAV_ROUTE}
          </TabButton>
        </nav>
      </StyledMyTripHeader>
      <MyTripContainer>
        {/* API 연결 후 넘겨주는 id 변경 */}
        {activeTab === "places" && (
          <StyledPlacesSection>
            {bookmarkedSpots.map(normalizeData).map((data) => {
              return (
                <AttractionItem
                  key={data.id}
                  data={data}
                  type="CHECK"
                  isChecked={checkRoutes.includes(data.id)}
                  onCheckChange={() => handleCheckChange(data.id)}
                  checkRoutes={checkRoutes}
                  id={data.id}
                  language={language}
                />
              );
            })}

            {isToastVisible && <Toast>{text.ALERT_TOAST}</Toast>}
            {checkRoutes.length <= 1 ? (
              <MyTripButton isShadow={true} disabled={true}>
                {text.ROUTE_CREATE_BUTTON}
              </MyTripButton>
            ) : (
              <MyTripButton isShadow={true} onClick={handleCreateRouteClick}>
                {text.ROUTE_CREATE_BUTTON}
              </MyTripButton>
            )}
          </StyledPlacesSection>
        )}
        {activeTab === "routes" && (
          <>
            <StyledRoutesSection>
              <Container>
                <h3>{text.SAVED_ROUTE}</h3>
              </Container>
              {bookmarkedRoutes.map(normalizeData).map((data) => {
                return <AttractionItem key={data.id} data={data} />;
              })}
            </StyledRoutesSection>
            <StyledRoutesSection>
              <Container>
                <h3>{text.CREATED_ROUTE}</h3>
              </Container>
              {savedRoutes.map(normalizeData).map((data) => {
                return (
                  <AttractionItem
                    key={data.id}
                    data={data}
                    type="DELETE"
                    onClick={() => {
                      console.log("클릭");
                    }}
                    onDelete={handleDeleteClick}
                  />
                );
              })}
            </StyledRoutesSection>
          </>
        )}
      </MyTripContainer>

      <NavigationBar />
    </MyTripLayout>
  );
};

const MyTripContainer = styled.div`
  height: calc(100vh - 253px);
  overflow-y: scroll;
  padding: 0 0 32px 0;
  box-sizing: border-box;
`;

const StyledPlacesSection = styled.section`
  margin: 8px 0 48px 0;
`;

const StyledRoutesSection = styled.section`
  margin: 20px 0 4px 0;
  div > h3 {
    ${applyFontStyles(theme.font.body1)}
  }
`;

const StyledMyTripHeader = styled.header`
  padding-top: 54px;
  background-color: ${theme.color.background};
  h2 {
    ${applyFontStyles(theme.font.header)}
    margin: 24px 0 10px 0;
  }
`;

const MyTripLayout = styled(BasicLayout)`
  background-color: ${theme.color.white};
  position: relative;
  padding: 0;
  height: 100vh;
`;

const MyTripButton = styled(Button)`
  position: fixed;
  bottom: 99px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  max-width: calc(${theme.maxWidth} - 40px);
`;

export default MyTripPage;
