import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../style/theme";
import { applyFontStyles } from "../../../utils/fontStyles";
import Button from "../Button";

const Modal = ({ onClose, onClick, type }) => {
  const [routeValue, setRouteValue] = useState("");
  const isSaveButtonDisabled = type === "SAVE" && routeValue.trim() === "";
  // 경로 삭제일 때 : 확인 => 경로 삭제 api 요청 / 취소 => 모달 닫기
  // 경로 저장일 때 : 확인 => 경로 저장 api 요청 / 취소 => 모달 닫기

  return (
    <ModalOverlayContainer>
      <ModalContents>
        {type === "DELETE" && <ModalDeleteH2>경로를 삭제 하시겠어요?</ModalDeleteH2>}
        {type === "SAVE" && (
          <ModalRoutesSection>
            <h2>경로 이름</h2>
            <p>경로를 저장하려면 이름이 필요합니다.</p>
            <StyledInputBox
              type="text"
              id="route-input"
              value={routeValue}
              placeholder="이름을 입력해주세요."
              onChange={(event) => setRouteValue(event.target.value)}
            />
          </ModalRoutesSection>
        )}
        <div>
          <StyledModalBtn type="small" onClick={onClose} color="gray">
            취소
          </StyledModalBtn>
          <StyledModalBtn type="small" onClick={() => onClick(routeValue)} disabled={isSaveButtonDisabled}>
            확인
          </StyledModalBtn>
        </div>
      </ModalContents>
    </ModalOverlayContainer>
  );
};

const ModalDeleteH2 = styled.h2`
  width: 100%;
  padding: 0 8px;
  margin-top: 80px;
  box-sizing: border-box;
  text-align: center;
`;

const ModalOverlayContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  max-width: ${theme.maxWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background: #00000066;
`;

const ModalContents = styled.div`
  width: 100%;
  min-height: 252px;
  border-radius: 20px;
  padding: 14px 16px;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px 0px #0000001a;
  max-width: calc(${theme.maxWidth} - 88px);
  background-color: ${theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    ${applyFontStyles(theme.font.subtitle)}
  }

  Button:last-child {
    margin-right: 0;
  }
`;

const StyledModalBtn = styled(Button)`
  width: calc(50% - 4px);
  margin-right: 8px;
`;

const ModalRoutesSection = styled.section`
  margin: 10px 8px;
  p {
    ${applyFontStyles(theme.font.body3)}
    margin: 4px 0 28px 0;
  }
`;

const StyledInputBox = styled.input`
  ${applyFontStyles(theme.font.body2)}
  width: 100%;
  height: 42px;
  border: none;
  border-bottom: 1px solid ${theme.color.primary};
  box-sizing: border-box;
  padding: 10px;

  &::placeholder {
    color: ${theme.color.gray2};
  }
`;

export default Modal;
