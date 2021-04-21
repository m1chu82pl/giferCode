import React from "react";
import { Wrapper, ImgWrapper, Image } from "./EventPlace.styled";

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
