import React, { useState, useEffect } from "react";

export default function FilterPagenition() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataInPage, setDataInPage] = useState([]);
  const [page, setPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const [groupUserId, setGroupUserId] = useState(0);
  const [maxPage, setMaxPage] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  function increasePage() {
    setPage((prev) => (prev < maxPage ? prev + 1 : prev));
  }
  function decreasePage() {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  }

  useEffect(() => {
    if (data.length > 0) {
      if (groupUserId !== 0) {
        const arrGroupUserId = data.filter(
          (number) => number.userId === groupUserId
        );
        const arr = arrGroupUserId.slice(
          (page - 1) * rowPerPage,
          page * rowPerPage
        );
        setDataInPage(arr);
      } else {
        const arr = data.slice((page - 1) * rowPerPage, page * rowPerPage);
        setDataInPage(arr);
      }
    }
  }, [data, page, rowPerPage, groupUserId]);
  useEffect(() => {
    setPage(1);
    async function getTheLastPage() {
      if (data.length > 0 && rowPerPage !== 0) {
        const maxlength = Math.ceil(data.length / rowPerPage);
        setMaxPage(maxlength);
      }
    }
    getTheLastPage();
  }, [rowPerPage, groupUserId]);

  return (
    <div>
      <div className="flex items-center">
        <p className="text-lg mr-2 my-4">Filter Group UserID: </p>
        <input
          type="text"
          className="input"
          onChange={(event) => setGroupUserId(parseInt(event.target.value))}
        />
      </div>
      <div className="flex items-center">
        <p className="text-lg mr-2">Number of row: </p>
        <input
          type="number"
          className="input ml-7"
          onChange={(event) => setRowPerPage(parseInt(event.target.value))}
        />
      </div>
      <div className="flex justify-between mx-16 items-center">
        <button className="btn" onClick={decreasePage}>
          Previous
        </button>
        <div className="join">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            checked="checked"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
          />

        </div>
        <button className="btn" onClick={increasePage}>
          Next
        </button>
      </div>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="hover:bg-gray-100 cursor-pointer text-center ">
                userID
              </th>
              <th className="hover:bg-gray-100 cursor-pointer text-center ">
                id
              </th>
              <th className="hover:bg-gray-100 cursor-pointer text-center ">
                title
              </th>
              <th className="hover:bg-gray-100 cursor-pointer text-center ">
                completed
              </th>
            </tr>
          </thead>
          <tbody>
            {dataInPage.map((elem) => (
              <tr key={elem.id}>
                <td className="text-center">{elem.userId}</td>
                <td className="text-center">{elem.id}</td>
                <td className="text-left">{elem.title}</td>
                <td className="text-center">
                  {elem.completed ? "TRUE" : "FALSE"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
