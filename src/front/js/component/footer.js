import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Footer = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container mx-auto text-light py-2">
      <div className="col-9 text-center mx-auto">
        <h4>
          RecipeDiary Copyrigth{" "}
          <i className="fa fa-registered" aria-hidden="true" />
        </h4>
        <h5>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </h5>
      </div>
    </div>
  );
};
