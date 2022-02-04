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
            width="35"
            className="d-inline-flex align-top p-0 me-1 mt-1 m-0 text-dark"
          />
          <h3 className="d-inline-flex align-center p-0 pt-1 m-0">
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
              <Nav.Item>
                <h5>
                  <strong>Home</strong>
                </h5>
              </Nav.Item>
            </Link>
            <Link to="/profile" className="text-decoration-none text-dark me-2">
              <Nav.Item>
                <h5>
                  <strong>Profile</strong>
                </h5>
              </Nav.Item>
            </Link>
            <Link
              to="/recipesList"
              className="text-decoration-none text-dark me-2"
            >
              <Nav.Item>
                <h5>
                  <strong>Recipes</strong>
                </h5>
              </Nav.Item>
            </Link>
            <Link
              to="/favoritesList"
              className="text-decoration-none text-dark me-2"
            >
              <Nav.Item>
                <h5>
                  <strong>Favorites</strong>
                </h5>
              </Nav.Item>
            </Link>
            <Link to="/" className="text-decoration-none text-dark me-2">
              <Nav.Item>
                <span onClick={() => actions.logOut()}>
                  <h5>
                    <strong>Logout</strong>
                  </h5>
                </span>
              </Nav.Item>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
