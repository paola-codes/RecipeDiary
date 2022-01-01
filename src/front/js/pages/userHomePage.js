import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const UserHomePage = () => {
  const { store, actions } = useContext(Context);

  actions.getRecipes(store.loggedUser.id);

  return (
    <div className="container m-5 text-center text-white bg-dark">
      <div className="row">
        <h1 className="pb-3 px-0 m-0">
          <img
            src="https://cdn-icons.flaticon.com/png/512/2327/premium/2327390.png?token=exp=1641001001~hmac=68ffdbc0ddf1fb6f07c5720422a7a58c"
            width="60rem"
            className="pe-2"
          />
          Welcome Back {store.loggedUser.full_name}
        </h1>

        <div className="py-3 px-0">
          <img
            src="https://cdn-icons.flaticon.com/png/512/3437/premium/3437568.png?token=exp=1641006265~hmac=c3300c7416915eb065ccd723b9229ea8"
            width="65rem"
            className="pe-3"
          />
          <Link to="/addRecipe">
            <button className="btn btn-primary btn-lg fs-4">Add Recipe</button>
          </Link>
          <img
            src="https://cdn-icons.flaticon.com/png/512/3183/premium/3183463.png?token=exp=1641006272~hmac=df05d477591f90921a454a9c3c26f6dd"
            width="65rem"
            className="ps-3"
          />
        </div>

        <div className="py-3 px-0">
          <img
            src="https://cdn-icons.flaticon.com/png/512/2253/premium/2253457.png?token=exp=1641006318~hmac=1d2b2e355f07b1e6ac474086bff60080"
            width="65rem"
            className="pe-3"
          />
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
          <img
            src="https://cdn-icons-png.flaticon.com/512/1973/1973903.png"
            width="65rem"
            className="ps-3"
          />
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
