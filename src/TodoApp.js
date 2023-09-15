import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./styles.css";
import ShowButtons from "./components/showButtons";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Список дел</h1>
      <AddTodo />
      <TodoList />
      <ShowButtons />
    </div>
  );
}
