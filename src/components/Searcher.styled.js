import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
margin: 0 1vw 0;
`;

export const Form = styled.form`
text-align: center;
margin: 10px;
`;

export const Input = styled.input`
outline: 0;
  border-width: 0 0 3px;
  border-color: red;

  ::placeholder {
    text-align: center;
  }

  &:focus {
    border-width: 0 0 3px;
  border-color: salmon;
}
`;

export const Button = styled.button`
margin: 0 10px;
padding: 0 5px;
border: none;
cursor: pointer;
`;
