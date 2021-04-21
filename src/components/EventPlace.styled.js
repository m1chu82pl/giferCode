import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
grid-template-rows: repeat(auto-fill, minmax(15rem, 1fr));
align-items: center;
gap: 10px;
margin: 0 1vw 20vh;
`;

export const ImgWrapper = styled.div`
display: flex;
flex-direction: column;
flex-basis: 30vw;
margin: 1vh 0;
`;

export const Image = styled.img`
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
