import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { SignUp } from "./pages/signUp";
import { Login } from "./pages/login";

import { Home } from "./pages/home";
import { UserHomePage } from "./pages/userHomePage";
import { RecipeDetails } from "./pages/recipeDetails";
import { AddRecipe } from "./pages/addRecipe";
import { EditRecipe } from "./pages/editRecipe";

import { Navbar } from "./component/navbar";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/signUp">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/userHomePage">
              <Navbar />
              <UserHomePage />
            </Route>
            <Route exact path="/recipeDetails/:id">
              <Navbar />
              <RecipeDetails />
            </Route>
            <Route exact path="/addRecipe">
              <Navbar />
              <AddRecipe />
            </Route>
            <Route exact path="/editRecipe">
              <Navbar />
              <EditRecipe />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
