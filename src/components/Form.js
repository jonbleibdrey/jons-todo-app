import React from "react";
import "../css/form.css"

const Form = ({ input, setInput, todoList, setTodoList }) => {
  const HandleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
      e.preventDefault()
      setTodoList([...todoList, {text: input, id: Math.random() * 1000 }])
      setInput("")
  }

  return (
    <div className="form-div">
      <form>
        <input
        className="form-input"
          type="text"
          onChange={HandleChange}
          value={input}
        />
        <hr/>
        <button onClick={addTodo} type="submit">
          {" "}
          Add To List
        </button>
      </form>
    </div>
  );
};

export default Form;
