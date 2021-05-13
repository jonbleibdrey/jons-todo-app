import React, { useState } from "react";
import "../css/todo.css";
import { MdDeleteForever } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

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
          <button type="submit" className="todo-textbutton"> <FaEdit/></button>
        </form>
      ) : (
        <div className="todo-container">
          <ul>
            <li className="todo-li">
              {text}
              <button onClick={handleDelete}>
                <MdDeleteForever />
              </button>
              <button onClick={() => setOnEdit(true)}>
                <RiEditFill />
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
