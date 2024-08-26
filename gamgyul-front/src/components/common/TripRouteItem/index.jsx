import styled from "styled-components";
import { Container } from "../BasicLayout/layout.style";
import { theme } from "../../../style/theme";
import { applyFontStyles } from "../../../utils/fontStyles";
import { StyledIconBtn } from "../Button/StyledIconBtn.style";

const TripRouteItem = ({ isFirst, isLast, stepNumber, data, isActive, onClick }) => {
  return (
    <RouteItemContainer isActive={isActive} onClick={onClick}>
      <RouteItemContents>
        <RouteNumberLine isFirst={isFirst} isLast={isLast}>
          {!isFirst && <RouteLine />}
          <RouteNumber>{stepNumber}</RouteNumber>
          {!isLast && <RouteLine />}
        </RouteNumberLine>
        <RouteItemDetails>
          <RouteItemInfo>
            <h3>{data.title}</h3>
            <p>{data.subtitle}</p>
          </RouteItemInfo>
          <StyledIconBtn>
            <img src={`/images/Icon/more.svg`} alt="more button" />
          </StyledIconBtn>
        </RouteItemDetails>
      </RouteItemContents>
    </RouteItemContainer>
  );
};

const RouteNumberLine = styled.div`
  width: 24px;
  height: 100%;
  position: relative;
  div:first-child {
    top: 0;
  }
  div:last-child {
    top: 50%;
  }
`;
const RouteLine = styled.div`
  width: 2px;
  height: calc(100% / 2);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${theme.color.sub1};
`;
const RouteNumber = styled.span`
  ${applyFontStyles(theme.font.body2)}
  display: block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 50%;
  color: ${theme.color.white};
  background-color: ${theme.color.primary};

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
`;
const RouteItemContainer = styled(Container)`
  background-color: ${({ isActive }) => (isActive ? "#1EB17B1A" : "inherit")};
  height: 80px;
`;

const RouteItemContents = styled.li`
  display: flex;
  height: 100%;
`;

const RouteItemDetails = styled.section`
  width: calc(100% - 46px);
  height: 72px;
  margin: 4px 0 4px 22px;
  padding: 15px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${theme.color.white};
  border: 1px solid #b6e4cb;
  border-radius: 20px;
`;
const RouteItemInfo = styled.div`
  h3 {
    ${applyFontStyles(theme.font.body2)}
  }
  p {
    ${applyFontStyles(theme.font.body3)}
    color: ${theme.color.gray1};
  }
`;

export default TripRouteItem;
