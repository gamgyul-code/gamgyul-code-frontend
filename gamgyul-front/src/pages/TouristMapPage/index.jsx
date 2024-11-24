import { styled } from "styled-components";
import { BasicLayout } from "../../components/common/BasicLayout/layout.style";
import SaveLocationBtn from "../../components/TouristMap/SaveLocationBtn";
import ThemeNavFilter from "../../components/TouristMap/ThemeNavFilter";
import TouristModal from "../../components/TouristMap/TouristModal";
import NavigationBar from "./../../components/common/NavigationBar/index";
import LocationInfo from "./../../components/TouristMap/LocationInfo";
import { theme } from "./../../style/theme";

const TouristMapPage = () => {
  return (
    <TouristMapPageContainer>
      <Nav>
        <ThemeNavFilter />
      </Nav>
      <TouristModal />
      <SaveLocationBtn />
      <LocationInfo />
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
