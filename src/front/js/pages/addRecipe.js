import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import Sauces from "../../img/sauces2.png";
import Cauldron from "../../img/cauldron.png";

export const AddRecipe = () => {
  const { actions, store } = useContext(Context);

  const [newRecipe, setnewRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    ocassion: "",
    difficulty: "",
    comments: "",
    user_id: store.loggedUser.id,
  });

  const handleChange = (e) =>
    setnewRecipe({ ...newRecipe, [e.target.name]: e.target.value });

  return (
    <div className="container p-4 mx-0 text-center text-light fs-3 m-auto">
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
          <div className="my-2">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Ingredients:
            </label>
            <textarea
              className="form-control fs-4"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Ingredients"
              name="ingredients"
              onChange={handleChange}
            />
          </div>
          <div className="my-2">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Instructions:
            </label>
            <textarea
              className="form-control fs-4"
              id="exampleFormControlTextarea1"
              rows="3"
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
          <div className="form-group my-1 fs-3">
            <label>Difficulty:</label>
            <label className="list-group-item d-flex align-items-start p-0 m-0">
              <select
                id="inputState"
                className="form-select m-0"
                name="difficulty"
                onChange={handleChange}
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT">Difficulty</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
          </div>
          <div className="my-2">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Comments:
            </label>
            <textarea
              className="form-control fs-4"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Comments"
              name="comments"
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="text-center mt-4">
          <Link to="/userHomePage">
            <button
              className="btn btn-warning p-2 m-2 fs-4"
              onClick={() => {
                actions.addRecipe(newRecipe);
                actions.getRecipes(store.loggedUser.id);
              }}
            >
              Add Recipe
            </button>
          </Link>
          <Link to="/userHomePage">
            <button type="button" className="btn btn-primary p-2 m-2 fs-4">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

AddRecipe.propTypes = {
  history: PropTypes.object,
};
