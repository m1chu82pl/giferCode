import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
position: fixed;
bottom: 0;
width: 100%;
text-align: center;
background: salmon;
`;

const FooterText = styled.h6`
margin: 0;
`;

const Footer = () => {

  const initialDate = new Date();
  const year = initialDate.getFullYear();

  return ( 
    <Wrapper>
      <FooterText>© {year}</FooterText>
      <FooterText>Powered By GIPHY</FooterText>
      <FooterText>All Rights Reserved ™</FooterText>
    </Wrapper>
   );
}
 
export default Footer;
