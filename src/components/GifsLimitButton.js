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
  width: 4rem;
  height: 4rem;
  background: #e6fa8072;
  border-radius: 50%;
  line-height: 4rem;
  text-align: center;
  box-shadow: 0px 0px 7px 0px rgb(82, 82, 82);
  cursor: pointer;
  user-select: none;
  transition: 0.4s;

  &:hover {
    background: #fa8072;
    transform: scale(1.02);
    box-shadow: 0px 0px 13px 0px rgb(95, 95, 95);
  }
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
