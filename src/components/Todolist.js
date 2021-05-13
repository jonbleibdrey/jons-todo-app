import React from "react";
import Todo from "./Todo";
import "../css/todoList.css";

const Todolist = ({ todoList, setTodoList }) => {
  return (
    <>
      <div className="todoList-container">
        {todoList.length === 0 ? (
          <div className="todoList-div">
            <h1 className="todoList-h1">No task's yet!</h1>
          </div>
        ) : (
          <>
          <div className="todoList-containerFlex">
            <div className="todoList-div1">
              <h1 className="todoList-h1">To do:</h1>
            </div>

            <div className="todoList-div2">
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

          </div>
          </>
        )}
      </div>
    </>
  );
};

export default Todolist;
