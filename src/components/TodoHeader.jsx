import React from "react";
import { useTodoState } from "../TodoContext";

function TodoHeader() {
  const todos = useTodoState();
  const undoneTodos = todos.filter((todo) => !todo.done);

  let now = new Date();
  const dateString = now.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = now.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <header>
      <h1 className="fs-large">{dateString}</h1>
      <h3 className="fs-medium">{dayName}</h3>
      <span>할 일 {undoneTodos.length}개 남음</span>
    </header>
  );
}

export default TodoHeader;
