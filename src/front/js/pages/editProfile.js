import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditProfile = () => {
  const { store, actions } = useContext(Context);

  const [updatedProfile, setUpdatedProfile] = useState({
    full_name: store.loggedUser.full_name,
    email: store.loggedUser.email,
  });

  const handleChange = (e) =>
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });

  return (
    <div className="container py-4 px-3 mx-0 text-center text-light fs-4 my-3">
      <h1 className="text-center mb-2">
        <strong>Edit Profile Information</strong>
      </h1>

      <form style={{ width: "85%" }} className="m-auto p-0 text-start">
        <div className="form-group my-1 mt-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Full Name"
            name="full_name"
            onChange={handleChange}
            value={updatedProfile.full_name}
          />
        </div>
        <div className="form-group my-1">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Edit email"
            name="email"
            onChange={handleChange}
            value={updatedProfile.email}
          />
        </div>
      </form>

      <div className="row d-inline-flex justify-content-center mt-4">
        <div className="col-8 p-0">
          <Link to="/profile">
            <button
              className="btn btn-primary me-3 mb-3 m-0 fs-4"
              onClick={() => {
                actions.updateUserProfile(updatedProfile, store.loggedUser.id);
              }}
            >
              Save Changes
            </button>
          </Link>
        </div>
        <div className="col-4 p-0">
          <Link to="/userHomePage">
            <button className="btn btn-warning me-3 m-0 fs-4">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
