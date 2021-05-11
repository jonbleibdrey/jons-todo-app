import React from "react";
import Todo from "./Todo";

const Todolist = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          todoList={todoList}
          setTodoList={setTodoList}
          todo={todo}
          text={todo.text}
        />
      ))}
    </div>
  );
};

export default Todolist;
