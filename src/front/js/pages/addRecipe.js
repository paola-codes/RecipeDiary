import React, { useState, useContext } from "react";
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
        <h1 className="text-center my-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1027/1027157.png"
            width="65rem"
            className="pe-3"
          />
          Add New Recipe
          <img
            src="https://cdn-icons.flaticon.com/png/512/1027/premium/1027155.png?token=exp=1641003264~hmac=1616bc9f76ee1d2111b6b60d88d60447"
            width="60rem"
            className="ps-2"
          />
        </h1>
        <form className="text-start">
          <div className="form-group my-2">
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Ingredients:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingredients"
              name="ingredients"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Instructions:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Instructions"
              name="instructions"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Ocassion:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ocassion"
              name="ocassion"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Difficulty:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Difficulty"
              name="difficulty"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Comments:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Comments"
              name="comments"
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="text-start">
          <Link to="/userHomePage">
            <button
              className="btn btn-warning btn-lg p-2 m-0 my-3"
              onClick={() => {
                actions.addRecipe(newRecipe);
              }}
            >
              Add Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
