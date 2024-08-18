import { useParams } from "react-router-dom";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import AttractionItem from "../../components/common/AttractionItem";
import BackNaviBtn from "../../components/common/BackNaviBtn";
import { applyFontStyles } from "../../utils/fontStyles";

const AttractionListPage = () => {
  const { id } = useParams();

  useEffect(() => {}, []);

  return (
    <BasicLayout>
      <AttractionListContainer>
        <StyledAtrctHeader>
          <BackNaviBtn />
          <img src="" alt="" />
          <Container>
            <h2>{id}과 여행하는 제주</h2>
            <p>제주를 대표하는 과 관련된 장소를 여행해보세요.</p>
          </Container>
        </StyledAtrctHeader>
        <StyledListSection>
          <ul>
            {/* {data.map((element, index) => {
              return <AttractionItem />;
            })} */}

            <AttractionItem />
            <AttractionItem />
            <AttractionItem />
          </ul>
        </StyledListSection>
      </AttractionListContainer>
    </BasicLayout>
  );
};

const AttractionListContainer = styled.div``;

const StyledListSection = styled.section`
  margin-top: 10px;
`;

/** Attractions Page header styled-components */
const StyledAtrctHeader = styled.header`
  width: 100%;
  height: 355px;
  position: relative;
  background-color: #fbbdd3;

  & > img {
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
    ${applyFontStyles(theme.font.subtitle)}
    color: ${theme.color.black};
    white-space: pre-line;
  }
  div > p {
    ${applyFontStyles(theme.font.body3)}
    color: ${theme.color.black};
    margin-top: 4px;
  }
`;

export default AttractionListPage;
