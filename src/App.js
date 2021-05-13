import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <div className="App">
        <h1>
          Jonathans <mark>Magical</mark> , To-Do List
        </h1>
      </div>
      <div className="form">
        <Form
          input={input}
          setInput={setInput}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </div>
      <div className="todolist">
        <Todolist todoList={todoList} setTodoList={setTodoList} />
      </div>
    </>
  );
}

export default App;
