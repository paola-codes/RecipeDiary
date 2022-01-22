import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Veggies from "../../img/veggies.png";
import Oils from "../../img/oils.png";

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
      <div className="container-fluid bg-light p-4 m-0">
        <div className="row p-0 m-0 mb-3 d-flex d-inline-column flex-wrap">
          <h1 className="ms-3 p-0">
            <img src={Veggies} width="65" className="pe-2" />
            {recipe.title}
            <img src={Oils} width="65" alt="..." />
          </h1>

          <div className="col p-0 d-flex align-content-start flex-wrap">
            <div className="col mx-3 mb-3 p-2 bg-primary bg-opacity-25">
              <h4>
                <strong>Ingredients:</strong>
              </h4>
              <h5>{recipe.ingredients}</h5>
            </div>
            <div className="col mx-3 mb-3 p-2 bg-primary bg-opacity-25">
              <h4>
                <strong>Instructions:</strong>
              </h4>
              <h5>{recipe.instructions}</h5>
            </div>
            <div className="col mx-3 mb-3 p-2 bg-primary bg-opacity-25">
              <h4>
                <strong>Occassion:</strong>
              </h4>
              <h5>{recipe.ocassion}</h5>
            </div>
            <div className="col mx-3 mb-3 p-2 bg-primary bg-opacity-25">
              <h4>
                <strong>Difficulty Level:</strong>
              </h4>
              <h5>{recipe.difficulty}</h5>
            </div>
            <div className="col mx-3 mb-3 p-2 bg-primary bg-opacity-25">
              <h4>
                <strong>Comments:</strong>
              </h4>
              <h5>{recipe.comments}</h5>
            </div>
          </div>
        </div>

        <div className="row d-inline-flex justify-content-start p-0 m-0">
          <div className="col p-0 ms-3">
            <Link to="/recipesList">
              <button className="btn btn-secondary me-3 fs-5">
                Recipes List
              </button>
            </Link>

            <Link to="/userHomePage">
              <button type="button" className="btn btn-primary me-3 fs-5">
                Home
              </button>
            </Link>

            <Link to={`/editRecipe/${id}`}>
              <button type="button" className="btn btn-warning me-3 m-0 fs-5">
                Edit Recipe
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
