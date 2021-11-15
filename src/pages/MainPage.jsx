import React from "react";
import { NavLink } from "react-router-dom";

export const MainPage = () => {
  return (
    <main className="page-main main__container">
      <div className="container">
        <h2 className="main-title">Обо мне</h2>
        <section className="main-content content__container">
          <div className="content-info">
            <h3 className="content-title">Sed ut perspiciatis</h3>
            <p className="content-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
            </p>
            <NavLink to="/example">
              <button className="button content-button">Смотреть работу</button>
            </NavLink>
          </div>
          <div className="content-img">
            <img
              className="img__avatar"
              src="../img/pict--athletic-guy-people.png"
              alt="avatar"
            />
          </div>
        </section>
      </div>
    </main>
  );
};
