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
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-opacity-75">
      <div className="container-fluid d-flex px-3">
        <div className="d-flex justify-content-start align-self-center m-0 p-0">
          <a className="navbar-brand" href="#">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F266%2F266662.png&f=1&nofb=1"
              height="35rem"
              className="p-0 m-0"
            />
          </a>
          <Link
            to="/userHomePage"
            className="text-decoration-none text-dark fs-3"
          >
            <strong>My Online Recipe Book</strong>
          </Link>
        </div>
        <div className="d-flex justify-content-end align-self-center m-0 p-0">
          <div className="dropdown me-3">
            <button
              className="btn btn-primary dropdown-toggle fs-5"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Favorites
              <span className="badge bg-secondary ms-2 me-1">
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
                  <Link
                    to={`/recipeDetails/${favorite}`}
                    className="text-decoration-none"
                  >
                    <span
                      className={`fs-6 ${
                        isHovering == index ? "text-primary" : "text-dark"
                      }`}
                    >
                      {store.recipeList.map((recipe, index) => {
                        if (recipe.id == favorite) {
                          return recipe.title;
                        }
                      })}
                    </span>
                  </Link>

                  <span
                    onClick={() => actions.deleteFavorite(favorite)}
                    className={`text-danger ${
                      isHovering == index ? "" : "hidden"
                    } ms-2 fs-6`}
                  >
                    <i className="fas fa-trash-alt" />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-end">
            <Link to="/">
              <button className="btn btn-danger m-0 fs-5">Log Out</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

/* 

className={`text-dark ${
  isHovering == index ? "" : "hidden"
  } ps-2`}

*/
