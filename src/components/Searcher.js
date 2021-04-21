import { Wrapper, Form, Input, Button } from "./Searcher.styled";

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
