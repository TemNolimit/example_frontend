import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [textInput, setTextInput] = useState("");
  const [arrTodo, setArrTodo] = useState([]);
  function handleAdd() {
    setArrTodo((prev) => [...prev, { id: uuidv4(), text: textInput }]);
    console.log(arrTodo);
  }
  function handelDelete(id) {
    const ItemArr = [...arrTodo];
    const filteredItemArr = ItemArr.filter((todo) => todo.id !== id);
    setArrTodo(filteredItemArr);
    console.log(id);
  }
  return (
    <div>
      <input
        type="text"
        className="input"
        placeholder="Type here"
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button onClick={() => handleAdd()} className="btn btn-primary">
        Submit
      </button>
      <ul>
        {arrTodo.map((todo) => (
          <li key={todo.id}>
            <div className="card w-96 bg-base-100 card-xs shadow-sm">
              <div className="card-body">
                {/* <h2 className="card-title">Xsmall Card</h2> */}

                <div className="justify-end items-center card-actions">
                  <p className="card-title">{todo.text}</p>
                  <button
                    className="btn btn-error"
                    onClick={() => handelDelete(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
