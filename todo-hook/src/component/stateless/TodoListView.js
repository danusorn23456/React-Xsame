import React, { Fragment } from "react";

//Stateless Component

const TodoList = ({ todos, deleteTodo, completeTodo, saveTodo }) => {
  return (
    <Fragment>
      <ul className="unorder-wrapper">
        {todos.map((item, index) => (
          <li key={`${item}-${index}`} className="list-wrapper neumorp">
            <form
              onSubmit={event => {
                event.preventDefault();
              }}
            >
              <input
                className={`todo ${
                  item.isComplete === true ? `todo-complete-line` : ""
                }`}
                type="text"
                onChange={event => {
                  event.preventDefault();
                  saveTodo(event.target.value, index);
                }}
                value={item.title}
              />
            </form>
            <ul className="action-wrapper">
              <button
                className={`action-item ${
                  item.isComplete === true ? "todo-complete" : ""
                }`}
                onClick={e => {
                  e.preventDefault();
                  completeTodo(index);
                }}
              >
                Complete
              </button>
              <button
                className="action-item"
                onClick={e => {
                  e.preventDefault();
                  deleteTodo(index);
                }}
              >
                Delete
              </button>
            </ul>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default TodoList;
