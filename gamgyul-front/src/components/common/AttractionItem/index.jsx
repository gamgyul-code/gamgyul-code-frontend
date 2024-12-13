import styled from "styled-components";
import { theme } from "../../../style/theme";
import { useEffect } from "react";
import { applyFontStyles } from "../../../utils/fontStyles";
import { StyledIconBtn } from "../Button/StyledIconBtn.style";
import { IcBookMarkOff, IcBookMarkOn, IcDelete } from "../../../assets";

/** 관광지 아이템 컴포넌트 */
const AttractionItem = ({ data, onDelete, isChecked, onCheckChange, type, checkRoutes, language }) => {
  useEffect(() => {}, []);

  /** 북마크 버튼 클릭 => 이후 api 요청 추가 */
  // const handleBookmarkClick = (bookmark) => {
  //   if (bookmark === "off") {
  //     setBookmark("on");
  //   } else {
  //     setBookmark("off");
  //   }
  // };
  /** 체크박스 클릭 핸들러 */
  const handleCheckClick = () => {
    onCheckChange();
  };

  return (
    <AtrctItemContainer>
      <AtrctItemContents>
        <AtrctItemInfo>
          {type === "CHECK" && (
            <StyledCheckBtn onClick={() => handleCheckClick()}>
              <img
                src={`/images/Icon/check_${
                  isChecked ? (checkRoutes[0] === data.id ? `on_${language}` : "on") : "off"
                }.svg`}
                alt="체크버튼"
              />
            </StyledCheckBtn>
          )}
          <figure>
            <img src="" alt="관광지 이미지" />
            <figcaption>
              <h3>{data.name}</h3>
              <p>{data.simpleExplanation}</p>
            </figcaption>
          </figure>
        </AtrctItemInfo>
        {type === "DELETE" ? (
          <StyledIconBtn>
            <IcDelete alt="delete Icon" onClick={onDelete} />
          </StyledIconBtn>
        ) : (
          <StyledIconBtn>{data.bookmarked ? <IcBookMarkOn /> : <IcBookMarkOff />}</StyledIconBtn>
        )}
      </AtrctItemContents>
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

const AtrctItemContents = styled.li`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid ${theme.color.sub2};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/** 관광지 아이템 컴포넌트 스타일링 */
const AtrctItemContainer = styled.div`
  padding: 0 20px;

  &:hover {
    background: #1eb17b0d;
  }
`;

const StyledCheckBtn = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-color: inherit;
  margin-right: 16px;
  & > img {
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

export default AttractionItem;
