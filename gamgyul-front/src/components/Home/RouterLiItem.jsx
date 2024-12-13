import styled from "styled-components";
import { theme } from "../../style/theme";
import { applyFontStyles } from "../../utils/fontStyles";

/** 각 라우터별 li 아이템 컴포넌트 */
const RouterLiItem = ({ onClick, data }) => {
  return (
    <StyledLiRouter onClick={onClick}>
      <img src={data.img} alt={data.img} />
      <p>{data.name}</p>
    </StyledLiRouter>
  );
};
export default RouterLiItem;

const StyledLiRouter = styled.li`
  width: 150px;
  height: 216px;
  border-radius: 24px;
  background-color: ${theme.color.sub2};
  flex: 0 0 auto;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 150px;
    height: 150px;
    display: block;
    object-fit: cover;
    background-color: black;
  }

  p {
    ${applyFontStyles(theme.font.body2)}
    color: ${theme.color.black};
    width: calc(100% - 20px);
    height: calc(100% - 168px);
    padding: 9px 10px;
  }
`;
