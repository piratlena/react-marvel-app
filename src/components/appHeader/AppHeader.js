import "./appHeader.scss";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header className="app__header">
      <Link to="/">
        <h1 className="app__title">
          <span>Marvel</span> information portal
        </h1>
      </Link>

      <nav className="app__menu">
        <ul>
          <Link to="/">
            <li>
              <h3>Characters</h3>
            </li>
          </Link>
          /
          <Link to="/comics">
            <li>
              <h3>Comics</h3>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
