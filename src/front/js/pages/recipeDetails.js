import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

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
          <h1 className="ms-3 p-0">{recipe.title}</h1>
          <div className="col-6 p-0 m-0 ms-3 d-flex flex-column">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F60%2F74%2F93%2F6074938bb69c862964aae1ec69ef95fc.jpg&f=1&nofb=1"
              className="flex-shrink-2 mb-3"
              alt="..."
            />
          </div>

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
            <Link to={`/editRecipe/${id}`}>
              <button type="button" className="btn btn-warning me-3 m-0">
                Edit Recipe
              </button>
            </Link>

            <Link to="/userHomePage">
              <button type="button" className="btn btn-primary m-0">
                Home
              </button>
            </Link>

            <button
              type="button"
              className="btn btn-danger m-2"
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
