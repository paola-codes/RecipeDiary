import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Fish from "../../img/fish.png";
import CuttingBoard from "../../img/cutting_board.png";

export const SignUp = () => {
  const { actions, store } = useContext(Context);

  const [newUser, setNewUser] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });

  const addUser = (newUser) => {
    fetch(`${store.backEndUrl}/api/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="container mx-auto text-center text-white">
      <h1 className="m-3 pt-3">
        <img src={Fish} width="65" className="pe-3" />
        Sign Up Below
        <img src={CuttingBoard} width="65" className="ps-3" />
      </h1>
      <form className="text-start">
        <div className="form-group my-3 fs-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control fs-4"
            placeholder="Full Name"
            name="full_name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-3 fs-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control fs-4"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-3 fs-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control fs-4"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="text-start my-4">
        <Link to="/login">
          <button
            type="button"
            className="btn btn-primary fs-4"
            onClick={() => addUser(newUser)}
          >
            Save
          </button>
        </Link>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  history: PropTypes.object,
};
