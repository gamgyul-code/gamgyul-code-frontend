import styled from "styled-components";
import Button from "../../components/common/Button";
import { FormLayout, StyledBottomWrapper } from "../LocationFormPage";
import { theme } from "../../style/theme";
import { useEffect, useState } from "react";
import Modal from "../../components/common/Modal";
import axios from "axios";
import { Link } from "react-router-dom";

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
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      <StyledFormLayout>
        <StyledPictureStamp>
          <StyledLocationPicture />
          <StyledLocationStamp />
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
            <StyledBody2Gray>No information</StyledBody2Gray>
          </StyledInfoItem>
          <StyledInfoItem>
            <StyledIcon src="images/Icon/alarm.svg" alt="시간 아이콘" />
            <StyledBody2Gray>No information</StyledBody2Gray>
          </StyledInfoItem>
          <StyledInfoItem>
            <StyledIcon src="images/Icon/money.svg" alt="이용료 아이콘" />
            <StyledBody2Gray>No information</StyledBody2Gray>
          </StyledInfoItem>
          <StyledHrTag />
          <StyledDetailWrap>
            <StyledBody2Primary>설화 설명</StyledBody2Primary>
            <StyledDetailText>
              한라산이라는 이름에서 한(漢)은 은하수(銀河水)를 뜻하며, 라(拏)는 맞당길나[相牽引] 혹은 잡을나[捕]로서,
              산이 높으므로 산정에 서면 은하수를 잡아당길 수 있다는 뜻이다. 예로부터 산 정상에 오르면 멀리 남쪽 하늘에
              있는 노인성(老人星)을 볼 수 있었으며, 이 별을 본 사람은 장수하였다는 전설이 있다. 진산이란 보통 도읍의
              뒤에 위치하여 그 지방을 편안하게 지켜주는 의미를 가진다. 한라산을 진산이라고 불렀던 까닭은 한반도로
              밀려오는 남태평양의 큰 바람을 한라산이 막아주어 한반도의 안녕을 지켜 주기 때문이다. 두무악이란 머리가 없는
              산을 의미하는데, 전설에 의하면 옛날에 한 사냥꾼이 산에서 사냥을 하다가 잘못하여 활끝으로 천제(天帝)의
              배꼽을 건드렸는데, 이에 화가 난 천제가 한라산 꼭대기를 뽑아 멀리 던져 버렸다고 한다. 이 산정부가 던져진
              곳은 지금의 산방산(山房山)이며, 뽑혀서 움푹 팬 곳은 백록담(白鹿潭)이 되었다고 한다. 원산이라는 이름은 산의
              중앙이 제일 높아 무지개 모양으로 둥글고, 사방 주위가 아래로 차차 낮아져 원뿔 모양을 이루기 때문에
              붙여졌다. 맑은 날 해남이나 진도에서 한라산을 바라보면 산 전체가 완만한 원뿔로 보인다. [네이버
              지식백과] 한라산 [漢拏山] (한국민족문화대백과, 한국학중앙연구원)
            </StyledDetailText>
          </StyledDetailWrap>
          <StyledHrTag />
          <StyledDetailWrap>
            <StyledBody2Primary>설화 설명</StyledBody2Primary>
            <StyledDetailText>
              한라산이라는 이름에서 한(漢)은 은하수(銀河水)를 뜻하며, 라(拏)는 맞당길나[相牽引] 혹은 잡을나[捕]로서,
              산이 높으므로 산정에 서면 은하수를 잡아당길 수 있다는 뜻이다. 예로부터 산 정상에 오르면 멀리 남쪽 하늘에
              있는 노인성(老人星)을 볼 수 있었으며, 이 별을 본 사람은 장수하였다는 전설이 있다. 진산이란 보통 도읍의
              뒤에 위치하여 그 지방을 편안하게 지켜주는 의미를 가진다. 한라산을 진산이라고 불렀던 까닭은 한반도로
              밀려오는 남태평양의 큰 바람을 한라산이 막아주어 한반도의 안녕을 지켜 주기 때문이다. 두무악이란 머리가 없는
              산을 의미하는데, 전설에 의하면 옛날에 한 사냥꾼이 산에서 사냥을 하다가 잘못하여 활끝으로 천제(天帝)의
              배꼽을 건드렸는데, 이에 화가 난 천제가 한라산 꼭대기를 뽑아 멀리 던져 버렸다고 한다. 이 산정부가 던져진
              곳은 지금의 산방산(山房山)이며, 뽑혀서 움푹 팬 곳은 백록담(白鹿潭)이 되었다고 한다. 원산이라는 이름은 산의
              중앙이 제일 높아 무지개 모양으로 둥글고, 사방 주위가 아래로 차차 낮아져 원뿔 모양을 이루기 때문에
              붙여졌다. 맑은 날 해남이나 진도에서 한라산을 바라보면 산 전체가 완만한 원뿔로 보인다. [네이버
              지식백과] 한라산 [漢拏山] (한국민족문화대백과, 한국학중앙연구원)
            </StyledDetailText>
          </StyledDetailWrap>
          <StyledHrTag />
          <StyledDetailWrap>
            <StyledBody2Primary>설화 설명</StyledBody2Primary>
            <StyledDetailText>
              한라산이라는 이름에서 한(漢)은 은하수(銀河水)를 뜻하며, 라(拏)는 맞당길나[相牽引] 혹은 잡을나[捕]로서,
              산이 높으므로 산정에 서면 은하수를 잡아당길 수 있다는 뜻이다. 예로부터 산 정상에 오르면 멀리 남쪽 하늘에
              있는 노인성(老人星)을 볼 수 있었으며, 이 별을 본 사람은 장수하였다는 전설이 있다. 진산이란 보통 도읍의
              뒤에 위치하여 그 지방을 편안하게 지켜주는 의미를 가진다. 한라산을 진산이라고 불렀던 까닭은 한반도로
              밀려오는 남태평양의 큰 바람을 한라산이 막아주어 한반도의 안녕을 지켜 주기 때문이다. 두무악이란 머리가 없는
              산을 의미하는데, 전설에 의하면 옛날에 한 사냥꾼이 산에서 사냥을 하다가 잘못하여 활끝으로 천제(天帝)의
              배꼽을 건드렸는데, 이에 화가 난 천제가 한라산 꼭대기를 뽑아 멀리 던져 버렸다고 한다. 이 산정부가 던져진
              곳은 지금의 산방산(山房山)이며, 뽑혀서 움푹 팬 곳은 백록담(白鹿潭)이 되었다고 한다. 원산이라는 이름은 산의
              중앙이 제일 높아 무지개 모양으로 둥글고, 사방 주위가 아래로 차차 낮아져 원뿔 모양을 이루기 때문에
              붙여졌다. 맑은 날 해남이나 진도에서 한라산을 바라보면 산 전체가 완만한 원뿔로 보인다. [네이버
              지식백과] 한라산 [漢拏山] (한국민족문화대백과, 한국학중앙연구원)
            </StyledDetailText>
          </StyledDetailWrap>
          <StyledBtnWrapper>
            <Link to="/map">
              <Button>View nearby travel destinations</Button>
              {/* <Button onClick={handleButtonClick}>Get a stamp</Button> */}
            </Link>
          </StyledBtnWrapper>
        </StyledContentWrapper>
      </StyledFormLayout>
    </>
  );
};

/** SubTitle 텍스트 스타일링 */
export const StyledSubTitleText = styled.span`
  font-size: ${theme.fontSize.subtitle};
`;

/** body2 텍스트 스타일링 */
export const StyledBody2Text = styled.span`
  font-size: ${theme.fontSize.body2};
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
  background-color: red;
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
