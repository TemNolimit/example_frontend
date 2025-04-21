import React, { useState, useEffect } from "react";

export default function RefetchingOnDemand() {
  const [data, setData] = useState([]);
  const [reloadTrigger, setReloadTrigger] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  async function IncreaseTricker() {
    setCounter((prev) => prev + 1);
  }
  async function DecreaseTricker() {
    setCounter((prev) => prev - 1);
  }
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${counter}`
        );
        if (!response.ok) {
          throw new Error("Fetching API Error");
        }
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        alert("Alert when fetch data");
      }
    }
    fetchData();
  }, [reloadTrigger, counter]);
  function refreshData() {
    setReloadTrigger((prev) => !prev);
  }
  return (
    <div>
      <p>{counter}</p>
      {isLoading ? <h1>...Is Loading</h1> : <h1>{data.title}</h1>}
      <div className="flex">
        <button className="btn btn-error" onClick={DecreaseTricker}>
          Decreases
        </button>
        <button className="btn btn-primary" onClick={IncreaseTricker}>
          Increase
        </button>
        <button className="btn btn-accent" onClick={refreshData}>
          Refresh
        </button>
      </div>
    </div>
  );
}
