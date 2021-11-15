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
    <main className="page-main main__container">
      <div className="container">
        <h2 className="main-title">Пример</h2>
        <section className="content__list-container">
          <h3 className="content-title">Картинка с котом</h3>
          {item ? (
            <div className="content__item">
              <img className="item__img" src={item} alt="cata data" />
              <button className="button item__button" onClick={getData}>
                загрузить другую
              </button>
            </div>
          ) : (
            <p className="title--loader">кошки загружаются...</p>
          )}
        </section>
      </div>
    </main>
  );
};
