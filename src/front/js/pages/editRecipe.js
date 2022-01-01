import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const EditRecipe = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

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
      <h1 className="text-center my-3">Recipe Information</h1>

      <h4 className="mb-3 text-start">
        Change Recipe information on the fields below
      </h4>

      <form className="text-start">
        <div className="form-group my-1">
          <label>Title:</label>
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
          <label>Ingredients:</label>
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
          <label>Instructions:</label>
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
          <label>Ocassion:</label>
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
          <label>Comments:</label>
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
      <div className="text-start">
        <Link to="/userHomePage">
          <button
            className="btn btn-warning p-2 m-0 my-3"
            onClick={() => {
              actions.updateRecipe(updatedRecipe, id);
            }}
          >
            Save Changes
          </button>
        </Link>
      </div>
    </div>
  );
};
