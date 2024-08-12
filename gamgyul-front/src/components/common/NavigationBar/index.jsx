import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../style/theme";
import { applyFontStyles } from "../../../utils/fontStyles";

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState("map");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <NaviContainer>
      <NavbarLink to="/complete" onClick={() => handleTabClick("map")}>
        <NaviBtn
          src={activeTab === "map" ? "/src/assets/NavigationBar/mapOn.svg" : "/src/assets/NavigationBar/mapOff.svg"}
        />
        <NaviText $active={activeTab === "map"}>Map</NaviText>
      </NavbarLink>
      <NavbarLink to="/detail" onClick={() => handleTabClick("home")}>
        <NaviBtn
          src={activeTab === "home" ? "/src/assets/NavigationBar/homeOn.svg" : "/src/assets/NavigationBar/homeOff.svg"}
        />
        <NaviText $active={activeTab === "home"}>Home</NaviText>
      </NavbarLink>
      <NavbarLink to="/detail2" onClick={() => handleTabClick("trip")}>
        <NaviBtn
          src={activeTab === "trip" ? "/src/assets/NavigationBar/tripOn.svg" : "/src/assets/NavigationBar/tripOff.svg"}
        />
        <NaviText $active={activeTab === "trip"}>My Trip</NaviText>
      </NavbarLink>
    </NaviContainer>
  );
};

const NaviContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #f6faed;

  height: 83px;
  border-top: 2px solid #c2d0a1;
  z-index: 1000;
`;

const NaviBtn = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const NaviText = styled.p`
  ${applyFontStyles(theme.font.body2)}
  font-size: 12px;
  text-align: center;
  color: ${({ $active }) => ($active ? theme.color.primary : theme.color.gray1)};
`;

const NavbarLink = styled(Link)`
  margin-top: 10px;
  width: 125px;
  height: 125px;
`;

export default NavigationBar;
