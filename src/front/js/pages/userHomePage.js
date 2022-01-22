import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Rice from "../../img/rice.png";
import HotPot from "../../img/hot_pot.png";
import CuteHat from "../../img/cute_hat.png";
import Pot2 from "../../img/pot2.png";
import Veggies from "../../img/veggies.png";
import Bread from "../../img/bread.png";
import Mixer from "../../img/mixer.png";

export const UserHomePage = () => {
  const { store, actions } = useContext(Context);

  actions.getRecipes(store.loggedUser.id);

  return (
    <div className="container my-5 mx-0 text-center text-white bg-dark">
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
          <img src={Pot2} width="65" className="pe-3" />
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
          <img src={Veggies} width="65" className="ps-3" />
        </div>

        <div className="py-3 px-0">
          <img src={Bread} width="65" className="pe-3" />
          <Link to="/profile">
            <button className="btn btn-info btn-lg fs-4">Profile</button>
          </Link>
          <img src={Mixer} width="65" className="ps-3" />
        </div>
      </div>
    </div>
  );
};
