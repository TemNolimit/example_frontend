// import { useState } from "react";
import React, { useState } from "react";

export default function ToggleVisibility() {
  const [isClick, setClick] = useState(false);
  function toggleClick() {
    setClick((prev) => (prev = !prev));
  }
  return (
    <div>
      {isClick ? (
        <button className="btn btn-soft btn-accent" onClick={toggleClick}>
          Hide
        </button>
      ) : (
        <button className="btn btn-soft btn-primary" onClick={toggleClick}>
          Show
        </button>
      )}
      {isClick && (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
          quisquam.
        </p>
      )}
    </div>
  );
}
