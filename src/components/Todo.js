import React, { useState } from "react";

const Todo = ({ todoList, setTodoList, todo, text }) => {
  const [update, setUpdate] = useState(text);
  const [onEdit, setOnEdit] = useState(false);

  const handleDelete = () => {
    setTodoList(todoList.filter((elem) => elem.id !== todo.id));
  };

  const handleUpdate = (e) => {
    e.preventDefault()
    setTodoList(
        todoList.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              text: update,
            };
          }
          return item;
        })
      );
      setOnEdit(false);
  };

  const inputTextHandler = (e) => {
    setUpdate(e.target.value)
  };

  return (
    <>
      {onEdit ? (
        <form onSubmit={handleUpdate}>
          <input type="text" onChange={inputTextHandler} value={update}/>
          <button type="submit"> update change</button>
        </form>
      ) : (
        <ul style={{ margin: "5rem" }}>
          <li>
            <h1>Todos</h1>
            {text}
            <button onClick={handleDelete}>delete</button>
            <button onClick={() => setOnEdit(true)}>edit</button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Todo;
