import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "../Input";
import List from "../List";
import Weather from "../Weather";

function App() {
  const [todos, setToDos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getToDos();
  }, []);

  async function getToDos() {
    let response = await fetch(process.env.REACT_APP_BACKEND_URL);
    let data = await response.json();
    setToDos(data);
  }

  function addItemToList(text) {
    const newTodosList = [...todos, { title: text }];
    setToDos(newTodosList);
  } //create post methods, of add to list, re do(call) get todos --- same with delete

  function deleteItemFromList(index) {
    const deletedTodosList = [
      ...todos.slice(0, index),
      ...todos.slice(index + 1),
    ];
    setToDos(deletedTodosList);
  }

  function updateItemFromList(event) {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <div id="heading">
        <h1 className="heading1">To Do List</h1>
      </div>
      <Input
        updateItemFromList={updateItemFromList}
        addItemToList={addItemToList}
        text={text}
      />

      <List todos={todos} deleteFromList={deleteItemFromList} />
    </div>
  );
}

export default App;
