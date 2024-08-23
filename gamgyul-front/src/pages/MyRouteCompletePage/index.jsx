import styled from "styled-components";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import { theme } from "../../style/theme";
import { ROUTE_COMPLETE_PAGE_TEXT } from "../../constants/String";
import Button from "../../components/common/Button";
import { applyFontStyles } from "../../utils/fontStyles";
import { useNavigate } from "react-router-dom";

const MyRouteCompletePage = () => {
  const navigate = useNavigate();
  const language = "KR";
  const text = ROUTE_COMPLETE_PAGE_TEXT[language];
  return (
    <MyRouteCompleteLayout>
      <MyRouteCompleteContainer>
        <MyRouteCompleteContents>
          <img src="/images/Complete/route-complete.svg" alt="" />
          <h2>{text.ROUTE_COMPLETE_MESSAGE}</h2>
        </MyRouteCompleteContents>
        <Button onClick={() => navigate("/trip?tab=routes")}>{text.ROUTE_COMPLETE_BUTTON}</Button>
      </MyRouteCompleteContainer>
    </MyRouteCompleteLayout>
  );
};

const MyRouteCompleteLayout = styled(BasicLayout)`
  padding-bottom: 40px;
  height: calc(100vh - 40px);
  background-color: ${theme.color.white};
`;

const MyRouteCompleteContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const MyRouteCompleteContents = styled.section`
  text-align: center;
  max-width: calc(${theme.maxWidth} - 88px);
  margin-top: 160px;
  h2 {
    ${applyFontStyles(theme.font.header)}
    white-space: pre-line;
    margin-top: 32px;
  }
  img {
    width: 80px;
    height: 80px;
  }
`;

export default MyRouteCompletePage;
