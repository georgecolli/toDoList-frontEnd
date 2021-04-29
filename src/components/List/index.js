import React from "react";
import css from "./List.module.css";

function List({ todos, deleteFromList }) {
  return (
    <div className={css.list}>
      <ul>
        {todos.map((item, index) => (
          <li className={css.listItem} key={index}>
            {item.title}
            <input type="checkbox" />
            <button onClick={() => deleteFromList(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
