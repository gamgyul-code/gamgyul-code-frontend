import styled from "styled-components";
import { theme } from "../../../style/theme";

/** 관광지 아이템 컴포넌트 (분리 필요) */
const AttractionItem = ({}) => {
  return (
    <StyledAtrctItem>
      <div>체크박스</div>
      <figure>
        <img src="" alt="관광지 이미지" />
        <figcaption>
          <h3>리스트이름</h3>
          <p>리스트내용</p>
        </figcaption>
      </figure>
      <button>북마크</button>
      <button>삭제</button>
    </StyledAtrctItem>
  );
};

/** 관광지 아이템 컴포넌트 스타일링 */
const StyledAtrctItem = styled.li`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.color.sub2};
  figure {
    display: flex;
    align-items: center;
  }
`;

export default AttractionItem;
