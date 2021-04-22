import React from "react";

function Input({ updateItemFromList, addItemToList, text }) {
  return (
    <div className="input">
      <input
        className="input"
        onChange={(event) => updateItemFromList(event)}
        placeholder="Add text here!"
      ></input>
      <button onClick={() => addItemToList(text)}>Add to list!</button>
    </div>
  );
}

export default Input;
