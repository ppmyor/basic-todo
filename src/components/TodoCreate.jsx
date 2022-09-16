import React, { useState } from "react";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current++;
  };
  return (
    <section>
      {open ? (
        <div className="input-section">
          <form action="#" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="할 일을 입력 후, Enter를 누르세요"
              id="input-todo"
              onChange={onChange}
              value={value}
            />
          </form>
          <button className="red" onClick={onToggle} open={open}>
            X
          </button>
        </div>
      ) : (
        <button className="indigo" onClick={onToggle} open={open}>
          +
        </button>
      )}
    </section>
  );
}

export default React.memo(TodoCreate);
