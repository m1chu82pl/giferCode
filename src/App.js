import React, {useState, useEffect} from "react";

import styled from 'styled-components';
import EventPlace from './components/EventPlace';
import Footer from './components/Footer';
import Header from './components/Header';
import Searcher from './components/Searcher';

const Wrapper = styled.div`
position: absolute;
display: flex;
flex-direction: column;
width: 100%;
height: auto;
background: papayawhip;
`

function App() {

  const API = "CCVpu71TxLgR0gsdR8aSRHoKyEWXjRNs";
  
  const [limit, setLimit] = useState(10);
  const [url, setUrl] = useState(`http://api.giphy.com/v1/gifs/search?q=&api_key=${API}&limit=${limit}`)
  const [gifsData, setGifsData] = useState([])
  

  const handleChangeInputValue = (event) => {
    setUrl(`http://api.giphy.com/v1/gifs/search?q=${event.target.value}&api_key=${API}&limit=${limit}`);
  };  
  
  
  useEffect(() => {    
    const fetchData = () => {
      console.log("url is:", url);
  fetch(url)
  .then((response) => {
    if (response.ok) {
      return response;
        }
        throw Error("tu też coś poszło nie tak");
      })
      .then((response) => response.json())
      .then((gifs) => {
        // console.log(gifs)
        setGifsData(gifs.data)
        // console.log("gifs is:", gifs)
      })
      .catch((error) => {
        console.log("errrror", error);
        // this.setState({
          //   error: true,
          // });
        });
      };
      const searchTimer = setTimeout(()=> {
        fetchData();     

      }, 1000);

return () => clearTimeout(searchTimer)

    }, [url]);
    
    console.log("gifsData:", gifsData);
    // clearTimeout(searchTimer)
    


  return (
    <Wrapper>
      <Header/>
      <Searcher inputValue={handleChangeInputValue}/>
      <EventPlace gifsData={gifsData}/>
      <Footer/>
    </Wrapper>
  );
}

export default App;
