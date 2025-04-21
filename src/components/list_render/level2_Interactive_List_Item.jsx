import React, { useState } from "react";

const employeeName = [
  {
    id: 1,
    name: "Tem",
  },
  {
    id: 2,
    name: "Nolimit",
  },
];

export default function LevelTwo() {
  const [clickedId, setClickedId] = useState(null);
  const handleClick = (id) => {
    setClickedId((prevNumber) => (prevNumber === id ? null : id));
    console.log(clickedId);
  };
  const listEmployee = employeeName.map((employee) => (
    <li className="" key={employee.id}>
      <button
        className="w-16 bg-red-400 hover:bg-red-600 rounded-md my-1"
        onClick={() => handleClick(employee.id)}
      >
        {employee.name}
      </button>
      {clickedId === employee.id && <p className="">ID: {employee.id}</p>}
    </li>
  ));

  return (
    <ul>
      <p>{clickedId ? `Your clicked ID: ${clickedId}` : "Click a name"}</p>
      {listEmployee}
    </ul>
  );
}
