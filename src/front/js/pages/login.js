import React from "react";
import { useState } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const { actions, store } = useContext(Context);

  const [newUser, setnewUser] = useState({
    email: null,
    password: null,
  });

  const handleChange = (e) =>
    setnewUser({ ...newUser, [e.target.name]: e.target.value });

  const myFetch = (userInfo) => {
    fetch(`${store.backEndUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        actions.getRecipes(data.id);
        actions.updateUser(data);
      })
      .catch((err) => {
        console.error("Incorrect Information", err);
        alert("Incorrect Information");
      });
  };

  return (
    <div className="container mx-auto text-center text-white">
      <h1 className="m-3 pt-3">Login</h1>
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
            onClick={() => myFetch(newUser)}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};