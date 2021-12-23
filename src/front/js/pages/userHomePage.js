import React, { useContext, useState } from "react";
import { RecipeCard } from "../component/recipeCard";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const UserHomePage = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container py-4 px-3 m-0 bg-dark">
      <div className="row">
        <h1 className="mx-5 my-3 p-0 text-start text-white">
          Welcome Back {store.loggedUser.full_name}
        </h1>
        <div className="p-0">
          <Link to="/addRecipe">
            <button className="btn btn-primary btn-lg mx-5">Add Recipe</button>
          </Link>
        </div>
        <h2 className="mx-5 px-0 pb-2 pt-4 text-white">My Recipes</h2>
        <div
          className="d-flex flex-row mx-5 p-0"
          style={{ width: "90%", overflow: "auto" }}
        >
          {store.recipeList.map((recipe, index) => (
            <RecipeCard key={index} card_recipe={recipe} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

/*


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
