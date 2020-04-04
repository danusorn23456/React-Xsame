import { useState } from "react";

//Stateful Component

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);
  return {
    todos,
    addTodo: todo => {
      setTodos([...todos, { title: todo, isComplete: false }]);
    },
    deleteTodo: index => {
      const oldStateTodo = todos.filter((item, _index) => _index !== index);
      setTodos(oldStateTodo);
    },
    completeTodo: index => {
      const reStateTodo = todos.map((item, _index) => {
        if (_index === index) {
          item.isComplete = !item.isComplete;
        }
        return item;
      });
      setTodos(reStateTodo);
    },
    editTodo: (todo, index) => {
      const reStateTodo = todos.map((item, _index) => {
        if (_index === index) {
          item.title = todo;
        }
        return item;
      });
      setTodos(reStateTodo);
      console.log(reStateTodo[0].title)
    }
  };
};
