import React from "react";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useTodoState();

  return (
    <main>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
        ))}
      </ul>
    </main>
  );
}

export default TodoList;
