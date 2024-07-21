import { HOME_PAGE_TEXT } from "../../constants/String";

const HomePage = () => {
  // 예시 작업 (이후에 상태관리 or 로컬스토리지 저장으로 변경)
  // const language = window.localStorage.getItem("lanType");
  const language = "KR";
  const text = HOME_PAGE_TEXT[language];

  return (
    <>
      {/* 홈페이지의 상단 이미지 + 소개 내용 */}
      <header>
        <img src="" />
        <p>{text.HEADER_MAIN}</p>
        <p>재미있고 신비로운 제주의 설화가 담긴 장소를 소개합니다.</p>
      </header>

      {/* 카테고리별 라우팅 (다른 페이지로 이동) */}
      <section>
        <h2>테마별 설화 관광지</h2>
        <nav>
          <ul>
            <li>설문대 할망</li>
            <li>사랑</li>
            <li>역사</li>
            <li>신화</li>
          </ul>
        </nav>
      </section>

      {/* 공통 컴포넌트 분리 -> 이후 정리 */}
      {/* 카테고리별 라우팅2 (다른 페이지로 이동) */}
      <section>
        <h2>설화 여행 루트</h2>
        <nav>
          <ul>
            <li>여행루트이름1</li>
            <li>여행루트이름2</li>
            <li>여행루트이름3</li>
            <li>여행루트이름4</li>
          </ul>
        </nav>
      </section>
      {/* 위와 같은 카테고리별 라우팅2 */}
      <section>
        <h2>설화 여행 루트</h2>
        <nav>
          <ul>
            <li>여행루트이름1</li>
            <li>여행루트이름2</li>
            <li>여행루트이름3</li>
            <li>여행루트이름4</li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default HomePage;
