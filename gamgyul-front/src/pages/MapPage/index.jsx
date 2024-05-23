import { useState, useEffect } from "react";
import Modal from "../../components/common/Modal";
import { FormLayout } from "../LocationFormPage";
import Button from "../../components/common/Button";
import styled from "styled-components";
const { Tmapv2 } = window;

const MapPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    initTmap();
  }, []);

  /** Tmap api 테스트 */

  function initTmap() {
    const map = new Tmapv2.Map("map_div", {
      center: new Tmapv2.LatLng(37.566481622437934, 126.98502302169841), // 지도 초기 좌표
      width: "100%",
      height: "100%",
      zoom: 15,
    });
    map.setZoom(14);
  }

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
      <StyledMap id="map_div" />
    </FormLayout>
  );
};

const StyledMap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export default MapPage;
