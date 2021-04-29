import React from "react";
import css from "./Input.module.css";

function Input({ updateItemFromList, addItemToList, text }) {
  return (
    <div className={css.input}>
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
