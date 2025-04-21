import React, { useEffect, useState } from "react";

export default function DataFetcher() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setData(json);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setData("No Data Loading");
      setError("Failed to fetch data. Please try again later.");
      // alert(e)
      setIsLoading(true);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <ul>
          {data.map((elem)=>
            <li key={elem.id}><h1>{elem.title}s</h1></li>
        )}
        </ul>
      )}
      {error && <h1>The Error is {error}</h1>}
    </div>
  );
}
