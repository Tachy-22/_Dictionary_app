import React, { useState, useEffect } from "react";
import DictForm from "./DictForm";
import DictInfo from "./DictInfo";
function DictMain() {
  const [wordArray, setWordArray] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const getWord = (text) => {
    setSearchWord(text.text);
  };
  console.log(searchWord);

  var fetchLink =
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchWord;
  useEffect(() => {
    

    fetch(fetchLink)
      .then((response) => response.json())
      .then((data) => {
        setWordArray(data);

        // console.log(data);
      });
  }, [fetchLink]);

  // console.log(searchWord, fetchLink);
  console.log(wordArray);
  return (
    <>
      <DictForm getWord={getWord} />
      <DictInfo wordArray={wordArray} />
    </>
  );
}

export default DictMain;
