import React from "react";
import "../style/todoApp.css";
import TodoState from "../stateful/TodoState";
import TodoForm from "../stateless/TodoFormView";
import TodoList from "../stateless/TodoListView";
import FilterView from "../stateless/FilterView";
import TodoFilter from '../stateful/TodoFilteState'

//Presentation Component

const TodoApp = () => {

  const { todos, addTodo, deleteTodo, completeTodo, editTodo} = TodoState([]);
  const { FilteredList, Filter, FilterWith} = TodoFilter('all');

  return (
    <div className="TodoApp">
      <TodoForm saveTodo={text => addTodo(text)}/>
      <FilterView Option={FilterWith} Filter={type => Filter(type)}/>
      <TodoList
        todos={FilteredList(todos)}
        deleteTodo={index => deleteTodo(index)}
        completeTodo={index => completeTodo(index)}
        saveTodo={(text, index) => editTodo(text, index)}
      />
    </div>
  );
};

export default TodoApp;
