import React from "react";

function NoWordInfo({ wordArray }) {
  console.log(wordArray)
  return (
    <div>
      <h1 id="warning">
        {wordArray.title}, {wordArray.message}, {wordArray.resolution}
      </h1>
    </div>
  );
}

export default NoWordInfo;
