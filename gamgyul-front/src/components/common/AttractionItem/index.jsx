import styled from "styled-components";
import { theme } from "../../../style/theme";

/** 관광지 아이템 컴포넌트 (분리 필요) */
const AttractionItem = ({}) => {
  //   const type = "DELETE";
  //   const type = "CHECK";
  const type = "BASIC";

  return (
    <StyledAtrctItem>
      <div>
        {type === "CHECK" && <div>체크</div>}
        <figure>
          <img src="" alt="관광지 이미지" />
          <figcaption>
            <h3>리스트이름</h3>
            <p>리스트내용</p>
          </figcaption>
        </figure>
      </div>
      {type === "DELETE" ? <button>삭제</button> : <button>북마크</button>}
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

  & > div {
    display: flex;
    align-items: center;
    div {
      width: 32px;
      height: 32px;
      background-color: green;
      margin-right: 16px;
    }
  }

  figure {
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: ${theme.fontSize.body2};
    font-weight: 600;
  }
  p {
    font-size: ${theme.fontSize.body3};
    color: ${theme.color.gray1};
    font-weight: 400;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 17.5px;
    background-color: black;
    margin-right: 16px;
  }
`;

export default AttractionItem;
