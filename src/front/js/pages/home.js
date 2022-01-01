import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 text-white">
      <h1 className="mb-5 pt-3">
        <img
          src="https://cdn-icons.flaticon.com/png/512/1027/premium/1027177.png?token=exp=1641003909~hmac=edc1fd43551fbb6d0869c3943c928fdf"
          width="62rem"
          className="pe-3"
        />
        Welcome to "My Recipe Book"
        <img
          src="https://cdn-icons.flaticon.com/png/512/1027/premium/1027180.png?token=exp=1641004146~hmac=76d0a530748efdc6a9beae6ce8876c89"
          width="63rem"
          className="ps-3"
        />
      </h1>
      <h2>Sign Up Now!</h2>
      <Link to="/signUp">
        <button type="button" className="btn btn-primary m-4 fs-4">
          Sign Up
        </button>
      </Link>
      <h2>Already a member?</h2>
      <Link to="/login">
        <button type="button" className="btn btn-warning m-4 fs-4">
          Login
        </button>
      </Link>
    </div>
  );
};
