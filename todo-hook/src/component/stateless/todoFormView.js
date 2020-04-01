import React from "react";
import TodoInput from "../stateful/inputState";

//Stateless Component

const TodoForm = ({ saveTodo }) => {

  const { text, onChangeHandle, reset } = TodoInput("");

  return (
    <form className="todo-form"
      onSubmit={e => {
        e.preventDefault();
        saveTodo(text);
        reset();
      }}
    >
      <input className="input-box neumorp"
        type="text"
        placeholder="what you want todo ?"
        onChange={event => {
          onChangeHandle(event.target.value);
        }}
        value={text}
      />
    </form>
  );
};

export default TodoForm;
