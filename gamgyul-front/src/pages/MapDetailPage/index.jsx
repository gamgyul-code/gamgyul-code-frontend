import styled from "styled-components";
import Button from "../../components/common/Button";
import { FormLayout, StyledBottomWrapper } from "../ThemeFormPage";
import { theme } from "../../style/theme";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { applyFontStyles } from "../../utils/fontStyles";
import TempModal from "../../components/common/TempModal";

const MapDetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mapDetailData, setMapDetailData] = useState(null);

  /** 모달 임시 클릭 (달성 조건 추가 필요) */
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  /** 모달 닫기 */
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // api 통신
    axios
      .get("https://k0bcc2aad5ee3a.user-app.krampoline.com/api/readings/intro")
      .then((response) => {
        // 요청이 성공했을 때 실행될 코드입니다.
        console.log(response);
        setMapDetailData(response.data);
        const dataId = response.data.id;
        window.localStorage.setItem("placeId", dataId);
      })
      .catch((error) => {
        // 요청이 실패했을 때 실행될 코드입니다.
        console.error("요청이 실패했습니다:", error);
      });
  }, []);

  return (
    <>
      {isModalOpen && <TempModal onClose={handleCloseModal} />}
      <StyledFormLayout>
        <StyledPictureStamp>
          <StyledLocationPicture style={{ backgroundImage: `url(${mapDetailData?.placePictureUrl})` }} />
        </StyledPictureStamp>
        <StyledContentWrapper>
          <StyledSubTitleText style={{ display: "block", marginBottom: "16px" }}>
            {mapDetailData?.name}
          </StyledSubTitleText>
          <StyledInfoItem>
            <StyledIcon src="images/Icon/location.svg" alt="위치 아이콘" />
            <StyledBody2Gray>{mapDetailData?.address}</StyledBody2Gray>
          </StyledInfoItem>
          <StyledInfoItem>
            <StyledIcon src="images/Icon/call.svg" alt="전화 아이콘" />
            <StyledBody2Gray>{mapDetailData?.phoneNumber}</StyledBody2Gray>
          </StyledInfoItem>
          <StyledInfoItem>
            <StyledIcon src="images/Icon/alarm.svg" alt="시간 아이콘" />
            <StyledBody2Gray>{mapDetailData?.time}</StyledBody2Gray>
          </StyledInfoItem>
          <StyledInfoItem>
            <StyledIcon src="images/Icon/money.svg" alt="이용료 아이콘" />
            <StyledBody2Gray>{mapDetailData?.fee}</StyledBody2Gray>
          </StyledInfoItem>
          <StyledHrTag />
          <StyledDetailWrap>
            <StyledBody2Primary>Korean traditional stories</StyledBody2Primary>
            <StyledDetailText>{mapDetailData?.tale}</StyledDetailText>
          </StyledDetailWrap>
          <StyledHrTag />
          <StyledDetailWrap>
            <StyledBody2Primary>history</StyledBody2Primary>
            <StyledDetailText>{mapDetailData?.history}</StyledDetailText>
          </StyledDetailWrap>
          <StyledHrTag />
          <StyledDetailWrap>
            <StyledBody2Primary>terrain</StyledBody2Primary>
            <StyledDetailText>{mapDetailData?.terrain}</StyledDetailText>
          </StyledDetailWrap>
          <StyledHrTag />
          <StyledDetailWrap>
            <StyledBody2Primary>caution</StyledBody2Primary>
            <StyledDetailText>{mapDetailData?.caution}</StyledDetailText>
          </StyledDetailWrap>
          <StyledBtnWrapper>
            <Link to="/map">
              <Button>View nearby travel destinations</Button>
            </Link>
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
  ${applyFontStyles(theme.font.body2)}
`;

/** body2 gray 텍스트 스타일링 */
export const StyledBody2Gray = styled(StyledBody2Text)`
  color: ${theme.color.grayscale_73};
`;

/** 구분선 스타일링 */
export const StyledHrTag = styled.hr`
  border: 0px;
  border-top: 10x solid ${theme.color.grayscale_F8};
  margin: 32px 0;
`;

/** 설화 텍스트 박스 스타일링 */
export const StyledDetailText = styled(StyledBody2Text)`
  width: 100%;
  line-height: 36px;
  text-align: left;
`;

/** 스크롤 필요한 FormLayout 스타일링 */
const StyledFormLayout = styled(FormLayout)`
  overflow-y: scroll;
`;

/** 스크롤 필요한 ButtonWrapper 스타일링 */
export const StyledBtnWrapper = styled(StyledBottomWrapper)`
  position: fixed;
  width: 353px;
  margin: 0 auto;
`;

/** 장소 사진 이미지 스타일링 */
const StyledLocationPicture = styled.div`
  width: 100%;
  height: 375px;
  background-color: #ccc;
  position: absolute;
  top: 0;
  left: 0;
`;

/** 장소 스탬프 이미지 스타일링 */
const StyledLocationStamp = styled.div`
  width: 86px;
  height: 86px;
  background-color: blue;
  position: absolute;
  top: 269px;
  right: 20px;
  border-radius: 50%;
`;

/** 장소 스탬프+이미지 wrapper */
const StyledPictureStamp = styled.div`
  width: 100%;
  height: 375px
  position: relative;
`;

/** 콘텐츠 wrapper */
const StyledContentWrapper = styled.div`
  margin-top: 407px;
  padding-bottom: 100px;
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

const StyledBody2Primary = styled(StyledBody2Gray)`
  color: ${theme.color.primary};
`;

/** 아이콘 스타일링 */
const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default MapDetailPage;
