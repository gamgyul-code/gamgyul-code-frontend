import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IcBookMarkOff, IcBookMarkOn, IcCall, IcPlace, IcTime, IcUserFee, NaviButton } from "../../assets";
import { TabButton } from "../../components/common/Button/TabButton.style";
import { theme } from "../../style/theme";
import { applyFontStyles } from "../../utils/fontStyles";

const MapDetailPage = () => {
  const [mapDetailData, setMapDetailData] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("tale");

  // 북마크
  const handleIconClick = () => {
    setIsSaved(!isSaved);
  };

  useEffect(() => {
    // api 통신
    axios
      .get("https://k0bcc2aad5ee3a.user-app.krampoline.com/api/readings/intro")
      .then((response) => {
        // 요청이 성공했을 때 실행될 코드입니다.

        setMapDetailData(response.data);
        const dataId = response.data.id;
        window.localStorage.setItem("placeId", dataId);
      })
      .catch((error) => {
        // 요청이 실패했을 때 실행될 코드입니다.
        console.error("요청이 실패했습니다:", error);
      });
  }, []);

  // 더미 데이터
  const dummyData = {
    tale: "(서울=연합뉴스) 양정우 기자 = 행정안전부가 대통령실에서 회신받아 11일 공개한 '비상계엄 선포 관련 국무회의 회의록' 관련 자료를 보면 당시 국무회의가 최소한의 요건만 갖춘 채 '날림'으로 진행된 게 아니냐는 추측을 가능케 한다.ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    myth: "이 장소는 역사를 간직한 장소로, 18세기에 발견되었습니다.",
    topography: "이곳은 평야와 산맥이 어우러진 지형입니다.",
    caution: "출입 시 안전 장비를 착용하시고, 낙석에 유의하세요.",
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "tale":
        return <StyledDetailText>{dummyData.tale}</StyledDetailText>;
      case "myth":
        return <StyledDetailText>{dummyData.myth}</StyledDetailText>;
      case "topography":
        return <StyledDetailText>{dummyData.topography}</StyledDetailText>;
      case "caution":
        return <StyledDetailText>{dummyData.caution}</StyledDetailText>;
      default:
        return null;
    }
  };

  // map api
  const handleClickNavi = () => {
    const isAndroid = /android/i.test(navigator.userAgent);
    const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const urlString = "myapp";
    const routeData = [
      { lat: 33.4995, lng: 126.5388, title: "출발지" },
      { lat: 33.4995, lng: 126.5388, title: "목적지" },
    ];

    const actionString = routeData
      .map((element, idx) => {
        if (idx === 0) {
          return `slat=${element.lat}&slng=${element.lng}&sname=${encodeURIComponent(element.title)}`;
        } else if (idx === routeData.length - 1) {
          return `dlat=${element.lat}&dlng=${element.lng}&dname=${encodeURIComponent(element.title)}`;
        } else {
          return `v${idx}lat=${element.lat}&v${idx}lng=${element.lng}&v${idx}name=${encodeURIComponent(element.title)}`;
        }
      })
      .join("&");

    console.log("Action String:", actionString);

    if (isAndroid) {
      console.log("Android 환경");
      location.href = `intent://route/car?${actionString}&appname=${urlString}#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end`;
    } else if (isiOS) {
      console.log("iOS 환경");
      const clickedAt = +new Date();
      location.href = `nmap://route/car?${actionString}&appname=${urlString}`;

      setTimeout(() => {
        if (+new Date() - clickedAt < 2000) {
          location.href = "http://m.androidapp.naver.com/naverapp"; // 네이버 지도 iOS 앱 링크
        }
      }, 1500);
    } else {
      alert("이 디바이스에서는 네이버 지도 앱이 지원되지 않습니다.");
    }
  };

  return (
    <>
      <StyledFormLayout>
        <StyledPictureStamp>
          <StyledLocationPicture style={{ backgroundImage: `url(${mapDetailData?.placePictureUrl})` }} />
        </StyledPictureStamp>
        <StyledContentWrapper>
          <StyledContentTop>
            <StyledMapItem>
              <StyledSubTitleText style={{ display: "block" }}>{mapDetailData?.name}</StyledSubTitleText>
              <span onClick={handleIconClick}>{isSaved ? <IcBookMarkOn /> : <IcBookMarkOff />}</span>
            </StyledMapItem>
            <StyledInfoItem>
              <IcPlace />
              <StyledBody2Gray>{mapDetailData?.address}</StyledBody2Gray>
            </StyledInfoItem>
            <StyledInfoItem>
              <IcCall />
              <StyledBody2Gray>{mapDetailData?.phoneNumber}</StyledBody2Gray>
            </StyledInfoItem>
            <StyledInfoItem>
              <IcTime />
              <StyledBody2Gray>
                {mapDetailData?.time}/{mapDetailData?.time}
              </StyledBody2Gray>
            </StyledInfoItem>
            <StyledInfoItem>
              <IcUserFee />
              <StyledBody2Gray>{mapDetailData?.fee}</StyledBody2Gray>
            </StyledInfoItem>
          </StyledContentTop>
          <nav aria-label="내 여행 (장소 / 경로)">
            <TabButton
              onClick={() => setActiveTab("tale")}
              $isActive={activeTab === "tale"}
              fontSize={theme.font.body1}
              btnCnt={4}
            >
              설화
            </TabButton>
            <TabButton
              onClick={() => setActiveTab("myth")}
              $isActive={activeTab === "myth"}
              fontSize={theme.font.body1}
              btnCnt={4}
            >
              역사
            </TabButton>
            <TabButton
              onClick={() => setActiveTab("topography")}
              $isActive={activeTab === "topography"}
              fontSize={theme.font.body1}
              btnCnt={4}
            >
              지형
            </TabButton>
            <TabButton
              onClick={() => setActiveTab("caution")}
              $isActive={activeTab === "caution"}
              fontSize={theme.font.body1}
              btnCnt={4}
            >
              주의사항
            </TabButton>
          </nav>
          <InfoContainer>
            <StyledDetailWrap>
              <StyledDetailText> {renderTabContent()}</StyledDetailText>
            </StyledDetailWrap>
          </InfoContainer>
          <StyledBtnWrapper onClick={handleClickNavi}>
            <NaviButton />
          </StyledBtnWrapper>
        </StyledContentWrapper>
      </StyledFormLayout>
    </>
  );
};

