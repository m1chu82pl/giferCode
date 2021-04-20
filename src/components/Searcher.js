import styled from "styled-components";

const Wrapper = styled.div`
position: relative;
margin: 0 1vw 0;
`;

const Form = styled.form`

`;

const Searcher = (props) => {
  

  return ( 
    <Wrapper>
      <p>searcher</p>
      <Form>
        <input type="text" placeholder="what are you looking for?" 
        onChange={props.inputValue}
        onKeyPress={e => {
          if (e.key === 'Enter') e.preventDefault();
        }}
        />
      </Form>
    </Wrapper>
   );
}
 
export default Searcher;
