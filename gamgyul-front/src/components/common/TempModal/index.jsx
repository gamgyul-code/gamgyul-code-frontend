import { StyledBody2Gray } from "../../../pages/MapDetailPage";
import { theme } from "../../../style/theme";
import Button from "../Button";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { applyFontStyles } from "../../../utils/fontStyles";

const TempModal = ({ onClose }) => {
  return (
    <StyledOverlay>
      <StyledModal>
        <StyledBody1Text>You got a stamp!</StyledBody1Text>
        <StyledStampWrap>
          <img src="images/Stamp/stamp.svg" />
          <StyledBody2Gray>영실기암</StyledBody2Gray>
        </StyledStampWrap>
        <Link to="/complete">
          <Button type="small" onClick={onClose}>
            Next
          </Button>
        </Link>
      </StyledModal>
    </StyledOverlay>
  );
};

/** body1 텍스트 스타일링 */
export const StyledBody1Text = styled.span`
  ${applyFontStyles(theme.font.body1)}
`;

/** 오버레이 스타일링 */
const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

/** 모달 스타일링 */
const StyledModal = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${theme.color.white};
  box-shadow: 0px 3.39px 16.94px 0px #0000001a;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledStampWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  *:nth-child(1) {
    width: 128px;
    height: 128px;
    margin-bottom: 8px;
  }
`;

export default TempModal;
