import { useState } from "react";
import { styled } from "styled-components";
import { FormLayout } from "../LocationFormPage";
import Button from "../../components/common/Button";
import { StyledBtnWrapper, StyledSubTitleText } from "../MapDetailPage";

const CompletePage = () => {
  return (
    <StyledBackgroundImg>
      <StyledCompleteText>
        Congratulation !<br />
        You completed your trip!
      </StyledCompleteText>
      <StyledBtnWrapper>
        <Button>Let's go on our next trip</Button>
      </StyledBtnWrapper>
    </StyledBackgroundImg>
  );
};

const StyledCompleteText = styled(StyledSubTitleText)`
    display: block;
    text-align: center;
    line-height: 36px;
    margin-top: 135px;
`

const StyledBackgroundImg = styled(FormLayout)`
  background-image: url("/images/Background/CompleteImg.svg");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export default CompletePage;
