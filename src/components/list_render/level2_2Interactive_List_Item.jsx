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

export default function LevelTwoPointTwo() {
  const [activeIds, setActiveIds] = useState([]);
  const handleClick = (id) => {
    // Toggle function: Adds the ID if not present, removes it if already in the array
    setActiveIds((prev) =>
      // Check if the ID is already in the array
      prev.includes(id)
        ? // If yes → remove it using filter (keep all except the clicked one)x
          prev.filter((i) => i !== id)
        : // If no → add it to the array using spread operator
          [...prev, id]
    );
  };

  return (
    <ul>
      {employeeName.map((employee) => (
        <li key={employee.id}>
          <button className= {`w-16 hover:bg-sky-600 rounded-md my-1 ${activeIds.includes(employee.id)? "bg-sky-600":"bg-sky-400"}`} onClick={()=>handleClick(employee.id)}>
            {employee.name}
          </button>
          {activeIds.includes(employee.id) && (
            <p className="text-sm text-gray-700 mt-1">
              ID: {employee.id}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
