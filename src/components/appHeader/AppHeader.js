import "./appHeader.scss";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="app__header">
      <Link to="/">
        <h1 className="app__title">
          <a href="#">
            <span>Marvel</span> information portal
          </a>
        </h1>
      </Link>

      <nav className="app__menu">
        <ul>
          <Link to="/">
            <li>
              <a href="#">Characters</a>
            </li>
          </Link>
          /
          <Link to="/comics">
            <li>
              <a href="#">Comics</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
