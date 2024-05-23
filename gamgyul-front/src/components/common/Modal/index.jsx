import { theme } from "../../../style/theme";
import Button from "../Button";
import { styled } from "styled-components";

const Modal = ({ onClose }) => {
  return (
    <StyledOverlay>
      <StyledModal>
        <StyledBody1Text>스탬프를 획득했습니다</StyledBody1Text>
        <div>이미지 들어갈 공간</div>
        <Button type="small" onClick={onClose}>확인</Button>
      </StyledModal>
    </StyledOverlay>
  );
};

/** body1 텍스트 스타일링 */
export const StyledBody1Text = styled.span`
  font-size: ${theme.fontSize.body1};
  font-weight: 600;
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

export default Modal;
