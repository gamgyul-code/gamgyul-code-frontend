import { useState } from "react";
import { styled } from "styled-components";
import { FormLayout, StyledBottomWrapper, StyledTextBox } from "../LocationFormPage";
import Button from "../../components/common/Button";
import { theme } from "../../style/theme";
import Modal from "../../components/common/Modal";

const LocationDetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectLocation, setSelectLocation] = useState("");

  const handleOptionClick = (location) => {
    setSelectLocation(location);
  };

  /** 모달 임시 클릭 (달성 조건 추가 필요) */
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  /** 모달 닫기 */
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FormLayout>
      {/* 모달 테스트 */}
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      MapPage
      <button onClick={handleButtonClick}>모달 테스트</button>
      <div>할망 이미지 들어갈 공간</div>
      <StyledBottomWrapper>
        <StyledTextBox>
          <span>여행위치를 선택해보렴</span>
        </StyledTextBox>

        <StyledOptionList>
          {["loc1", "loc2", "loc3", "loc4", "loc5", "loc6"].map((location) => (
            <>
              <StyledOptionImg
                src={`/images/LocationMap/${location}_${selectLocation === location ? "active" : "inactive"}.png`}
                alt={`${location}_${selectLocation === location ? "active" : "inactive"}`}
                onClick={() => handleOptionClick(location)}
              />
              {/* <StyledOptionBtn
                key={location}
                isSelected={selectLocation === location}
                onClick={() => handleOptionClick(location)}
              >
                {location}
              </StyledOptionBtn> */}
            </>
          ))}
        </StyledOptionList>
        <Button disabled={!selectLocation}>다음</Button>
      </StyledBottomWrapper>
    </FormLayout>
  );
};

/** 선택 버튼 list wrapper */
const StyledOptionList = styled.div`
  width: 100%;
  margin-top: 49px;
  margin-bottom: 20px;
`;

/** 선택 버튼 */
const StyledOptionImg = styled.img`
  width: 33.3333%;
  cursor: pointer;
`;

export default LocationDetailPage;
