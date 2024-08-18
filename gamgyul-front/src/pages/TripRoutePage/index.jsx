import styled from "styled-components";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import BackNaviBtn from "../../components/common/BackNaviBtn";
import { useState } from "react";
import Modal from "../../components/common/Modal";
import { applyFontStyles } from "../../utils/fontStyles";
import { theme } from "../../style/theme";

const TripRoutePage = () => {
  const type = "USER_DEFINE"; // 사용자가 만든 경로
  //   const type = "PREDEFINE"; // 기존 제공 경로
  const [bookmark, setBookmark] = useState("off");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <div>map api 들어갈 곳</div>
          <NavLinkButton>
            <img src="/images/Icon/delete.svg" alt="" />
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
                <img src="/images/Icon/delete.svg" alt="" />
                <span>저장하기</span>
              </RouteSaveButton>
            ) : (
              <RouteBookmarkButton>
                <img
                  src={`/images/Icon/bookmark_${bookmark}.svg`}
                  alt="북마크버튼"
                  onClick={() => handleBookmarkClick(bookmark)}
                />
              </RouteBookmarkButton>
            )}
          </BottomSheetInfoContainer>
          <section>
            <div>경로 컴포넌트</div>
            <div>경로 컴포넌트</div>
            <div>경로 컴포넌트</div>
            <div>경로 컴포넌트</div>
          </section>
        </BottomSheetMain>
      </TripRouteContainer>
    </TripRouteLayout>
  );
};

const TripRouteLayout = styled(BasicLayout)`
  padding: 0;
  height: 100vh;
`;

const TripRouteContainer = styled.div``;

/** Route 페이지의 상단 (Map API 들어가는 부분) */
const RouteMapSection = styled.section`
  width: 100%;
  height: 360px;
  position: relative;
  background-color: green;
`;

/** Route 페이지 하단시트 (경로) */
const BottomSheetMain = styled.main`
  background-color: red;
  height: calc(100vh - 360px);
  border-radius: 30px 30px 0px 0px;
`;

/** 하단시트 정보 (header + 버튼) */
const BottomSheetInfoContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  header > h2 {
    ${applyFontStyles(theme.font.subtitle)}
    margin-bottom: 4px;
  }
  header > p {
    ${applyFontStyles(theme.font.body3)}
    color: ${theme.color.gray1};
  }
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
  bottom: 16px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margint-right: 4px;
  }
  span {
    ${applyFontStyles(theme.font.caption1)}
    color: ${theme.color.gray1};
  }
`;

/** 경로 저장 버튼 */
const RouteSaveButton = styled.button`
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
const RouteBookmarkButton = styled.button``;

export default TripRoutePage;
