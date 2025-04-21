import React, { useState } from "react";

export default function ItemListManager() {
  const [arr, setArr] = useState([]);
  const [index, setIndex] = useState(0);
  function counter() {
    setIndex((number) => number + 1);
    console.log(arr);
  }
  function addNewItem() {
    setArr([...arr, { id: index, time: Date.now() }]);
    counter();
    console.log(Date.now());
  }
  return (
    <div>
      <button onClick={() => addNewItem()} className="btn">
        Add new Item
      </button>

      {/* <p>{arr}</p> */}
      <ul>
        {arr.map((item) => (
          <div className="card w-96 bg-base-100 card-xs shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Xsmall Card</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts {item.time}
              </p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
