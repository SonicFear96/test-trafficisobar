import React from "react";
import { useEffect, useState } from "react";

export const ExamplePage = () => {
  const [item, setItem] = useState();

  const getData = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        setItem(data[0].url);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="page-main">
      <div className="container">
        <h2 className="main-title">Пример</h2>
        <ul className="item_list">
          {item ? (
            <li>
              <img src={item} alt="" width="20px" height="20px" />
              <button onClick={getData}>нажми меня</button>
            </li>
          ) : (
            <p className="title--loader">кошки загружаются...</p>
          )}
        </ul>
      </div>
    </main>
  );
};
