//src/componets/level1_Basic_List_Rendering.jsx

import React from "react";
const employeeName = [
  { id: 1, name: "Tem" },
  { id: 2, name: "Mine" },
];
const listEmployee = employeeName.map((employee) => (
  <li className="list-none" key={employee.id}>
    <button className="bg-sky-500 hover:bg-sky-700 w-12 rounded-md mb-2 btn">
      {employee.name}
    </button>
  </li>
));

export default function LevelOne() {
  return <ul className="flex flex-col">{listEmployee}</ul>;
}
