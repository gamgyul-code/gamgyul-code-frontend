import styled from "styled-components";
import { theme } from "../../../style/theme";
import { useEffect, useState } from "react";
import { applyFontStyles } from "../../../utils/fontStyles";

/** 관광지 아이템 컴포넌트 (분리 필요) */
const AttractionItem = ({ isChecked, onCheckChange, type }) => {
  const [bookmark, setBookmark] = useState("off");
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {}, []);

  /** 북마크 버튼 클릭 => 이후 api 요청 추가 */
  const handleBookmarkClick = (bookmark) => {
    if (bookmark === "off") {
      setBookmark("on");
    } else {
      setBookmark("off");
    }
  };
  /** 체크박스 클릭 핸들러 */
  const handleCheckClick = () => {
    // onCheckChange(id);
    console.log("임시 체크박스 클릭 핸들러입니다.");
  };

  /** 삭제 버튼 클릭 => 이후 추가 */
  const handleDeleteClick = () => {
    console.log("삭제 버튼을 클릭했습니다.");
  };

  return (
    <AtrctItemContainer>
      <AtrctItemInfo>
        {type === "CHECK" && (
          <StyledCheckBtn>
            <img src={`/images/Icon/check_${bookmark}.svg`} alt="북마크버튼" onClick={() => handleCheckClick()} />
          </StyledCheckBtn>
        )}
        <figure>
          <img src="" alt="관광지 이미지" />
          <figcaption>
            <h3>리스트이름</h3>
            <p>리스트내용</p>
          </figcaption>
        </figure>
      </AtrctItemInfo>
      {type === "DELETE" ? (
        <StyledIconBtn>
          <img src={`/images/Icon/delete.svg`} alt="삭제버튼" onClick={() => handleDeleteClick()} />
        </StyledIconBtn>
      ) : (
        <StyledIconBtn>
          <img
            src={`/images/Icon/bookmark_${bookmark}.svg`}
            alt="북마크버튼"
            onClick={() => handleBookmarkClick(bookmark)}
          />
        </StyledIconBtn>
      )}
    </AtrctItemContainer>
  );
};

const AtrctItemInfo = styled.section`
  display: flex;
  align-items: center;

  figure {
    display: flex;
    align-items: center;
  }

  h3 {
    ${applyFontStyles(theme.font.body2)}
  }
  p {
    ${applyFontStyles(theme.font.body3)}
    color: ${theme.color.gray1};
  }

  figure > img {
    width: 70px;
    height: 70px;
    border-radius: 17.5px;
    background-color: black;
    margin-right: 16px;
  }
`;

/** 관광지 아이템 컴포넌트 스타일링 */
const AtrctItemContainer = styled.li`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.color.sub2};
`;

const StyledIconBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
`;

const StyledCheckBtn = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: inherit;
  margin-right: 16px;
  & > img {
    width: 100%;
    hegiht: 100%;
  }
`;

export default AttractionItem;
