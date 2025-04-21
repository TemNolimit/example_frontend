import React, { useState, useEffect } from "react";

// `https://jsonplaceholder.typicode.com/todos/${counter}`

export default function Pagenition() {
    
  const [data, setData] = useState([]);
  const [dataPage, setDataPage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const dataPerPage = 10;
  useEffect(() => {
    async function fetchData() {

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        );
        if (!response.ok) {
          throw new Error("Error when loading response");
        }
        const json = await response.json();
        setData(json);
        console.log(json);
        // fetchPageData(json, dataPerPage, page);
        console.log(dataPage);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);



  useEffect(() => {
    if (data.length > 0) {
      const newArr = data.slice((page - 1) * dataPerPage, page * dataPerPage);
      setDataPage(newArr);
    }
  }, [data, page]);

  function increasePage() {
    setPage((prev) => prev + 1);
  }
  function decreasePage() {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  }

  return (
    <div>
      <h1>Pagnition</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {dataPage.map((elem) => (
            <li key={elem.id}>
              <h1>{elem.title}</h1>
            </li>
          ))}
        </ul>
      )}
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>userID</th>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            {dataPage.map((elem) => (
              <tr key={elem.id}>
                <td>{elem.userId}</td>
                <td>{elem.id}</td>
                <td>{elem.title}</td>
                <td>{elem.completed ? "TRUE" : "FALSE"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="btn" onClick={decreasePage}>
        Previous
      </button>
      <button className="btn" onClick={increasePage}>
        Next
      </button>
    </div>
  );
}
