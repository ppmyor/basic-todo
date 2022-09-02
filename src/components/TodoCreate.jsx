import React from "react";

function TodoCreate({ open }) {
  return (
    <section>
      {open ? (
        <button className="indigo">+</button>
      ) : (
        <div className="input-section">
          <form action="#">
            <input type="text" placeholder="할 일을 입력 후, Enter를 누르세요" id="input-todo" />
          </form>
          <button className="red">X</button>
        </div>
      )}
    </section>
  );
}

export default TodoCreate;
