import React from "react";

function List({ todos, deleteFromList }) {
  return (
    <div className="list">
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item.title}
            <input type="checkbox" />
            <button onClick={() => deleteFromList(index)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
