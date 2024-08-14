import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../style/theme";

const Modal = ({ onClose, onClick, type }) => {
  const [routeValue, setRouteValue] = useState("");
  // 경로 삭제일 때 : 확인 => 경로 삭제 api 요청 / 취소 => 모달 닫기
  // 경로 저장일 때 : 확인 => 경로 저장 api 요청 / 취소 => 모달 닫기
  return (
    <ModalOverlayContainer>
      <ModalContents>
        {type === "DELETE" && <h2>경로를 삭제 하시겠어요?</h2>}
        <h2>{type === "DELETE" ? "" : "경로 이름"}</h2>
        {type === "SAVE" && (
          <section>
            <p>경로를 저장하려면 이름이 필요합니다.</p>
            <input
              type="text"
              id="route-input"
              value={routeValue}
              placeholder="할망 여행"
              onChange={(event) => setRouteValue(event.target.value)}
            />
          </section>
        )}
        <button onClick={onClose}>취소</button>
        <button onClick={onClick}>확인</button>
      </ModalContents>
    </ModalOverlayContainer>
  );
};

const ModalOverlayContainer = styled.div`
`;

const ModalContents = styled.div`
`;

export default Modal;
