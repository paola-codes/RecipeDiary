import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
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
    <div className="container py-4 px-3 text-center text-light fs-4 my-1">
      <h1 className="text-center my-3">
        <img src={Ingredients} width="65" className="pe-2" />
        Edit Recipe Information
        <img src={Milk} width="65" className="ps-2" />
      </h1>

      <form className="text-start">
        <div className="form-group my-1 fs-3">
          <label>Title:</label>
          <input
            type="text"
            className="form-control fs-4"
            placeholder="Edit Title"
            name="title"
            onChange={handleChange}
            value={updatedRecipe.title}
          />
        </div>
        <div className="form-group my-1 fs-3">
          <label>Ingredients:</label>
          <input
            type="text"
            className="form-control fs-4"
            placeholder="Edit Ingredients"
            name="ingredients"
            onChange={handleChange}
            value={updatedRecipe.ingredients}
          />
        </div>
        <div className="form-group my-1 fs-3">
          <label>Instructions:</label>
          <input
            type="text"
            className="form-control fs-4"
            placeholder="Edit Instructions"
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
            placeholder="Edit Ocassion"
            name="ocassion"
            onChange={handleChange}
            value={updatedRecipe.ocassion}
          />
        </div>
        <div className="form-group my-1 fs-3">
          <label>Comments:</label>
          <input
            type="text"
            className="form-control fs-4"
            placeholder="Edit Comments"
            name="comments"
            onChange={handleChange}
            value={updatedRecipe.comments}
          />
        </div>
      </form>
      <div className="text-start">
        <Link to="/userHomePage">
          <button
            className="btn btn-warning p-2 m-0 my-3 fs-4 me-3"
            onClick={() => {
              actions.updateRecipe(updatedRecipe, id);
            }}
          >
            Save Changes
          </button>
        </Link>
        <Link to="/recipesList">
          <button type="button" className="btn btn-primary p-2 m-0 my-3 fs-4">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};
