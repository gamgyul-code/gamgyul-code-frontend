import styled from "styled-components";
import { BasicLayout, Container } from "../../components/common/BasicLayout/layout.style";
import { theme } from "../../style/theme";
import { ROUTE_COMPLETE_PAGE_TEXT } from "../../constants/String";
import Button from "../../components/common/Button";

const MyRouteCompletePage = () => {
  const language = "KR";
  const text = ROUTE_COMPLETE_PAGE_TEXT[language];
  return (
    <MyRouteCompleteLayout>
      <MyRouteCompleteContainer>
        <MyRouteCompleteContents>
          <img src="/images/Complete/route-complete.svg" alt="" />
          <h1>{text.ROUTE_COMPLETE_MESSAGE}</h1>
        </MyRouteCompleteContents>
        <Button>{text.ROUTE_COMPLETE_BUTTON}</Button>
      </MyRouteCompleteContainer>
    </MyRouteCompleteLayout>
  );
};

const MyRouteCompleteLayout = styled(BasicLayout)`
`;

const MyRouteCompleteContainer = styled(Container)`
`;
const MyRouteCompleteContents = styled.section``;

export default MyRouteCompletePage;
