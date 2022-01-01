import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const UserHomePage = () => {
  const { store, actions } = useContext(Context);

  actions.getRecipes(store.loggedUser.id);

  return (
    <div className="container m-5 text-start text-white bg-dark">
      <div className="row">
        <h1 className="pb-3 px-0 m-0">
          Welcome Back {store.loggedUser.full_name}
        </h1>
        <div className="py-3 px-0">
          <Link to="/addRecipe">
            <button className="btn btn-primary btn-lg">Add Recipe</button>
          </Link>
        </div>
        <h2 className="py-3 pb-4 px-0">My Recipes</h2>
        <ul className="list-group position-relative mx-0">
          {store.recipeList.length > 0
            ? store.recipeList.map((item, index) => {
                return (
                  <li
                    className="list-group-item d-flex flex-column mb-3 border border-warning border-4 rounded-3"
                    style={{ width: "85%" }}
                    key={index}
                  >
                    <div className="d-flex flex-column align-middle p-0 m-0">
                      <h3 className="mx-2 m-1 text-start">
                        <strong>Title:</strong> {item.title}
                      </h3>
                      <p className="mx-2 m-1 text-start">
                        <strong>Ingredients:</strong> {item.ingredients}
                      </p>
                      <p className="mx-2 m-1 text-start">
                        <strong>Instructions:</strong> {item.instructions}
                      </p>
                      <span className="p-0 m-0">
                        <div className="d-inline-flex justify-content-between flex-wrap p-0 m-0 align-middle">
                          <Link to={`/recipeDetails/${item.id}`}>
                            <button className="btn btn-primary m-2">
                              Details
                            </button>
                          </Link>
                          <Link to={`/editRecipe/${item.id}`}>
                            <button type="button" className="btn btn-dark m-2">
                              Edit Recipe
                            </button>
                          </Link>
                          <button
                            href="#"
                            className="btn btn-warning m-2"
                            onClick={() => actions.addFavorites(item.id)}
                          >
                            <i className="fas fa-heart" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger m-2"
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
      </div>
    </div>
  );
};
/*
<div
          className="d-flex flex-row mx-5 p-0"
          style={{ width: "90%", overflow: "auto" }}
        >
          {store.recipeList.map((recipe, index) => (
            <RecipeCard key={index} card_recipe={recipe} index={index} />
          ))}
        </div>

 const [title, setTitle] = useState("");

 
 <div className="input-group mb-3 m-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Title"
              aria-label="Title Filter"
              aria-describedby="button-addon2"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

{store.recipeList.length > 0
            ? !title
              ? store.recipeList.map((recipe, index) => {
                  <RecipeCard key={index} card_recipe={recipe} index={index} />;
                })
              : store.recipeList
                  .filter((value, index) => value.title.includes(title))
                  .map((item, index) => {
                    <RecipeCard
                      key={index}
                      card_recipe={recipe}
                      index={index}
                    />;
                  })
            : "Loading..."}

*/
