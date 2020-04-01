import React from "react";
import TodoForm from "../stateless/todoFormView";
import TodoList from "../stateless/todoListView";
import TodoState from "../stateful/todoState";
import TodoFilter from '../stateful/todoFilteState'
import "../style/todoApp.css";
import FilterView from "../stateless/filterView";
//Presentation Component

const TodoApp = () => {
  const { todos, addTodo, deleteTodo, completeTodo, editTodo, isEdit } = TodoState([]);
  const {dataFilter,Filter,FilterWith} = TodoFilter();
  return (
    <div className="TodoApp">
      <TodoForm saveTodo={text => addTodo(text)}>
      </TodoForm>
      <TodoList
        todos={dataFilter(todos)}
        deleteTodo={index => deleteTodo(index)}
        completeTodo={index => completeTodo(index)}
        saveTodo={(text, index) => editTodo(text, index)}
        isEdit ={(index)=> isEdit(index)}
      >
      </TodoList>
      <FilterView Option={FilterWith} Filter={type => Filter(type)}></FilterView>
    </div>
  );
};

export default TodoApp;
