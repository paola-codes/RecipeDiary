import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ChefHat from "../../img/chef_hat.png";
import OpenBook from "../../img/open_recipe.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 mx-0 text-white">
      <h1 className="mb-5 pt-3">
        <img src={ChefHat} width="65" className="pe-3" />
        Welcome to RecipeDiary
        <img src={OpenBook} width="65" className="ps-3" />
      </h1>
      <h2>Sign Up Now!</h2>
      <Link to="/signUp">
        <button type="button" className="btn btn-primary m-4 fs-4">
          Sign Up
        </button>
      </Link>
      <h2>Already a member?</h2>
      <Link to="/login">
        <button type="button" className="btn btn-warning m-4 fs-4">
          Login
        </button>
      </Link>
    </div>
  );
};
