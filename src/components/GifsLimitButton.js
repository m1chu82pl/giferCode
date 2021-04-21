import React from "react";
import styled from "styled-components";

const LimitButtonWrapper = styled.div`
  position: fixed;
  text-align: center;
  right: 8vw;
  bottom: 8vw;
  background: transparent;
`;

const LimitButtonText = styled.a`
  display: inline-block;
  width: 4vw;
  height: 4vw;
  background: salmon;
  border-radius: 50%;
  line-height: 4vw;
  text-align: center;
  box-shadow: 0px 0px 7px 0px rgb(82, 82, 82);
  cursor: pointer;
  user-select: none;
`;

const GifsLimitButton = (props) => {
  return (
    <LimitButtonWrapper>
      <LimitButtonText onClick={props.handleChangeGifsLimit}>
        ✖{props.limit}
      </LimitButtonText>
    </LimitButtonWrapper>
  );
};

export default GifsLimitButton;
