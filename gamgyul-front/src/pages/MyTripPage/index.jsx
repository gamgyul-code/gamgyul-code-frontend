import { useState } from "react";
import AttractionItem from "../../components/common/AttractionItem";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import styled from "styled-components";

const MyTripPage = () => {
  const [activeTab, setActiveTab] = useState("places");
  return (
    <BasicLayout>
      <MyTripContainer>
        <h2>내 여행</h2>
        <nav aria-label="내 여행 (장소 / 경로)">
          <button onClick={() => setActiveTab("places")}>장소</button>
          <button onClick={() => setActiveTab("routes")}>경로</button>
        </nav>

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

export default MyTripPage;
