import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Context } from "../store/appContext";
import Cook_Book from "../../img/cook_book.png";

export const MyNavbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img
            alt=""
            src={Cook_Book}
            width="40"
            className="d-inline-flex align-top p-0 me-1 mt-1 m-0 text-dark"
          />
          <h3 className="d-inline-flex align-center p-0 m-0">
            <strong>RecipeDiary</strong>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav text-dark">
          <Nav className="ms-auto">
            <Link
              to="/userHomePage"
              className="text-decoration-none text-dark me-2"
            >
              <Nav.Item>Home</Nav.Item>
            </Link>
            <Link to="/profile" className="text-decoration-none text-dark me-2">
              <Nav.Item>Profile</Nav.Item>
            </Link>
            <Link
              to="/recipesList"
              className="text-decoration-none text-dark me-2"
            >
              <Nav.Item>Recipes</Nav.Item>
            </Link>
            <Link
              to="/favoritesList"
              className="text-decoration-none text-dark me-2"
            >
              <Nav.Item>Favorites</Nav.Item>
            </Link>
            <Link
              to="/addRecipe"
              className="text-decoration-none text-dark me-2"
            >
              <Nav.Item>Add Recipe</Nav.Item>
            </Link>
            <Link to="/" className="text-decoration-none text-dark me-2">
              <Nav.Item>
                <span onClick={() => actions.logOut()}>Log Out</span>
              </Nav.Item>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
