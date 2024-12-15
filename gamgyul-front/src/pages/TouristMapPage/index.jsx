import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BasicLayout } from "../../components/common/BasicLayout/layout.style";
import SaveLocationBtn from "../../components/TouristMap/SaveLocationBtn";
import ThemeNavFilter from "../../components/TouristMap/ThemeNavFilter";
import TouristModal from "../../components/TouristMap/TouristModal";
import NavigationBar from "./../../components/common/NavigationBar/index";
import LocationInfo from "./../../components/TouristMap/LocationInfo";
import { theme } from "./../../style/theme";

const TouristMapPage = () => {
  const navigate = useNavigate();

  const handleClickPopUp = () => {
    // 추후 라우터 수정
    navigate("/login");
  };

  return (
    <TouristMapPageContainer>
      <Nav>
        <ThemeNavFilter />
      </Nav>
      <TouristModal />
      <SaveLocationBtn />
      <LocationInfo handleClickPopUp={handleClickPopUp} />
      <NavigationBar />
    </TouristMapPageContainer>
  );
};

const TouristMapPageContainer = styled(BasicLayout)`
  background-color: ${theme.color.gray3};
  position: relative;
`;

const Nav = styled.div`
  padding: 67px 20px 0 20px;
`;

export default TouristMapPage;
