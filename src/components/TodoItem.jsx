import React from "react";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

function TodoItem({ id, text, done }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <li>
      <div className="check-circle" done={`${done}`} onClick={onToggle}>
        {done && <MdDone />}
      </div>
      <span done={`${done}`}>{text}</span>
      <MdDelete className="delete-btn" onClick={onRemove} />
    </li>
  );
}

export default React.memo(TodoItem);
