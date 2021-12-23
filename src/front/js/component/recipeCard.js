import React, { useContext } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const RecipeCard = (props) => {
  const { actions } = useContext(Context);

  return (
    <div
      className="card p-0 me-3 mb-4"
      style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }}
    >
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F60%2F74%2F93%2F6074938bb69c862964aae1ec69ef95fc.jpg&f=1&nofb=1"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body p-3">
        <h5 className="card-title text-center px-3 py-0">
          {props.card_recipe.title}
        </h5>
        <p className="card-text">
          Ingredients: {props.card_recipe.ingredients}
        </p>
        <p className="card-text">
          Instructions: {props.card_recipe.instructions}
        </p>
        <p className="card-text">Comments: {props.card_recipe.comments}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/recipeDetails/${props.index}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
          <button
            href="#"
            className="btn btn-warning"
            onClick={() => actions.addFavorites(props.card_recipe.title)}
          >
            <i className="fas fa-heart" />
          </button>
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  card_recipe: PropType.object,
  index: PropType.number,
};
