import React from "react";
import { useState } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link, Redirect } from "react-router-dom";

export const Login = () => {
  const { actions, store } = useContext(Context);

  const [newContact, setnewContact] = useState({
    email: null,
    password: null,
  });

  const [valid, setValid] = useState({
    state: false,
    type: "",
  });

  const handleChange = (e) =>
    setnewContact({ ...newContact, [e.target.name]: e.target.value });

  const myFetch = (contactInfo) => {
    fetch(`${store.backEndUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setValid({ state: true, type: data.user_type });
        actions.updateUser(data);
      })
      .catch((err) => {
        console.error("Incorrect Information", err);
        alert("Incorrect Information");
      });
  };

  return (
    <div className="container mx-auto text-center text-white">
      <h1 className="text-center m-3">Login</h1>
      <form className="text-start">
        <div className="form-group my-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control shadow-sm"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-1">
          <label>Password</label>
          <input
            type="password"
            className="form-control shadow-sm"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="text-center m-4">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => myFetch(newContact)}
        >
          Login
        </button>

        {valid.state == true ? <Redirect to="/userHomePage" /> : ""}
      </div>
    </div>
  );
};
