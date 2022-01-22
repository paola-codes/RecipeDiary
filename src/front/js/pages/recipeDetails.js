import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CookBook from "../../img/cook_book2.png";
import Tools from "../../img/tools.png";

export const RecipeDetails = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  let recipe = store.recipeList.find((item, index) => {
    if (item.id == id) {
      return item;
    }
  });

  if (recipe) {
    return (
      <div className="container text-center text-light mx-0 p-4 m-0">
        <h1 className="text-center">
          <img src={CookBook} width="55" className="pe-2" />
          {recipe.title}
          <img src={Tools} width="55" alt="..." />
        </h1>

        <div
          style={{ width: "85%" }}
          className="row p-0 m-0 d-inline-flex align-content-center flex-wrap my-3"
        >
          <div className="col mx-3 mb-3 p-2 bg-light text-dark">
            <h4>
              <strong>Ingredients:</strong>
            </h4>
            <h5>{recipe.ingredients}</h5>
          </div>
          <div className="col mx-3 mb-3 p-2 bg-light text-dark">
            <h4>
              <strong>Instructions:</strong>
            </h4>
            <h5>{recipe.instructions}</h5>
          </div>
          <div className="col mx-3 mb-3 p-2 bg-light text-dark">
            <h4>
              <strong>Occassion:</strong>
            </h4>
            <h5>{recipe.ocassion}</h5>
          </div>
          <div className="col mx-3 mb-3 p-2 bg-light text-dark">
            <h4>
              <strong>Difficulty Level:</strong>
            </h4>
            <h5>{recipe.difficulty}</h5>
          </div>
          <div className="col mx-3 mb-3 p-2 bg-light text-dark">
            <h4>
              <strong>Comments:</strong>
            </h4>
            <h5>{recipe.comments}</h5>
          </div>
        </div>

        <div className="row d-inline-flex justify-content-center p-0 m-0">
          <div className="col p-0 ms-3">
            <Link to="/recipesList">
              <button className="btn btn-warning me-3 fs-5">
                Recipes List
              </button>
            </Link>

            <Link to="/userHomePage">
              <button type="button" className="btn btn-primary me-3 fs-5">
                Home
              </button>
            </Link>

            <Link to={`/editRecipe/${id}`}>
              <button type="button" className="btn btn-info me-3 m-0 fs-5">
                Edit
              </button>
            </Link>

            <button
              type="button"
              className="btn btn-danger fs-5"
              onClick={() => actions.deleteRecipe(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <h1>Loading</h1>;
};
