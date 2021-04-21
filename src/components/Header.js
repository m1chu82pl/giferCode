import React from "react";
import styled, { keyframes } from "styled-components";

const animateTitle = keyframes`
  0% { background: papayawhip; transform: translateY(-100%); }
  60% { background: papayawhip; transform: translateY(0); }
  100% { background: salmon;  }
`;

const Title = styled.h1`
position: relative;
padding: 5px 0;
background: salmon;
text-align: center;
animation: ${animateTitle} ease-out 1.5s;
`

const Header = () => {
  return ( 
    <Title>GIFs that keep on givin'</Title>
   );
}
 
export default Header;
