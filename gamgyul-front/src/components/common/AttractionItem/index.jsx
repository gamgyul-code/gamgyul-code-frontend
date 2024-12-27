import styled from "styled-components";
import { theme } from "../../../style/theme";
import { useEffect, useState } from "react";
import { applyFontStyles } from "../../../utils/fontStyles";
import { StyledIconBtn } from "../Button/StyledIconBtn.style";
import { IcBookMarkOff, IcBookMarkOn, IcDelete } from "../../../assets";
import { privateApi } from "../../../api/axiosInstance";

/** 관광지 아이템 컴포넌트 */
const AttractionItem = ({
  data,
  onDelete,
  isChecked,
  onCheckChange,
  type,
  checkRoutes,
  language,
  onClick,
  category,
  onBookmarkChange,
}) => {
  const [bookmarked, setBookmarked] = useState(data.bookmarked);

  /** 북마크 버튼 클릭 */
  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    const apiRequest = bookmarked
      ? privateApi.delete(`/bookmarks/spots/${data.spotId}`)
      : privateApi.post(`/bookmarks/spots/${data.spotId}/${category}`);

    apiRequest
      .then((response) => {
        setBookmarked(!bookmarked);
        console.log("AttractionBookmark", response);

        if (onBookmarkChange) {
          onBookmarkChange();
        }
      })
      .catch((error) => {
        console.log("AttractionBookmark Error", error);
      });
  };

  /** 체크박스 클릭 핸들러 */
  const handleCheckClick = (e) => {
    e.stopPropagation();
    onCheckChange();
  };

  return (
    <AtrctItemContainer onClick={onClick}>
      <AtrctItemContents>
        <AtrctItemInfo>
          {type === "CHECK" && (
            <StyledCheckBtn onClick={handleCheckClick}>
              <img
                src={`/images/Icon/check_${
                  isChecked ? (checkRoutes[0] === data.id ? `on_${language}` : "on") : "off"
                }.svg`}
                alt="check button"
              />
            </StyledCheckBtn>
          )}
          <figure>
            <img src={data.imgUrl} alt={`${data.name} img`} />
            <figcaption>
              <h3>{data.name}</h3>
              {data.simpleExplanation && <p>{data.simpleExplanation}</p>}
            </figcaption>
          </figure>
        </AtrctItemInfo>
        {type === "DELETE" ? (
          <StyledIconBtn>
            <IcDelete alt="delete Icon" onClick={onDelete} />
          </StyledIconBtn>
        ) : (
          <StyledIconBtn onClick={handleBookmarkClick}>
            {bookmarked ? <IcBookMarkOn /> : <IcBookMarkOff />}
          </StyledIconBtn>
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
  cursor: pointer;
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
