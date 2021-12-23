import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

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
    <div className="container p-4 text-center text-light fs-6 m-auto">
      <div>
        <h1 className="text-center my-3">Add Recipe</h1>
        <form className="text-start">
          <div className="form-group my-2">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Ingredients</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingredients"
              name="ingredients"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Instructions</label>
            <input
              type="text"
              className="form-control"
              placeholder="Instructions"
              name="instructions"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Ocassion</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ocassion"
              name="ocassion"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Difficulty</label>
            <input
              type="text"
              className="form-control"
              placeholder="Difficulty"
              name="difficulty"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Comments</label>
            <input
              type="text"
              className="form-control"
              placeholder="Comments"
              name="comments"
              onChange={handleChange}
            />
          </div>
        </form>
        <Link to="/userHomePage">
          <button
            className="btn btn-warning btn-lg p-2 m-3"
            onClick={() => {
              actions.addRecipe(newRecipe);
            }}
          >
            Add Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};
