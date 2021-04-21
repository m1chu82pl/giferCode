import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import EventPlace from "./components/EventPlace";
import Footer from "./components/Footer";
import GifsLimitButton from "./components/GifsLimitButton";
import Header from "./components/Header";
import Searcher from "./components/Searcher";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background: papayawhip;
`;

function App() {
  const API = "CCVpu71TxLgR0gsdR8aSRHoKyEWXjRNs";

  const [limit, setLimit] = useState(10);
  const [url, setUrl] = useState(
    `https://api.giphy.com/v1/gifs/search?q=&api_key=${API}&limit=${limit}`);
  const [gifsData, setGifsData] = useState([]);
  const [inputText, setInputText] = useState("");

  const searchInput = useRef(null)

  const handleChangeInputValue = (event) => {
    setUrl(
      `https://api.giphy.com/v1/gifs/search?q=${event.target.value}&api_key=${API}&limit=${limit}`);
    setInputText(event.target.value);
  };

  const handleClearInputValue = (event) => {
    event.preventDefault();
    setUrl(
      `https://api.giphy.com/v1/gifs/search?q=&api_key=${API}&limit=${limit}`
    );
    setInputText("");
    searchInput.current.focus()
  };

  const handleChangeGifsLimit = () => {
    setLimit(limit < 15 ? limit + 5 : 5)
  }

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error("error");
        })
        .then((response) => response.json())
        .then((gifs) => {
          setGifsData(gifs.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const searchTimer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(searchTimer);
  }, [url]);

  return (
    <Wrapper>
      <Header />
      <Searcher
        changeInputValue={handleChangeInputValue}
        clearInputValue={handleClearInputValue}
        inputText={inputText}
        searchInput={searchInput}
      />
      <EventPlace gifsData={gifsData} />
      <Footer />
      <GifsLimitButton limit={limit} handleChangeGifsLimit={handleChangeGifsLimit}/>
    </Wrapper>
  );
}

export default App;
