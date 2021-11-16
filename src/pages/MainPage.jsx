import React from "react";
import { NavLink } from "react-router-dom";

export const MainPage = () => {
  return (
    <main className="page-main main__container">
      <div className="container container-main">
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
              src="https://sun9-41.userapi.com/impg/RrD-M5C1YmICMH9rGRUsZIR7c4InHIBOXev3kw/zo6lD_bwPSc.jpg?size=960x1280&quality=96&sign=7245231d179e47881d1539bfbff6ae96&type=album"
              alt="avatar"
            />
          </div>
        </section>
      </div>
    </main>
  );
};
