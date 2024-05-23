import { useState } from "react";
import Modal from "../../components/common/Modal";
import { FormLayout } from "../LocationFormPage";
import Button from "../../components/common/Button";

const MapPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    </FormLayout>
  );
};

export default MapPage;
