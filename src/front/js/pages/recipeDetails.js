import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropType from "prop-types";
import { Context } from "../store/appContext";

export const RecipeDetails = (props) => {
  const { store } = useContext(Context);
  const item = store.recipeList[1];

  if (item) {
    return (
      <div className="container-fluid bg-light p-4 m-0">
        <div className="row mb-3">
          <div className="col">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F60%2F74%2F93%2F6074938bb69c862964aae1ec69ef95fc.jpg&f=1&nofb=1"
              className="img-fluid"
              height="60%"
              alt="..."
            />
          </div>
          <div className="col">
            <h1>{item.title}</h1>
            <div className="row">
              <h4>Ingredients</h4>
              <h5>{item.ingredients}</h5>
            </div>
            <div className="row">
              <h4>Instructions</h4>
              <h5>{item.instructions}</h5>
            </div>
            <div className="col">
              <h4>Occassion</h4>
              <h5>{item.ocassion}</h5>
            </div>
            <div className="col">
              <h4>Difficulty Level</h4>
              <h5>{item.difficulty}</h5>
            </div>
            <div className="row">
              <h4>Comments</h4>
              <h5>{item.comments}</h5>
            </div>
          </div>
        </div>
        <div className="row d-inline-flex p-0 m-0">
          <div className="col-5 p-0 m-0">
            <Link to="/editRecipe">
              <button type="button" className="btn btn-warning m-3">
                Edit Recipe
              </button>
            </Link>
          </div>
          <div className="col-4 p-0 m-0">
            <Link to="/userHomePage">
              <button type="button" className="btn btn-primary m-3">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return <h1>Loading</h1>;
};

RecipeDetails.propTypes = {
  match: PropType.object,
};
