import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
margin: 5vh 0;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30vw;
margin: 1vh 0;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 3%;
  box-shadow: 0px 0px 7px 0px rgb(82, 82, 82);
  transition: 0.4s ease-out;  
  user-select: none;
  cursor: pointer;  

  &:hover {
        transform: scale(1.02);
        box-shadow: 0px 0px 13px 0px rgb(95, 95, 95);
      }
`;

const EventPlace = (props) => {
  return (
    <Wrapper>
      {props.gifsData.map((gif) => {
        return (
          <ImgWrapper key={gif.id}>
            <Image src={gif.images.original.url} alt="some gif" />
          </ImgWrapper>
        );
      })}
    </Wrapper>
  );
};

export default EventPlace;
