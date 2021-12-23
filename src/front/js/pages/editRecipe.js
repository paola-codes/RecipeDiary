import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Context } from "../store/appContext";

export const EditRecipe = () => {
  const { store, actions } = useContext(Context);

  const [updatedRecipe, setUpdatedRecipe] = useState({
    title: store.recipeList[1].title,
    ingredients: store.recipeList[1].ingredients,
    instructions: store.recipeList[1].instructions,
    ocassion: store.recipeList[1].ocassion,
    difficulty: store.recipeList[1].difficulty,
    comments: store.recipeList[1].comments,
  });

  const handleChange = (e) =>
    setUpdatedRecipe({ ...updatedRecipe, [e.target.name]: e.target.value });

  return (
    <div className="container py-4 px-3 text-center text-light fs-4 my-1">
      <h1 className="text-center my-3">Recipe Information</h1>

      <h2 className="mb-3">Change Recipe information on the fields below</h2>

      <form className="text-start">
        <div className="form-group my-1">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Title"
            name="title"
            onChange={handleChange}
            value={updatedRecipe.title}
          />
        </div>
        <div className="form-group my-1">
          <label>Ingredients</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Ingredients"
            name="ingredients"
            onChange={handleChange}
            value={updatedRecipe.ingredients}
          />
        </div>
        <div className="form-group my-1">
          <label>Instructions</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Instructions"
            name="instructions"
            onChange={handleChange}
            value={updatedRecipe.instructions}
          />
        </div>
        <div className="form-group my-1">
          <label>Ocassion</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Ocassion"
            name="ocassion"
            onChange={handleChange}
            value={updatedRecipe.ocassion}
          />
        </div>
        <div className="form-group my-1">
          <label>Comments</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Comments"
            name="comments"
            onChange={handleChange}
            value={updatedRecipe.comments}
          />
        </div>
      </form>
      <Link to="/userHomePage">
        <button
          className="btn btn-warning btn-lg p-2 w-75 m-auto my-3"
          onClick={() => {
            actions.updatedRecipe(updatedRecipe);
          }}
        >
          Save Changes
        </button>
      </Link>
    </div>
  );
};
