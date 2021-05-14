import React, { useState } from "react";
import "../css/todo.css";
import { MdDeleteForever } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { VscChecklist } from "react-icons/vsc";

const Todo = ({ todoList, setTodoList, todo, text }) => {
  const [update, setUpdate] = useState(text);
  const [onEdit, setOnEdit] = useState(false);

  const handleDelete = () => {
    setTodoList(todoList.filter((elem) => elem.id !== todo.id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
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
    setUpdate(e.target.value);
  };

  const completeHandler = () => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
            date: new Date().toLocaleString(),
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      {onEdit ? (
        <form onSubmit={handleUpdate}>
          <textarea
            type="text"
            onChange={inputTextHandler}
            value={update}
            cols="40"
            rows="11"
            wrap="hard"
            className="todo-textArea"
          ></textarea>
          <button type="submit" className="todo-textbutton">
            <FaEdit />
          </button>
        </form>
      ) : (
        <div className="todo-container">
          <ul>
            <li className={`${todo.completed ? "completed" : "todo-li"}`}>
              {text}
              <br/>
              <div className="todo-date">
              {todo.date}
              </div>
              <button onClick={handleDelete}>
                <MdDeleteForever />
              </button>
              <button onClick={() => setOnEdit(true)}>
                <RiEditFill />
              </button>
              <button onClick={completeHandler}>
                <VscChecklist />
              </button>
            </li>
          </ul>
        </div>
      )}
      <hr className="todo-hr" />
    </>
  );
};

export default Todo;
