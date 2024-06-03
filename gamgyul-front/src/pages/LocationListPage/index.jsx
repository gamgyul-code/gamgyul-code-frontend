import DropDown from "../../components/common/DropDown";
import styled from "styled-components";
import Button from "./../../components/common/Button/index";
import { FormLayout } from "../ThemeFormPage";
import { theme } from "../../style/theme";
const LocationListPage = () => {
  return (
    <StyledFormLayout>
      <Content>
        <StyledHeading>추천 루트를 확인해보렴</StyledHeading>
        <DropDownList>
          <DropDown number="1" title="장소 이름">
            장소 설명 장소 설명 장소 설명 장소 설명 장소 설명 장소 설명 장소 설명 장소 설명 장소 설명 장소 설명 장소
            설명 장소 설명 장소 설명 장소 설명 장소 설명 장소 설명 장소 설명 장소 설명
          </DropDown>
          <DropDown number="2" title="장소 이름">
            sssss
          </DropDown>
          <DropDown number="3" title="장소 이름">
            sssss
          </DropDown>
          <DropDown number="4" title="장소 이름">
            sssss
          </DropDown>
          <DropDown number="5" title="장소 이름">
            sssss
          </DropDown>
        </DropDownList>
      </Content>
      <StyledBottomWrapper>
        <Button>다음</Button>
      </StyledBottomWrapper>
    </StyledFormLayout>
  );
};

const StyledFormLayout = styled(FormLayout)`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-color: wheat;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding-top: 112px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
  padding-top: 48px;
`;
const StyledHeading = styled.h2`
  font-size: ${theme.fontSize.subtitle};
  font-weight: bold;
  color: ${theme.color.grayscale_21};
  margin-bottom: 24px;
`;

const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px; /* Add some padding to the bottom */
`;

const StyledBottomWrapper = styled.div`
  position: absolute;
  bottom: 20px; /* 하단에서의 거리 */
  width: calc(100% - 40px); /* FormLayout의 패딩을 고려한 너비 */
  left: 20px; /* FormLayout의 왼쪽 패딩 */
  right: 20px; /* FormLayout의 오른쪽 패딩 */

  padding: 10px 0;
`;

export default LocationListPage;
