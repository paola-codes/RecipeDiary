import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { SignUp } from "./pages/signUp";
import { Login } from "./pages/login";
import { LoginRequired } from "./pages/loginRequired";

import { Home } from "./pages/home";
import { UserHomePage } from "./pages/userHomePage";
import { RecipeDetails } from "./pages/recipeDetails";
import { AddRecipe } from "./pages/addRecipe";
import { EditRecipe } from "./pages/editRecipe";
import { RecipesList } from "./pages/recipesList";
import { Profile } from "./pages/profile";
import { EditProfile } from "./pages/editProfile";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

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
            <Route exact path="/loginRequired">
              <LoginRequired />
            </Route>
            <Route exact path="/userHomePage">
              <Navbar />
              <UserHomePage />
              <Footer />
            </Route>
            <Route exact path="/addRecipe">
              <Navbar />
              <AddRecipe />
              <Footer />
            </Route>
            <Route exact path="/recipesList">
              <Navbar />
              <RecipesList />
              <Footer />
            </Route>
            <Route exact path="/recipeDetails/:id">
              <Navbar />
              <RecipeDetails />
              <Footer />
            </Route>
            <Route exact path="/editRecipe/:id">
              <Navbar />
              <EditRecipe />
              <Footer />
            </Route>
            <Route exact path="/profile">
              <Navbar />
              <Profile />
              <Footer />
            </Route>
            <Route exact path="/editProfile">
              <Navbar />
              <EditProfile />
              <Footer />
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
