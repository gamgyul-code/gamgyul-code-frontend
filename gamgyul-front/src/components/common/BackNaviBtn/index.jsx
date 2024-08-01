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

  return (
    <StyledBackBtn onClick={handleClick}>
      <img src="/images/Icon/backward.svg" alt="뒤로가기" />
    </StyledBackBtn>
  );
};

/** 뒤로가기 버튼 스타일링 */
const StyledBackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${theme.color.white};
  position: absolute;
  top: 54px;
  left: 20px;
  z-index: 999;
  border: 1px solid #f6faed;
  box-shadow: 0px 2px 3px 0px #0000001a;

  & > img {
    width: 30px;
    height: 30px;
  }
`;
export default BackNaviBtn;
