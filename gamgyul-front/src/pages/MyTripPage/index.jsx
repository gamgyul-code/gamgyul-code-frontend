import { useState } from "react";
import AttractionItem from "../../components/common/AttractionItem";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import styled from "styled-components";
import { applyFontStyles } from "../../utils/fontStyles";
import { theme } from "../../style/theme";
import { TabButton } from "../../components/common/Button/TabButton.style";
import Button from "../../components/common/Button";
import NavigationBar from "../../components/common/NavigationBar";

const MyTripPage = () => {
  const [activeTab, setActiveTab] = useState("places");
  return (
    <MyTripLayout>
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

        <Container>
          {activeTab === "places" && (
            <StyledPlacesSection>
              <AttractionItem type="CHECK" />
              <AttractionItem type="CHECK" />
              <AttractionItem type="CHECK" />
              <AttractionItem type="CHECK" />
              <AttractionItem type="CHECK" />
              <MyTripButton isShadow={true}>내 경로 만들기</MyTripButton>
            </StyledPlacesSection>
          )}
          {activeTab === "routes" && (
            <>
              <StyledRoutesSection>
                <h3>저장한 경로</h3>
                <AttractionItem />
                <AttractionItem />
                <AttractionItem />
              </StyledRoutesSection>
              <StyledRoutesSection>
                <h3>내가 만든 경로</h3>
                <AttractionItem type="DELETE" />
                <AttractionItem type="DELETE" />
                <AttractionItem type="DELETE" />
                <AttractionItem type="DELETE" />
              </StyledRoutesSection>
            </>
          )}
        </Container>
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
  h3 {
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
