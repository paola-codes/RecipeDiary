import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Rice from "../../img/rice.png";
import HotPot from "../../img/hot_pot.png";
import CuteHat from "../../img/cute_hat.png";
import CookBook from "../../img/cook_book2.png";
import Tools from "../../img/tools.png";

export const UserHomePage = () => {
  const { store, actions } = useContext(Context);

  actions.getRecipes(store.loggedUser.id);

  return (
    <div className="container m-5 text-center text-white bg-dark">
      <div className="row">
        <h1 className="pb-3 px-0 m-0">
          <img src={CuteHat} width="65" className="pe-2" />
          Welcome Back {store.loggedUser.full_name}
        </h1>

        <div className="py-3 px-0">
          <img src={HotPot} width="65" className="pe-3" />
          <Link to="/addRecipe">
            <button className="btn btn-primary btn-lg fs-4">Add Recipe</button>
          </Link>
          <img src={Rice} width="65" className="ps-3" />
        </div>

        <div className="py-3 px-0">
          <img src={CookBook} width="65" className="pe-3" />
          <Link to="/recipesList">
            <button
              className="btn btn-warning btn-lg fs-4"
              onClick={() => {
                actions.getRecipes(store.loggedUser.id);
              }}
            >
              Recipes List
            </button>
          </Link>
          <img src={Tools} width="65" className="ps-3" />
        </div>
      </div>
      <div className="mx-0 mt-5 px-0">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};
