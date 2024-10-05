import styled from "styled-components";
import { HOME_PAGE_TEXT } from "../../constants/String";
import { theme } from "../../style/theme";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import { Link, useNavigate } from "react-router-dom";
import { applyFontStyles } from "../../utils/fontStyles";
import NavigationBar from "../../components/common/NavigationBar";
import { useEffect, useState } from "react";
import { shuffleArray } from "../../utils/shuffleArray";

const HomePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [shuffledRoutes, setShuffledRoutes] = useState([]);

  // 예시 작업 (이후에 상태관리 or 로컬스토리지 저장으로 변경)
  // const language = window.localStorage.getItem("lanType");
  const language = "KR";
  const text = HOME_PAGE_TEXT[language];

  useEffect(() => {
    // API 요청 + data 세팅 (현재 임시 데이터)
    const fetchData = async () => {
      try {
        // const response = await fetch("API_URL");
        setData({
          REGION_ATRCT: [
            {
              name: "여행루트이름1",
              img: "이미지URL1",
            },
            {
              name: "여행루트이름2",
              img: "이미지URL2",
            },
            {
              name: "여행루트이름3",
              img: "이미지URL3",
            },
            {
              name: "여행루트이름4",
              img: "이미지URL4",
            },
          ],
          FOLKTALE_ROUTE: [
            {
              name: "여행루트이름1",
              img: "이미지URL1",
            },
            {
              name: "여행루트이름2",
              img: "이미지URL2",
            },
            {
              name: "여행루트이름3",
              img: "이미지URL3",
            },
            {
              name: "여행루트이름4",
              img: "이미지URL4",
            },
            {
              name: "여행루트이름5",
              img: "이미지URL5",
            },
            {
              name: "여행루트이름6",
              img: "이미지URL6",
            },
            {
              name: "여행루트이름7",
              img: "이미지URL7",
            },
            {
              name: "여행루트이름8",
              img: "이미지URL8",
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.FOLKTALE_ROUTE && data.FOLKTALE_ROUTE.length > 0) {
      const shuffled = shuffleArray(data.FOLKTALE_ROUTE).slice(0, 6);
      setShuffledRoutes(shuffled);
    }
  }, [data]);

  /** 루트 & 관광지 리스트 클릭 */
  const handleListClick = (props) => {
    // props -> [데이터, 타입(ROUTE, ATRCT)] (타입에 따라 넘어가는 페이지가 다름)
    const [data, type] = props;
    console.log(data);
    if (type === "ATRCT") {
      navigate(`/attractions/${data.id}`);
    } else if (type === "ROUTE") {
      console.log("루트로 이동할 예정입니다.");
    }
  };

  /** 설화 여행 루트 새로고침 버튼 클릭 */
  const handleRefreshClick = () => {
    const shuffled = shuffleArray(data.FOLKTALE_ROUTE).slice(0, 6);
    setShuffledRoutes(shuffled);
  };

  return (
    <>
      <BasicLayout>
        {/* 홈페이지의 상단 이미지 + 소개 내용 */}
        <StyledHomeHeader>
          <img src="" alt="" />
          <Container>
            <div>
              <p>{text.HEADER_MAIN}</p>
              <p>{text.HEADER_SUB}</p>
            </div>
          </Container>
        </StyledHomeHeader>
        {/* 카테고리별 라우팅 (다른 페이지로 이동) */}
        <Container>
          <StyledThemeAtrct>
            <StyledCategoryName>{text.THEME_ATRCT}</StyledCategoryName>
            <nav>
              <ul>
                <li onClick={() => handleListClick([{ id: "seolmundae", name: "SEOLMUNDAE" }, "ATRCT"])}>
                  <img src="" alt="" />
                  <p>{text.CATEGORY_SEOLMUNDAE}</p>
                </li>
                <li onClick={() => handleListClick([{ id: "love", name: "LOVE" }, "ATRCT"])}>
                  <img src="" alt="" />
                  <p>{text.CATEGORY_LOVE}</p>
                </li>
                <li onClick={() => handleListClick([{ id: "history", name: "HISTORY" }, "ATRCT"])}>
                  <img src="" alt="" />
                  <p>{text.CATEGORY_HISTORY}</p>
                </li>
                <li onClick={() => handleListClick([{ id: "myth", name: "MYTH" }, "ATRCT"])}>
                  <img src="" alt="" />
                  <p>{text.CATEGORY_MYTH}</p>
                </li>
              </ul>
            </nav>
          </StyledThemeAtrct>
        </Container>
        {/* 공통 컴포넌트 분리 -> 이후 정리 */}
        {/* 카테고리별 라우팅2 (다른 페이지로 이동) */}
        <StyledRouteAtrct>
          <StyledFolktaleContainer>
            <StyledCategoryName>{text.FOLKTALE_ROUTE}</StyledCategoryName>
            <StyledRefreshButton aria-label="새로고침" onClick={handleRefreshClick}>
              {text.REFRESH_BUTTON}
              <img src="/images/Icon/check_on.svg" alt="refresh icon" />
            </StyledRefreshButton>
          </StyledFolktaleContainer>
          <nav>
            <ul>
              {shuffledRoutes.map((element, index) => {
                return (
                  <RouterLiItem
                    key={`folktale-${index}`}
                    data={element}
                    onClick={() => handleListClick([element, "ROUTE"])}
                  />
                );
              })}
            </ul>
          </nav>
        </StyledRouteAtrct>
        {/* 위와 같은 카테고리별 라우팅2 */}
        <StyledRouteAtrct>
          <StyledCategoryName>{text.REGION_ATRCT}</StyledCategoryName>
          <nav>
            <ul>
              {data.REGION_ATRCT &&
                data.REGION_ATRCT.length > 0 &&
                data.REGION_ATRCT.map((element, index) => {
                  return (
                    <RouterLiItem
                      key={`region-${index}`}
                      data={element}
                      onClick={() => handleListClick([element, "ATRCT"])}
                    />
                  );
                })}
            </ul>
          </nav>
        </StyledRouteAtrct>
        <NavigationBar />
      </BasicLayout>
    </>
  );
};

export default HomePage;

/** 각 라우터별 li 아이템 컴포넌트 (분리 필요) */
const RouterLiItem = ({ onClick, data }) => {
  return (
    <StyledLiRouter onClick={onClick}>
      <img src="" alt={data.img} />
      <p>{data.name}</p>
    </StyledLiRouter>
  );
};

/** 임시 카테고리 li태그 스타일링 (추후 컴포넌트화 예정) */
const StyledLiRouter = styled.li`
  width: 150px;
  height: 216px;
  border-radius: 24px;
  background-color: ${theme.color.sub2};
  flex: 0 0 auto;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 150px;
    height: 150px;
    display: block;
    object-fit: cover;
    background-color: black;
  }

  p {
    ${applyFontStyles(theme.font.body2)}
    color: ${theme.color.black};
    width: calc(100% - 20px);
    height: calc(100% - 168px);
    padding: 9px 10px;
  }
`;

const StyledHomeHeader = styled.header`
  width: 100%;
  height: 375px;
  position: relative;
  background-color: #dfefc6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div {
    width: calc(100% - 40px);
    position: absolute;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
  div > p:first-child {
    ${applyFontStyles(theme.font.header)}
    color: ${theme.color.black};
    white-space: pre-line;
  }
  div > p:nth-child(2) {
    ${applyFontStyles(theme.font.body3)}
    color: ${theme.color.gray1};
    margin-top: 8px;
  }
`;

/** FOLKTALE_ROUTE, REGION_ATRCT Wrapper */
const StyledRouteAtrct = styled.section`
  width: 100%;
  margin-top: 40px;

  h2 {
    margin-left: 20px;
  }

  nav {
    width: 100%;
    margin-top: 10px;
  }

  ul {
    width: 100%;
    overflow-x: auto;
    display: flex;
    gap: 16px;
  }
  ul > li:first-child {
    margin-left: 20px;
  }
  ul > li:last-child {
    margin-right: 20px;
  }
`;

/** THEME_ATRCT Wrapper (h2 제외 따로 컴포넌트화 X) */
const StyledThemeAtrct = styled.section`
  width: 100%;
  margin-top: 30px;

  nav {
    width: 100%;
    margin-top: 16px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }

  li {
    width: calc(50% - 7.5px);
    height: 95px;
    border-radius: 24px;
    background-color: black;
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }

  li p {
    ${applyFontStyles(theme.font.body2)}
    color: ${theme.color.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  li img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const StyledCategoryName = styled.h2`
  ${applyFontStyles(theme.font.body1)}
`;

const StyledRefreshButton = styled.button`
  ${applyFontStyles(theme.font.body3)}
  color: ${theme.color.gray1};
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  margin-right: 20px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-left: 4px;
  }
`;

const StyledFolktaleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
