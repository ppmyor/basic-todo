import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <main>
      <ul>
        <TodoItem text="프로젝트 생성 하기" done={true} />
        <TodoItem text="프로젝트 생성 하기" done={false} />
      </ul>
    </main>
  );
}

export default TodoList;
