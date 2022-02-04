import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container py-4 px-3 mx-0 text-center text-light fs-4 mt-3">
      <h1 className="text-center mt-0 mb-3">
        <strong>Profile</strong>
      </h1>

      <div className="row d-flex justify-content-center mb-3">
        <div className="col-8 mx-4 text-start bg-light text-dark p-4">
          <h5>
            <strong>Full Name: </strong>
            {store.loggedUser.full_name}
          </h5>
          <h5>
            <strong>Email: </strong>
            {store.loggedUser.email}
          </h5>
        </div>
      </div>
      <div className="row d-inline-flex justify-content-center">
        <div className="col-8 p-0">
          <Link to="/editProfile">
            <button className="btn btn-warning p-2 my-2 fs-4">
              Edit Profile
            </button>
          </Link>
        </div>
        <div className="col-4 p-0">
          <Link to="/userHomePage">
            <button className="btn btn-primary p-2 ms-2 my-2 fs-4">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
