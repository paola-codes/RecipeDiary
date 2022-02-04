import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Pasta from "../../img/pasta.png";
import Cookies from "../../img/cookies.png";
import queryString from "query-string";

export const RecipesList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getRecipes(store.loggedUser.id);
  }, []);

  let yesFavoriteStatus = { favorite: "yes" };

  useEffect(() => {
    const qs = queryString.parse(location.hash);
    console.log("This is parsed info: ", qs);
    searchFunction(qs.keyword);
  }, [store.recipeList]);

  const [recipes, setRecipes] = useState(store.recipeList);

  const searchFunction = (keyword) => {
    console.log("Search function keyword: ", keyword);
    let filteredArray = store.recipeList.filter((item) => {
      if (keyword == "" || keyword == undefined) {
        return item;
      } else if (item.title.toLowerCase().includes(keyword.toLowerCase())) {
        return item;
      } else if (
        item.ingredients.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return item;
      }
    });
    setRecipes(filteredArray);
  };

  const searchHash = (event) => {
    searchFunction(event.target.value);
    if (event.target.value == "") {
      setRecipes(store.recipeList);
    }
    location.hash = `keyword=${event.target.value}`;
  };

  return (
    <div className="container py-4 px-3 mx-0 text-center text-light fs-4 my-1">
      <h1 className="py-3 pb-4 px-0">
        <img src={Pasta} width="65" className="pe-3" />
        My Recipes
        <img src={Cookies} width="65" className="ps-2" />
      </h1>
      <div style={{ width: "85%" }} className="m-auto p-0">
        <ul className="list-group position-relative d-flex justify-content-center">
          <div className="input-group mb-3 m-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Filter by Title"
              aria-label="Recipes Filter"
              aria-describedby="button-addon2"
              onChange={(e) => searchHash(e)}
            />
          </div>
          {store.recipeList.length > 0
            ? recipes.map((item, index) => {
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
                      <span className="p-0 m-0">
                        <div className="d-inline-flex justify-content-between flex-wrap p-0 m-0 align-middle">
                          <Link to={`/recipeDetails/${item.id}`}>
                            <button className="btn btn-primary m-2 fs-5">
                              Details
                            </button>
                          </Link>
                          <Link to={`/editRecipe/${item.id}`}>
                            <button className="btn btn-dark m-2 fs-5">
                              Edit
                            </button>
                          </Link>
                          <button
                            href="#"
                            className="btn btn-warning m-2 fs-5"
                            onClick={() =>
                              actions.yesFavorite(yesFavoriteStatus, item.id)
                            }
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
