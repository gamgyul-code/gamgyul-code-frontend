import { useState } from "react";
import AttractionItem from "../../components/common/AttractionItem";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import styled from "styled-components";
import { applyFontStyles } from "../../utils/fontStyles";
import { theme } from "../../style/theme";
import { TabButton } from "../../components/common/Button/TabButton.style";

const MyTripPage = () => {
  const [activeTab, setActiveTab] = useState("places");
  return (
    <BasicLayout>
      <MyTripContainer>
        <StyledMyTripHeader>
          <Container>
            <h2>내 여행</h2>
          </Container>
          <nav aria-label="내 여행 (장소 / 경로)">
            <TabButton
              onClick={() => setActiveTab("places")}
              isActive={activeTab === "places"}
              fontSize={theme.font.body1}
              btnCnt={2}
            >
              장소
            </TabButton>
            <TabButton
              onClick={() => setActiveTab("routes")}
              isActive={activeTab === "routes"}
              fontSize={theme.font.body1}
              btnCnt={2}
            >
              경로
            </TabButton>
          </nav>
        </StyledMyTripHeader>

        <section>
          <Container>
            {activeTab === "places" && (
              <>
                <AttractionItem />
                <AttractionItem />
                <AttractionItem />
                <AttractionItem />
                <AttractionItem />
                <button>내 경로 만들기</button>
              </>
            )}
            {activeTab === "routes" && (
              <>
                <section>
                  <h3>저장한 경로</h3>
                  <AttractionItem />
                  <AttractionItem />
                  <AttractionItem />
                </section>
                <section>
                  <h3>내가 만든 경로</h3>
                  <AttractionItem />
                  <AttractionItem />
                  <AttractionItem />
                </section>
              </>
            )}
          </Container>
        </section>
      </MyTripContainer>
    </BasicLayout>
  );
};

const MyTripContainer = styled.div``;

const StyledMyTripHeader = styled.header`
  padding-top: 54px;
  h2 {
    ${applyFontStyles(theme.font.header)}
    margin: 24px 0 10px 0;
  }
`;

export default MyTripPage;
