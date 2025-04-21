import React, { useState, useEffect } from "react";

export default function EnhanceError() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("Error Fetching data from API");
      }
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    } catch (e) {
      console.log(e)
      setError("Error");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map((elem) => (
            <li key={elem.id}>{elem.title}</li>
          ))}
        </ul>
      )}
      {error && <h1 className="text-red-500 font-bold text-sans text-4xl">{error}</h1>}
    </div>

  );
}
