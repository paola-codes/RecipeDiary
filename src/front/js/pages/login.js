import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import Rice from "../../img/rice.png";
import Spices from "../../img/spices.png";

export const Login = () => {
  const { actions, store } = useContext(Context);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const myFetch = (userInfo) => {
    fetch(`${store.backEndUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        actions.updateUser(data);
        actions.getRecipes(data.id);
      })
      .catch((err) => {
        console.error("Incorrect Information", err);
        alert("Incorrect Information");
        return <Redirect to="/loginRequired" />;
      });
  };

  return (
    <div className="container mx-auto text-center text-white">
      <h1 className="m-3 pt-3">
        <img src={Spices} width="65" className="pe-3" />
        Login
        <img src={Rice} width="65" className="ps-3" />
      </h1>
      <form className="text-start">
        <div className="form-group my-3 fs-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control shadow-sm fs-4"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-1 fs-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control shadow-sm fs-4"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="text-start my-4">
        <Link to="/userHomePage">
          <button
            type="button"
            className="btn btn-primary fs-4"
            onClick={() => {
              myFetch(user);
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};
