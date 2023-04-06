import React, { useState } from "react";
import Search from "./img/search_ck2mibveuife.svg";
function DictForm(props) {
  const [inputText, setInputText] = useState("");

  const handleChange = (change) => {
    setInputText(change.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getWord({
      text: inputText,
    });
    setInputText("");
  };

  //   console.log(wordArray);
  return (
    <>
      <div className=" mx-4 mb-5  flex space-y-5 flex-col md:items-center  justify-center md:text-center">
        <h1 className=" md:text-x text-space-2 l text-xl   capitalize text-black">
          Try out our dictionary!
        </h1>
        <form
          className=" flex justify-left md:justify-center md:w-3/5  w-full space-x-1 h-9    md:flex-row "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder="Enter word you wish to search for. . ."
            className="border outline-blue-400  p-3  solid  border-gray-600 w-full  rounded-md"
            autoFocus
          ></input>

          <button className="w-fit bg-transparent shadow-none  border-none px-5">
            <img className="md:w-8 w-6 " src={Search} alt="search"></img>
          </button>
        </form>
      </div>
    </>
  );
}

export default DictForm;
