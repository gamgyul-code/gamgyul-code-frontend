import { useState } from "react";
import { styled } from "styled-components";
import { theme } from "./../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";

const ThemeNavFilter = () => {
  const filters = [
    {
      id: 1,
      label: "설문대할망",
      icon: "/images/TouristMap/ic_grandma.svg",
      activeIcon: "/images/TouristMap/ic_grandma_on.svg",
    },
    {
      id: 2,
      label: "사랑",
      icon: "/images/TouristMap/ic_heart.svg",
      activeIcon: "/images/TouristMap/ic_heart_on.svg",
    },
    {
      id: 3,
      label: "역사",
      icon: "/images/TouristMap/ic_myth.svg",
      activeIcon: "/images/TouristMap/ic_history_on.svg",
    },
    {
      id: 4,
      label: "신화",
      icon: "/images/TouristMap/ic_history.svg",
      activeIcon: "/images/TouristMap/ic_myth_on.svg",
    },
  ];

  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (id) => {
    setActiveFilter(id);
  };

  return (
    <FilterNav>
      {filters.map((filter) => (
        <FilterItem key={filter.id} $isActive={activeFilter === filter.id} onClick={() => handleFilterClick(filter.id)}>
          <img src={activeFilter === filter.id ? filter.activeIcon : filter.icon} />
          <FilterTitle>{filter.label}</FilterTitle>
        </FilterItem>
      ))}
    </FilterNav>
  );
};

export default ThemeNavFilter;

const FilterNav = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const FilterItem = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 7px;
  border: 1px solid ${({ $isActive }) => ($isActive ? theme.color.stroke : theme.color.background)};
  border-radius: 30px;
  background-color: ${({ $isActive }) => ($isActive ? theme.color.primary : theme.color.white)};
  color: ${({ $isActive }) => ($isActive ? theme.color.white : theme.color.black)};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const FilterTitle = styled.p`
  ${applyFontStyles(theme.font.body3)};
`;
