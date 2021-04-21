import styled from "styled-components";

const Wrapper = styled.div`
position: relative;
margin: 0 1vw 0;
`;

const Form = styled.form`
text-align: center;
margin: 10px;
`;

const Input = styled.input`
outline: 0;
  border-width: 0 0 6px;
  border-color: red;

  ::placeholder {
    text-align: center;
  }

  &:focus {
    border-width: 0 0 3px;
  border-color: salmon;
}
`;

const Button = styled.button`
margin: 0 10px;
padding: 0 5px;
border: none;
cursor: pointer;
`;

const Searcher = (props) => {  

  return ( 
    <Wrapper>
      <Form>
        <Input type="text" placeholder="what are you looking for?" value={props.inputText}
        autoFocus
        onChange={props.changeInputValue}
        ref={props.searchInput}
        onKeyPress={e => {
          if (e.key === 'Enter') e.preventDefault();
        }}
        />
        <Button onClick={props.clearInputValue}>✖</Button>
      </Form>
    </Wrapper>
   );
}
 
export default Searcher;
