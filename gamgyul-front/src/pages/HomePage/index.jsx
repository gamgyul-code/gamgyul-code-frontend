import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { theme } from "../../style/theme";
import { applyFontStyles } from "../../utils/fontStyles";
import { shuffleArray } from "../../utils/shuffleArray";
import { HOME_PAGE_TEXT } from "../../constants/String";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import NavigationBar from "../../components/common/NavigationBar";
import { IcRefresh } from "../../assets";
import homeBanner from "../../assets/background/homeBanner.png";
import { privateApi } from "../../api/axiosInstance";
import RouterLiItem from "../../components/Home/RouterLiItem";

const HomePage = () => {
  const navigate = useNavigate();
  const [routeData, setRouteData] = useState([]);
  const [shuffledRoutes, setShuffledRoutes] = useState([]);

  // const language = window.localStorage.getItem("lanType");
  const language = "KR";
  const text = HOME_PAGE_TEXT[language];

  /** 데이터 변환 */
  const normalizeData = (data) => ({
    ...data,
    name: data.routeName || data.name,
    img: data.imgUrl || data.imgRoute,
  });

  const themeCategory = [
    { id: "halmang", imgRoute: "", textKey: "CATEGORY_SEOLMUNDAE" },
    { id: "love", imgRoute: "", textKey: "CATEGORY_LOVE" },
    { id: "history", imgRoute: "", textKey: "CATEGORY_HISTORY" },
    { id: "myth", imgRoute: "", textKey: "CATEGORY_MYTH" },
  ];

  const regionsAtrct = [
    { id: "western-jeju-city", key: "REGIONS_WESTERN_JEJU", name: "제주시 서쪽", imgRoute: "이미지URL" },
    { id: "jeju-city", key: "REGIONS_JEJU", name: "제주시", imgRoute: "이미지URL" },
    { id: "eastern-jeju-city", key: "REGIONS_EASTERN_JEJU", name: "제주시 동쪽", imgRoute: "이미지URL" },
    { id: "western-seogwipo-city", key: "REGIONS_WESTERN_SEOGWIPO", name: "서귀포시 서쪽", imgRoute: "이미지URL" },
    { id: "seogwipo-city", key: "REGIONS_SEOGWIPO", name: "서귀포시", imgRoute: "이미지URL" },
    { id: "eastern-seogwipo-city", key: "REGIONS_EASTERN_SEOGWIPO", name: "서귀포시 동쪽", imgRoute: "이미지URL" },
  ];

  useEffect(() => {
    // 임시 토큰 설정 => 머지 후 삭제 예정
    let accessToken = "token";
    let refreshToken = "token";
    window.localStorage.setItem("accessToken", accessToken);
    window.localStorage.setItem("refreshToken", refreshToken);

    let language = "kor";

    // 임시 => 머지 후 삭제 예정
    privateApi
      .get(`/members/language/${language}`)
      .then((response) => {
        console.log("language Response", response);
      })
      .catch((error) => {
        console.log("language Error", error);
      });

    switch (language) {
      case "kor":
        language = "KR";
        break;
      case "eng":
        language = "EN";
      case "chn":
        language = "CH";
      case "jpn":
        language = "JP";
    }
    window.localStorage.setItem("lanType", language);

    // 추천 경로 리스트 API 요청
    privateApi
      .get("/routes/recommend")
      .then((response) => {
        console.log("recommend route Response", response);
        // setRouteData(response.data);
        setRouteData([
          {
            id: 1,
            routeName: "여행루트이름1",
            imgUrl: "이미지URL1",
            bookmark: true,
          },
          {
            id: 2,
            routeName: "여행루트이름2",
            imgUrl: "이미지URL2",
            bookmark: true,
          },
          {
            id: 3,
            routeName: "여행루트이름3",
            imgUrl: "이미지URL3",
            bookmark: true,
          },
          {
            id: 4,
            routeName: "여행루트이름4",
            imgUrl: "이미지URL4",
            bookmark: true,
          },
          {
            id: 5,
            routeName: "여행루트이름5",
            imgUrl: "이미지URL5",
            bookmark: true,
          },
          {
            id: 6,
            routeName: "여행루트이름6",
            imgUrl: "이미지URL6",
            bookmark: true,
          },
          {
            id: 7,
            routeName: "여행루트이름7",
            imgUrl: "이미지URL7",
            bookmark: true,
          },
        ]);
      })
      .catch((error) => {
        console.log("recommend route Error", error);
      });
  }, []);

  useEffect(() => {
    if (routeData && routeData.length > 0) {
      const shuffled = shuffleArray(routeData).slice(0, 6);
      setShuffledRoutes(shuffled);
    }
  }, [routeData]);

  /** 루트 & 관광지 리스트 클릭 */
  const handleListClick = (props) => {
    // props -> [데이터, 타입(ROUTE, ATRCT)] (타입에 따라 넘어가는 페이지가 다름)
    const [data, type] = props;
    if (type === "ATRCT") {
      navigate(`/spots/${data.type}/${data.id}`, { state: { type: data.type, id: data.id } });
    } else if (type === "ROUTE") {
      // routeType => SERVICE : 서비스 제공 루트 / CUSTOM : 사용자 커스텀 루트
      navigate(`/route/recommend/${data.id}`, {
        state: { routeId: data.id, routeType: "SERVICE", bookmark: data.bookmark },
      });
    }
  };

  /** 설화 여행 루트 새로고침 버튼 클릭 */
  const handleRefreshClick = () => {
    const shuffled = shuffleArray(routeData).slice(0, 6);
    setShuffledRoutes(shuffled);
  };

  return (
    <>
      <BasicLayout>
        {/* 홈페이지의 상단 이미지 + 소개 내용 */}
        <StyledHomeHeader>
          <img src={homeBanner} alt="" />
          <div>
            <p>{text.HEADER_MAIN}</p>
            <p>{text.HEADER_SUB}</p>
          </div>
        </StyledHomeHeader>
        {/* 카테고리별 라우팅 (다른 페이지로 이동) */}
        <Container>
          <StyledThemeAtrct>
            <StyledCategoryName>{text.THEME_ATRCT}</StyledCategoryName>
            <nav>
              <ul>
                {themeCategory.map((category) => (
                  <li key={category.id} onClick={() => handleListClick([{ id: category.id, type: "tale" }, "ATRCT"])}>
                    <img src={category.imgRoute} alt="" />
                    <p>{text[category.textKey]}</p>
                  </li>
                ))}
              </ul>
            </nav>
          </StyledThemeAtrct>
        </Container>
        {/* 공통 컴포넌트 분리 -> 이후 정리 */}
        {/* 카테고리별 라우팅2 (다른 페이지로 이동) */}
        <StyledRouteAtrct>
          <StyledFolktaleContainer>
            <StyledCategoryName>{text.FOLKTALE_ROUTE}</StyledCategoryName>
            <StyledRefreshButton aria-label={text.REFRESH_BUTTON} onClick={handleRefreshClick}>
              {text.REFRESH_BUTTON}
              <IcRefresh />
            </StyledRefreshButton>
          </StyledFolktaleContainer>
          <nav>
            <ul>
              {shuffledRoutes.map(normalizeData).map((element, index) => {
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
              {regionsAtrct &&
                regionsAtrct.length > 0 &&
                regionsAtrct.map(normalizeData).map((element, index) => {
                  return (
                    <RouterLiItem
                      key={`region-${index}`}
                      data={element}
                      onClick={() => handleListClick([{ id: element.id, type: "regions" }, "ATRCT"])}
                    />
                  );
                })}
            </ul>
          </nav>
        </StyledRouteAtrct>
      </BasicLayout>
      <NavigationBar />
    </>
  );
};

export default HomePage;

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
    top: 78px;
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

  svg {
    margin-left: 4px;
  }
`;

const StyledFolktaleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
