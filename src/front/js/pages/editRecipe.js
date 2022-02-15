import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Ingredients from "../../img/ingredients.png";
import Milk from "../../img/milk.png";

export const EditRecipe = () => {
  const { store, actions } = useContext(Context);

  let { id } = useParams();

  let recipe = store.recipeList.find((item, index) => {
    if (item.id == id) {
      return item;
    }
  });

  const [updatedRecipe, setUpdatedRecipe] = useState(recipe);

  const handleChange = (e) => {
    setUpdatedRecipe({ ...updatedRecipe, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-4 px-3 mx-0 mx-auto text-center text-light fs-4 my-1">
      <h1 className="text-center my-3">
        <img src={Ingredients} width="65" className="pe-2" />
        Edit Recipe Information
        <img src={Milk} width="65" className="ps-2" />
      </h1>

      <form style={{ width: "85%" }} className="m-auto p-0 mb-3 text-start">
        <div className="form-group my-1 fs-3">
          <label>Title:</label>
          <input
            type="text"
            className="form-control fs-4"
            name="title"
            onChange={handleChange}
            value={updatedRecipe.title}
          />
        </div>
        <div className="my-1 fs-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Ingredients:
          </label>
          <textarea
            className="form-control fs-4"
            id="exampleFormControlTextarea1"
            rows="3"
            name="ingredients"
            onChange={handleChange}
            value={updatedRecipe.ingredients}
          />
        </div>
        <div className="my-1 fs-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Instructions:
          </label>
          <textarea
            className="form-control fs-4"
            id="exampleFormControlTextarea1"
            rows="3"
            name="instructions"
            onChange={handleChange}
            value={updatedRecipe.instructions}
          />
        </div>
        <div className="form-group my-1 fs-3">
          <label>Ocassion:</label>
          <input
            type="text"
            className="form-control fs-4"
            name="ocassion"
            onChange={handleChange}
            value={updatedRecipe.ocassion}
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
              <option value="DEFAULT">{updatedRecipe.difficulty}</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
        </div>
        <div className="my-1 fs-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Comments:
          </label>
          <textarea
            className="form-control fs-4"
            id="exampleFormControlTextarea1"
            rows="3"
            name="comments"
            onChange={handleChange}
            value={updatedRecipe.comments}
          />
        </div>
        <div className="form-group my-1 fs-3">
          <label>Favorite:</label>
          <label className="list-group-item d-flex align-items-start p-0 m-0">
            <select
              id="inputState"
              className="form-select m-0"
              name="favorite"
              onChange={handleChange}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT">{updatedRecipe.favorite}</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>
      </form>
      <div className="text-center mt-2">
        <Link to="/userHomePage">
          <button
            className="btn btn-warning p-2 m-2 fs-4"
            onClick={() => {
              actions.updateRecipe(updatedRecipe, id);
              actions.getRecipes(store.loggedUser.id);
            }}
          >
            Save Changes
          </button>
        </Link>
        <Link to="/recipesList">
          <button type="button" className="btn btn-primary p-2 m-2 fs-4">
            Recipes List
          </button>
        </Link>
      </div>
    </div>
  );
};
