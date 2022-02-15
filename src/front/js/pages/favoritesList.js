import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Pudding from "../../img/pudding.png";
import Milkshake from "../../img/milkshake.png";

export const FavoritesList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getRecipes(store.loggedUser.id);
  }, []);

  let noFavoriteStatus = { favorite: "No" };

  const RecipesFilter = (recipe) => {
    return recipe["favorite"] == "Yes";
  };

  const Recipes = Object.values(store.recipeList).filter(RecipesFilter);

  return (
    <div className="container py-4 px-3 mx-0 mx-auto text-center text-light fs-4 my-1">
      <h1 className="py-3 pb-4 px-0">
        <img src={Pudding} width="65" className="pe-3" />
        Favorites
        <img src={Milkshake} width="65" className="ps-2" />
      </h1>
      <div style={{ width: "85%" }} className="m-auto p-0">
        <ul className="list-group position-relative d-flex justify-content-center">
          {store.recipeList.length > 0
            ? Recipes.map((item, index) => {
                if (item.favorite == "Yes") {
                  return (
                    <li
                      className="list-group-item d-flex flex-column mb-3 border border-warning border-4 rounded-3 m-0"
                      key={index}
                    >
                      <div className="d-flex flex-column align-middle p-0 m-0">
                        <h2 className="mx-2 m-1 text-start">
                          <strong>Title:</strong> {item.title}
                        </h2>
                        <h4 className="mx-2 m-1 text-start">
                          <strong>Ingredients:</strong> {item.ingredients}
                        </h4>
                        <h4 className="mx-2 m-1 text-start">
                          <strong>Instructions:</strong> {item.instructions}
                        </h4>
                        <h4 className="mx-2 m-1 text-start">
                          <strong>Ocassion:</strong> {item.ocassion}
                        </h4>
                        <h4 className="mx-2 m-1 text-start">
                          <strong>Difficulty:</strong> {item.difficulty}
                        </h4>
                        <h4 className="mx-2 m-1 text-start">
                          <strong>Favorite:</strong> {item.favorite}
                        </h4>
                        <span className="p-0 m-0">
                          <div className="d-inline-flex justify-content-between flex-wrap p-0 m-0 align-middle">
                            <Link to={`/recipeDetails/${item.id}`}>
                              <button className="btn btn-primary m-2 fs-5">
                                Details
                              </button>
                            </Link>
                            <Link to={`/editRecipe/${item.id}`}>
                              <button className="btn btn-dark m-2 fs-5">
                                Edit Recipe
                              </button>
                            </Link>
                            <Link to="/userHomePage">
                              <button
                                href="#"
                                className="btn btn-warning m-2 fs-5 text-danger"
                                onClick={() =>
                                  actions.noFavorite(noFavoriteStatus, item.id)
                                }
                              >
                                Unfavorite
                              </button>
                            </Link>
                            <button
                              type="button"
                              className="btn btn-danger m-2 fs-5"
                              onClick={() => actions.deleteRecipe(item.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </span>
                      </div>
                    </li>
                  );
                }
              })
            : "Loading..."}
        </ul>
        <div className="text-center">
          <Link to="/userHomePage">
            <button type="button" className="btn btn-primary p-2 m-0 my-2 fs-4">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
