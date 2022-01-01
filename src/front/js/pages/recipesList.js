import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const RecipesList = () => {
  const { store, actions } = useContext(Context);

  console.log(store.loggedUser.id);

  return (
    <div className="container py-4 px-3 text-center text-light fs-4 my-1">
      <h1 className="py-3 pb-4 px-0">
        <img
          src="https://cdn-icons.flaticon.com/png/512/1027/premium/1027168.png?token=exp=1641001763~hmac=811a330c6e386ece218f62540bbf16e2"
          width="65rem"
          className="pe-3"
        />
        My Recipes{" "}
        <img
          src="https://cdn-icons.flaticon.com/png/512/1027/premium/1027179.png?token=exp=1641002022~hmac=4feab4c587e10cd044c45873f9b62e08"
          width="65rem"
          className="ps-2"
        />
      </h1>
      <ul className="list-group position-relative d-flex justify-content-center">
        {store.recipeList.length > 0
          ? store.recipeList.map((item, index) => {
              return (
                <li
                  className="list-group-item d-flex flex-column mb-3 border border-warning border-4 rounded-3 mx-auto"
                  style={{ width: "85%" }}
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
                        <button
                          href="#"
                          className="btn btn-warning m-2 fs-5"
                          onClick={() => actions.addFavorites(item.id)}
                        >
                          <i className="fas fa-heart" />
                        </button>
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
            })
          : "Loading..."}
      </ul>
      <div className="text-start">
        <Link to="/userHomePage">
          <button type="button" className="btn btn-primary p-2 m-0 my-3 fs-4">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};
