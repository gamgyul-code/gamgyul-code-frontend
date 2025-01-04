import styled from "styled-components";
import { IcDownArrow, IcLeftArrow, IcUpArrow } from "../../assets";
import { Container } from "../common/BasicLayout/layout.style";
import { applyFontStyles } from "../../utils/fontStyles";
import { theme } from "../../style/theme";
import TripRouteItem from "./TripRouteItem";
import { StyledIconBtn } from "../common/Button/StyledIconBtn.style";
import Button from "../common/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../common/Modal";

const RouteEditSection = ({ setIsEditing, routeData, setRouteData }) => {
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState(0);
  const [copyRouteData, setCopyRouteData] = useState([...routeData]);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  /** 뒤로가기 (Editing False 변경) */
  const handleBackClick = () => {
    setIsEditing(false);
  };

  /** 루트 아이템 체크 */
  const handleCheckChange = (index) => {
    // 이미 체크된 항목을 클릭했을 때 체크 해제
    // if (activeRoute === index) {
    //   setActiveRoute(null);
    //   return;
    // }
    setActiveRoute(index);
  };

  /** 관광지 상세 페이지 이동 */
  const handlePlaceClick = (id) => {
    navigate(`/spots/${id}`);
  };

  /** 올리기 버튼 클릭 */
  const handleMoveUp = () => {
    if (activeRoute > 0) {
      const updateRoutes = [...copyRouteData];
      [updateRoutes[activeRoute - 1], updateRoutes[activeRoute]] = [
        updateRoutes[activeRoute],
        updateRoutes[activeRoute - 1],
      ];
      setCopyRouteData(updateRoutes);
      setActiveRoute(activeRoute - 1);
    }
  };

  /** 내리기 버튼 클릭 */
  const handleMoveDown = () => {
    if (activeRoute < copyRouteData.length - 1) {
      const updateRoutes = [...copyRouteData];
      [updateRoutes[activeRoute], updateRoutes[activeRoute + 1]] = [
        updateRoutes[activeRoute + 1],
        updateRoutes[activeRoute],
      ];
      setCopyRouteData(updateRoutes);
      setActiveRoute(activeRoute + 1);
    }
  };

  /** 삭제하기 클릭 */
  const handleDeleteClick = () => {
    setIsDeleteModal(true);
  };

  /** 모달 확인 클릭 (삭제 확인) */
  const handleConfirmDelete = () => {
    if (copyRouteData.length > 2) {
      const updateRoutes = copyRouteData.filter((_, index) => index !== activeRoute);
      setCopyRouteData(updateRoutes);
      setActiveRoute((prev) => (prev > 0 ? prev - 1 : 0));
    }

    setIsDeleteModal(false);
  };

  /** 모달 닫기 */
  const handleCloseDeleteModal = () => {
    setIsDeleteModal(false);
  };

  /** 완료 클릭 */
  const handleCompleteClick = () => {
    setRouteData(copyRouteData);
    setIsEditing(false);
  };

  return (
    <RouteEditContainer>
      {isDeleteModal && <Modal type="ATRCT_DELETE" onClick={handleConfirmDelete} onClose={handleCloseDeleteModal} />}
      <RouteEditHeader>
        <Container>
          <StyledBackBtn onClick={handleBackClick}>
            <IcLeftArrow />
          </StyledBackBtn>
        </Container>
      </RouteEditHeader>
      <RouteEditMain>
        <Container>
          <h2>
            내가 만든 경로를
            <br />
            수정합니다.
          </h2>
        </Container>
        <ol>
          {/* 장소 묶음 */}
          {copyRouteData.map((route, index) => (
            <TripRouteItem
              key={index}
              data={route}
              onClick={() => handlePlaceClick(route.spotId)}
              isChecked={index === activeRoute}
              onCheckChange={() => handleCheckChange(index)}
              isActive={index === activeRoute}
              isEditing={true}
            />
          ))}
        </ol>
        <RouteEditFooter>
          <Container>
            <StyledLocationBtns>
              {/* 올리기 내리기 버튼 묶음 */}
              <Button disabled={activeRoute === 0} onClick={handleMoveUp} isIcon={true} color="sub4">
                올리기
                <IcUpArrow />
              </Button>
              <Button
                disabled={activeRoute === copyRouteData.length - 1}
                onClick={handleMoveDown}
                isIcon={true}
                color="sub4"
              >
                내리기
                <IcDownArrow />
              </Button>
            </StyledLocationBtns>
            <Button onClick={handleDeleteClick} disabled={copyRouteData.length < 3} color="sub2">
              삭제하기
            </Button>
            <Button onClick={handleCompleteClick}>완료</Button>
          </Container>
        </RouteEditFooter>
      </RouteEditMain>
    </RouteEditContainer>
  );
};
export default RouteEditSection;

const RouteEditContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${theme.color.background};
`;

const RouteEditHeader = styled.header`
  width: 100%;
  height: 96px;
  position: relative;
`;

const RouteEditFooter = styled.footer`
  width: ${theme.maxWidth};
  height: 232px;
  position: fixed;
  bottom: 0;
  background: linear-gradient(180deg, rgba(246, 250, 237, 0) 0.95%, #f6faed 11.14%);

  & > div > button {
    margin-top: 8px;
  }
`;

const RouteEditMain = styled.main`
  width: 100%;
  height: calc(100vh - 96px);
  padding: 24px 0 0 0;
  box-sizing: border-box;
  overflow-y: scroll;
  h2 {
    ${applyFontStyles(theme.font.subtitle)}
    white-space: pre-line;
    margin-bottom: 24px;
  }
`;

const StyledBackBtn = styled(StyledIconBtn)`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 12px;
  svg {
    width: 30px;
    height: 30px;
  }
`;

const StyledLocationBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  button {
    width: 100%;
  }
  button:first-child {
    margin-right: 8px;
  }
`;
