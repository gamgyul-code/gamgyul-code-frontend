import { useEffect, useState } from "react";
import AttractionItem from "../../components/common/AttractionItem";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import styled from "styled-components";
import { applyFontStyles } from "../../utils/fontStyles";
import { theme } from "../../style/theme";
import { TabButton } from "../../components/common/Button/TabButton.style";
import Button from "../../components/common/Button";
import NavigationBar from "../../components/common/NavigationBar";
import Modal from "../../components/common/Modal";
import { useLocation } from "react-router-dom";
import Toast from "../../components/common/Toast";
import { MY_TRIP_PAGE_TEXT } from "../../constants/String";

const MyTripPage = () => {
  const [activeTab, setActiveTab] = useState("places");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const [checkRoutes, setCheckRoutes] = useState([]);
  const location = useLocation();

  // const language = window.localStorage.getItem("lanType");
  const language = "KR";
  const text = MY_TRIP_PAGE_TEXT[language];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get("tab");
    tab === "routes" && setActiveTab("routes");
  }, [location.search]);

  /** 루트 아이템 체크 */
  const handleCheckChange = (id) => {
    // 이미 체크된 항목을 클릭했을 때 체크 해제
    if (checkRoutes.includes(id)) {
      setCheckRoutes((prev) => prev.filter((item) => item !== id));
      return;
    }

    // 지정 개수 넘길 수 없을 때 return
    if (checkRoutes.length === 2) {
      setIsToastVisible(true);
      setTimeout(() => {
        setIsToastVisible(false);
      }, 2000);
      console.log("지정 개수를 넘길 수 없어요");
      return;
    }

    setCheckRoutes((prev) => [...prev, id]);
  };

  /** 경로 만들기 버튼 클릭 */
  const handleCreateRouteClick = () => {
    console.log("내 경로 만들기 버튼 클릭");
    console.log(checkRoutes);
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
      <MyTripContainer>
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

        {activeTab === "places" && (
          <StyledPlacesSection>
            <AttractionItem
              type="CHECK"
              isChecked={checkRoutes.includes(1)}
              onCheckChange={() => handleCheckChange(1)}
            />
            <AttractionItem
              type="CHECK"
              isChecked={checkRoutes.includes(2)}
              onCheckChange={() => handleCheckChange(2)}
            />
            <AttractionItem
              type="CHECK"
              isChecked={checkRoutes.includes(3)}
              onCheckChange={() => handleCheckChange(3)}
            />
            <AttractionItem
              type="CHECK"
              isChecked={checkRoutes.includes(4)}
              onCheckChange={() => handleCheckChange(4)}
            />
            <AttractionItem
              type="CHECK"
              isChecked={checkRoutes.includes(5)}
              onCheckChange={() => handleCheckChange(5)}
            />

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
              <AttractionItem />
              <AttractionItem />
              <AttractionItem />
            </StyledRoutesSection>
            <StyledRoutesSection>
              <Container>
                <h3>{text.CREATED_ROUTE}</h3>
              </Container>
              <AttractionItem type="DELETE" onDelete={handleDeleteClick} />
              <AttractionItem type="DELETE" onDelete={handleDeleteClick} />
              <AttractionItem type="DELETE" onDelete={handleDeleteClick} />
              <AttractionItem type="DELETE" onDelete={handleDeleteClick} />
              <AttractionItem type="DELETE" onDelete={handleDeleteClick} />
            </StyledRoutesSection>
          </>
        )}
      </MyTripContainer>

      <NavigationBar />
    </MyTripLayout>
  );
};

const MyTripContainer = styled.div``;

const StyledPlacesSection = styled.section`
  margin: 8px 0 80px 0;
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
