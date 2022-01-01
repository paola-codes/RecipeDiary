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
          <img
            src="https://cdn-icons.flaticon.com/png/512/2327/premium/2327390.png?token=exp=1641001001~hmac=68ffdbc0ddf1fb6f07c5720422a7a58c"
            width="60rem"
            className="pe-2"
          />
          Welcome Back {store.loggedUser.full_name}
        </h1>

        <div className="py-3 px-0">
          <Link to="/addRecipe">
            <button className="btn btn-primary btn-lg fs-4">Add Recipe</button>
          </Link>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1973/1973903.png"
            width="65rem"
            className="ps-3"
          />
          <img
            src="https://cdn-icons.flaticon.com/png/512/1027/premium/1027170.png?token=exp=1641002110~hmac=f5c257f406b54139572804d96f7dfe66"
            width="65rem"
            className="ps-3"
          />
        </div>
        <h2 className="py-3 pb-4 px-0">
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
        </h2>
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
                            <button
                              type="button"
                              className="btn btn-dark m-2 fs-5"
                            >
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
      </div>
      <div className="mx-0 px-0">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
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
