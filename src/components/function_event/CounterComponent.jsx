import React, { useState } from "react";

export default function CounterComponent() {
  const [number, setNumber] = useState(0);
  function increment() {
    setNumber((prev) => prev + 1);
  }
  function decrement() {
    setNumber((prev) => prev - 1);
  }
  return (
    <div className="flex items-center">
      <button
        className="btn m-2 btn btn-outline btn-error"
        onClick={() => decrement()}
      >
        Decrement
      </button>
      <p className="m-2">{number}</p>
      <button
        className="btn m-2 btn btn-outline btn-primary"
        onClick={() => increment()}
      >
        Increment
      </button>
    </div>
  );
}
