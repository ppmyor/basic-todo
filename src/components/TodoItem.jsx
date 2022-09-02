import React from "react";
import { MdDone, MdDelete } from "react-icons/md";

function TodoItem({ text, done }) {
  return (
    <li>
      <span className="check-circle">{done && <MdDone />}</span>
      <span>{text}</span>
      <MdDelete className="delete-btn" />
    </li>
  );
}

export default TodoItem;
