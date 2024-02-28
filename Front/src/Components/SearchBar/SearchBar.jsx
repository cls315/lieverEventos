import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getByName } from "../../redux/actions";
import style from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import CreateAcount from "../../Views/CreateAcount/CreateAcount";

const SearchBar = () => {
  const { btnUser } = style;

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const [showList, setShowList] = useState(false);

  const toggleList = (event) => {
    event.preventDefault();
    setShowList(!showList);
  };

  /*const handleOptionSelect = (event) => {
    setShowSelect(false);
  };*/

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByName(search));
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </button>
            <div>
              <div>
                <button onClick={toggleList}>
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
              {showList && (
                <ul>
                  <li>
                    <Link to="/create-acount">Crear Cuenta</Link>
                  </li>
                  <li>
                    <Link to="/login">Iniciar Sesion</Link>
                  </li>
                </ul>
              )}
            </div>

            <FontAwesomeIcon icon={faShoppingCart} />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
