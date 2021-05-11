import React from "react";

const Todo = ({ todoList, setTodoList, todo, text }) => {

    const handleDelete = () => {
        setTodoList(todoList.filter((elem) => elem.id !== todo.id))
    }

  return (
    <ul>
      <li>
        <div>
          <h1>Todos</h1>
          {text}
          <button onClick={handleDelete}>delete</button>
        </div>
      </li>
    </ul>
  );
};

export default Todo;
