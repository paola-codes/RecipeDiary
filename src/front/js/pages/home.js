import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 text-white">
      <h1 className="mb-5">Welcome to "My Recipe Book"</h1>
      <h4>Sign Up Now!</h4>
      <Link to="/signUp">
        <button type="button" className="btn btn-primary m-4">
          Sign Up
        </button>
      </Link>
      <h4>Already a member?</h4>
      <Link to="/login">
        <button type="button" className="btn btn-warning m-4">
          Login
        </button>
      </Link>
    </div>
  );
};
