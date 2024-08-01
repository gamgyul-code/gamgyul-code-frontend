import { useParams } from "react-router-dom";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import AttractionItem from "../../components/common/AttractionItem";
import BackNaviBtn from "../../components/common/BackNaviBtn";

const AttractionListPage = () => {
  const { id } = useParams();

  useEffect(() => {}, []);

  return (
    <BasicLayout>
      <StyledAtrctHeader>
        <BackNaviBtn />
        <img src="" alt="" />
        <Container>
          <div>
            <h2>{id}과 여행하는 제주</h2>
            <p>제주를 대표하는 과 관련된 장소를 여행해보세요.</p>
          </div>
        </Container>
      </StyledAtrctHeader>
      <Container>
        <StyledListSection>
          <ul>
            <AttractionItem />
            <AttractionItem />
            <AttractionItem />
          </ul>
        </StyledListSection>
      </Container>
    </BasicLayout>
  );
};

const StyledListSection = styled.section`
  margin-top: 10px;
`;

/** Attractions Page header styled-components */
const StyledAtrctHeader = styled.header`
  width: 100%;
  height: 355px;
  position: relative;
  background-color: #fbbdd3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div {
    width: calc(100% - 40px);
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
  div > h2 {
    font-size: ${theme.fontSize.subtitle};
    color: ${theme.color.black};
    line-height: 36px;
    font-weight: 600;
    white-space: pre-line;
  }
  div > p {
    font-size: ${theme.fontSize.body3};
    color: ${theme.color.black};
    font-weight: 400;
    margin-top: 4px;
  }
`;

export default AttractionListPage;
