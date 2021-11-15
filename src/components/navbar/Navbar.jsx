import { NavLink } from "react-router-dom";
import "./Navbar.style.css";

export const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink activeClassName="active__link" to="/main">
            Главная
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink activeClassName="active__link" to="/example">
            Пример
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
