import React from "react";

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
    <div>
      <form>
        <input
          style={{ padding: "5rem", textAlign: "center" }}
          type="text"
          onChange={HandleChange}
          value={input}
        />
        <button onClick={addTodo} type="submit"
          style={{
            margin: "1rem",
            padding: "2rem 4rem",
            background: "none",
            border: "0.1rem solid blue",
            color: "blue",
            fontSize: "2.4rem",
            borderRadious: "1rem",
          }}
        >
          {" "}
          add todo
        </button>
      </form>
    </div>
  );
};

export default Form;
