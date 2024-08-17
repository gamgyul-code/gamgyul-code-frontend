import styled from "styled-components";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import BackNaviBtn from "../../components/common/BackNaviBtn";
import { useState } from "react";

const TripRoutePage = () => {
  const type = "USER_DEFINE"; // 사용자가 만든 경로
  //   const type = "PREDEFINE"; // 기존 제공 경로
  const [bookmark, setBookmark] = useState("off");

  /** 북마크 버튼 클릭 => 이후 api 요청 추가 */
  const handleBookmarkClick = (bookmark) => {
    if (bookmark === "off") {
      setBookmark("on");
    } else {
      setBookmark("off");
    }
  };
  return (
    <TripRouteLayout>
      <TripRouteContainer>
        <RouteMapSection>
          <BackNaviBtn />
          <Container>
            <div>map api 들어갈 곳</div>
            <NavLinkButton>
              <img src="/images/Icon/delete.svg" alt="" />
              <span>네비연동</span>
            </NavLinkButton>
          </Container>
        </RouteMapSection>
        <BottomSheetMain>
          <section>
            <header>
              <h2>추천 경로</h2>
              <p>선택한 장소를 바탕으로 생성한 경로입니다.</p>
            </header>
            {type === "USER_DEFINE" ? (
              <RouteSaveButton>
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
          </section>
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
`;

/** Route 페이지 하단시트 (경로) */
const BottomSheetMain = styled.main``;

const NavLinkButton = styled.button``;
const RouteSaveButton = styled.button``;
const RouteBookmarkButton = styled.button``;

export default TripRoutePage;
