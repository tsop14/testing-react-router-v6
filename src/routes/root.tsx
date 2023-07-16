import { Link, Outlet } from "react-router-dom";
import "./root.css";

const Root = () => {
  return (
    <div className="app">
      <header>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list__item">
              <Link to="/dog/rafa">Dog</Link>
            </li>
            <li className="nav__list__item">
              <Link to="/cat/nyan">Cat</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Root;
