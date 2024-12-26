import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import styled from "styled-components";
import { theme } from "../../style/theme";
import AttractionItem from "../../components/common/AttractionItem";
import BackNaviBtn from "../../components/common/BackNaviBtn";
import { applyFontStyles } from "../../utils/fontStyles";
import Modal from "../../components/common/Modal";
import { ATRCT_LIST_PAGE_TEXT } from "../../constants/String";
import { privateApi } from "../../api/axiosInstance";

const AttractionListPage = () => {
  const navigate = useNavigate();
  const curLocation = useLocation();
  const id = curLocation.state.id;
  const type = curLocation.state.type;
  const [spotData, setSpotData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const language = window.localStorage.getItem("lanType");
  const language = "KR";
  const text = ATRCT_LIST_PAGE_TEXT[language];
  const headerData =
    type === "tale"
      ? `${type}_${id}`.toUpperCase()
      : `${type}_${id
          .split("-")
          .filter((word) => word !== "city")
          .join("_")}`.toUpperCase();

  /** 모달 확인 버튼 클릭 */
  const handleModalCheck = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    privateApi
      .get(`/spots/${type}/${id}`)
      .then((response) => {
        console.log("Spot list Response", response.data);
        setSpotData(response.data);
      })
      .catch((error) => {
        console.log("Spot list Error", error);
      });
  }, []);

  const handleItemClick = (id) => {
    navigate(`/spots/${id}`);
  };

  return (
    <AttractionListLayout>
      {isModalOpen && <Modal type="ATRCT_LIMIT" onClick={handleModalCheck} />}
      <AttractionListContainer>
        <StyledAtrctHeader>
          <BackNaviBtn />
          <img src={text[headerData]["IMG"]} alt="" />
          <Container>
            <h2>{text[headerData]["MAIN"]}</h2>
            <p>{text[headerData]["SUB"]}</p>
          </Container>
        </StyledAtrctHeader>
        <StyledListSection>
          <nav>
            <ul>
              {spotData.map((data) => {
                return (
                  <AttractionItem
                    key={`attraction-${data.spotId}`}
                    data={data}
                    category={id}
                    onClick={() => handleItemClick(data.spotId)}
                  />
                );
              })}
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
