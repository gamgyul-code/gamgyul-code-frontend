import { useState } from "react";
import { styled } from "styled-components";
import { theme } from "./../../style/theme";
import { applyFontStyles } from "./../../utils/fontStyles";
import Button from "./../common/Button/index";

const TouristModal = ({ onClose, onClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(""); // 라디오 버튼 상태 관리

  const handleRadioChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleConfirmClick = () => {
    onClick(selectedCategory); // 선택된 카테고리 전달
    onClose(); // 모달 닫기
  };

  return (
    <ModalContainer>
      <ModalTitle>
        <Text>저장할 장소의</Text>
        <Text>카테고리를 정해주세요.</Text>
      </ModalTitle>
      <RadioBtnContainer>
        <RadioItem>
          <RadioLabel>
            <RadioInput type="radio" name="category" value="설문대할망" onChange={handleRadioChange} />
            설문대할망
          </RadioLabel>
        </RadioItem>
        <RadioItem>
          <RadioLabel>
            <RadioInput type="radio" name="category" value="사랑" onChange={handleRadioChange} />
            사랑
          </RadioLabel>
        </RadioItem>
        <RadioItem>
          <RadioLabel>
            <RadioInput type="radio" name="category" value="역사" onChange={handleRadioChange} />
            역사
          </RadioLabel>
        </RadioItem>
        <RadioItem>
          <RadioLabel>
            <RadioInput type="radio" name="category" value="신화" onChange={handleRadioChange} />
            신화
          </RadioLabel>
        </RadioItem>
      </RadioBtnContainer>
      <CategoryButton>
        <StyledModalBtn type="small" onClick={onClose} color="gray">
          취소
        </StyledModalBtn>
        <StyledModalBtn type="small" onClick={handleConfirmClick} disabled={!selectedCategory}>
          확인
        </StyledModalBtn>
      </CategoryButton>
    </ModalContainer>
  );
};

const ModalContainer = styled.article`
  background-color: ${theme.color.white};
  border-radius: 20px;

  width: 288px;
  height: 298px;
`;

const ModalTitle = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const Text = styled.h1`
  ${applyFontStyles(theme.font.body1)};
`;

const RadioBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 0 0 20px 36px;
`;

const RadioItem = styled.div`
  display: flex;
  align-items: center;
`;

const RadioLabel = styled.label`
  ${applyFontStyles(theme.font.body2)};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioInput = styled.input`
  appearance: none; /* 기본 스타일 제거 */
  width: 20px; /* 버튼 크기 */
  height: 20px;
  border-radius: 50%; /* 원형 */
  border: 2px solid ${theme.color.gray3}; /* 라디오 버튼 테두리 색 */
  margin-right: 16px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  background-color: ${theme.color.background};

  &:checked {
    background-color: ${theme.color.background};
    border-color: ${theme.color.primary};
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${theme.color.primary};
    transform: translate(-47%, -47%);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const StyledModalBtn = styled(Button)`
  width: calc(50% - 20px);
`;

export default TouristModal;
