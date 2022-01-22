import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Sauces from "../../img/sauces2.png";
import Cauldron from "../../img/cauldron.png";

export const AddRecipe = () => {
  const { actions, store } = useContext(Context);

  const [newRecipe, setnewRecipe] = useState({
    title: null,
    ingredients: null,
    instructions: null,
    ocassion: null,
    difficulty: null,
    comments: null,
    user_id: store.loggedUser.id,
  });

  const handleChange = (e) =>
    setnewRecipe({ ...newRecipe, [e.target.name]: e.target.value });

  return (
    <div className="container p-4 text-center text-light fs-3 m-auto">
      <div>
        <h1 className="text-center my-3">
          <img src={Cauldron} width="65" className="pe-3" />
          Add New Recipe
          <img src={Sauces} width="65" className="ps-2" />
        </h1>
        <form className="text-start">
          <div className="form-group my-2">
            <label>Title:</label>
            <input
              type="text"
              className="form-control fs-4"
              placeholder="Title"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Ingredients:</label>
            <input
              type="text"
              className="form-control fs-4"
              placeholder="Ingredients"
              name="ingredients"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Instructions:</label>
            <input
              type="text"
              className="form-control fs-4"
              placeholder="Instructions"
              name="instructions"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Ocassion:</label>
            <input
              type="text"
              className="form-control fs-4"
              placeholder="Ocassion"
              name="ocassion"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Difficulty:</label>
            <input
              type="text"
              className="form-control fs-4"
              placeholder="Difficulty"
              name="difficulty"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Comments:</label>
            <input
              type="text"
              className="form-control fs-4"
              placeholder="Comments"
              name="comments"
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="text-start">
          <Link to="/userHomePage">
            <button
              className="btn btn-warning btn-lg p-2 m-0 me-3 my-3 fs-4"
              onClick={() => {
                actions.addRecipe(newRecipe);
              }}
            >
              Add Recipe
            </button>
          </Link>
          <Link to="/userHomePage">
            <button
              type="button"
              className="btn btn-primary btn-lg p-2 m-0 my-3 fs-4"
            >
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
