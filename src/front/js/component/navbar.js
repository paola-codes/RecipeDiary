import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [isHovering, setisHovering] = React.useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);

  let show = "";

  if (showDropdown) {
    show = "show";
  }

  return (
    <nav className="navbar navbar-light bg-light bg-opacity-75">
      <div className="container-fluid d-flex px-5">
        <a className="navbar-brand d-flex justify-content-start" href="#">
          <Link to="/home">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F266%2F266662.png&f=1&nofb=1"
              height="35rem"
              className="p-0 m-0 pe-2"
            />
          </Link>
          My Online Recipe Book
        </a>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Favorites
            <span className="badge bg-secondary mx-1">
              {store.favoritesList.length}
            </span>
          </button>
          <ul
            className={
              store.favoritesList.length > 0
                ? "dropdown-menu " + show
                : "d-none"
            }
            aria-labelledby="dropdownMenuButton1"
          >
            {store.favoritesList.map((favorite, index) => (
              <li
                key={index}
                onMouseEnter={() => setisHovering(index)}
                onMouseLeave={() => setisHovering(-1)}
                className="px-2 py-1"
              >
                {favorite}
                <span
                  className={`text-dark ${
                    isHovering == index ? "" : "hidden"
                  } ps-2`}
                  onClick={() => actions.deleteFavorite(favorite)}
                >
                  <i className="fas fa-trash-alt" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