/** SubTitle 텍스트 스타일링 */
export const StyledSubTitleText = styled.span`
  ${applyFontStyles(theme.font.subtitle)}
`;

/** body2 텍스트 스타일링 */
export const StyledBody2Text = styled.span`
  color: ${theme.color.black};
  ${applyFontStyles(theme.font.body4)}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  width: 250px;
`;

/** body2 gray 텍스트 스타일링 */
export const StyledBody2Gray = styled(StyledBody2Text)`
  color: ${theme.color.gray1};
  ${applyFontStyles(theme.font.body3)}
`;

/** 구분선 스타일링 */
export const StyledHrTag = styled.hr`
  border: 0px;

  margin: 32px 0;
`;

/** 설화 텍스트 박스 스타일링 */
export const StyledDetailText = styled(StyledBody2Text)`
  width: 100%;
  line-height: 1.5; /* 줄 간격 */
  text-align: left;
  white-space: normal; /* 자동 줄바꿈 허용 */
  word-wrap: break-word; /* 긴 단어 줄바꿈 */
  word-break: break-word; /* 단어 단위로 줄바꿈 */
`;

const StyledContentTop = styled.section`
  padding: 16px 20px;
`;

/** 스크롤 필요한 FormLayout 스타일링 */
const StyledFormLayout = styled.article`
  overflow-y: scroll;
  background-color: ${theme.color.white};

  height: 100vh;
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  position: relative; /* 자식의 absolute 위치 기준 */
`;

/** 스크롤 필요한 ButtonWrapper 스타일링 */
export const StyledBtnWrapper = styled.button`
  border: 0;
  background-color: transparent;
  position: absolute;
  right: 20px;
`;

/** 장소 사진 이미지 스타일링 */
const StyledLocationPicture = styled.div`
  width: 100%;
  height: 288px;
  background-color: #ccc;

  background-repeat: no-repeat;
`;

const StyledMapItem = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
  align-items: center;
`;

/** 장소 스탬프+이미지 wrapper */
const StyledPictureStamp = styled.div`
  width: 100%;
`;

/** 콘텐츠 wrapper */
const InfoContainer = styled.div`
  padding: 24px 20px;
`;

const StyledContentWrapper = styled.div`
  padding-bottom: 50px;
`;

const StyledDetailWrap = styled.div`
  display: flex;
  flex-direction: column;

  *:nth-child(1) {
    margin-bottom: 10px;
  }
`;

const StyledInfoItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  *:nth-child(2) {
    margin-left: 16px;
  }
`;

export default MapDetailPage;
