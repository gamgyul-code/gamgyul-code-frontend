import styled from "styled-components";
import { theme } from "../../../style/theme";
import { useNavigate } from "react-router-dom";

const BackNaviBtn = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return <StyledBackBtn onClick={handleClick}>뒤로가기버튼</StyledBackBtn>;
};

/** 뒤로가기 버튼 스타일링 */
const StyledBackBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${theme.color.white};
  position: absolute;
  top: 54px;
  left: 20px;
  z-index: 999;
`;
export default BackNaviBtn;
