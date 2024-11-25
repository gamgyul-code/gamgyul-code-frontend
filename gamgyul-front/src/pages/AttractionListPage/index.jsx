import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import styled from "styled-components";
import { theme } from "../../style/theme";
import AttractionItem from "../../components/common/AttractionItem";
import BackNaviBtn from "../../components/common/BackNaviBtn";
import { applyFontStyles } from "../../utils/fontStyles";

const AttractionListPage = () => {
  const curLocation = useLocation();
  const id = curLocation.state.id;
  const type = curLocation.state.type;
  const [data, setData] = useState([]);

  // const language = window.localStorage.getItem("lanType");
  const language = "KR";
  // const text = ATRCT_LIST_PAGE_TEXT[language];

  // API 요청
  // useEffect(() => {
  //   const token = "토큰"; // 토큰 + API 요청 interceptor 필요
  //   axios
  //     .get(`요청URL/spots/${type}/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error : ", error);
  //     });
  // }, [type, id]);

  return (
    <AttractionListLayout>
      <AttractionListContainer>
        <StyledAtrctHeader>
          <BackNaviBtn />
          <img src="" alt="" />
          <Container>
            {/* {type === "" ? <></> : <></>} */}
            <h2>{id}과 여행하는 제주</h2>
            <p>제주를 대표하는 과 관련된 장소를 여행해보세요.</p>
          </Container>
        </StyledAtrctHeader>
        <StyledListSection>
          <nav>
            <ul>
              {/* {data.map((element, index) => {
              return <AttractionItem />;
            })} */}

              <AttractionItem />
              <AttractionItem />
              <AttractionItem />
            </ul>
          </nav>
        </StyledListSection>
      </AttractionListContainer>
    </AttractionListLayout>
  );
};

const AttractionListLayout = styled(BasicLayout)`
  padding: 0 0 20px 0;
  height: calc(100vh - 20px);
`;

const AttractionListContainer = styled.div``;

const StyledListSection = styled.section`
  margin-top: 10px;
`;

/** Attractions Page header */
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
