import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Social Connector</h1>
              <p className="lead">
                Create a social profile/portfolio, share posts and meet other
                people
              </p>
              <hr />
              <NavLink to="/register" className="btn btn-lg btn-info mr-2">
                Sign Up
              </NavLink>
              <NavLink to="/login" className="btn btn-lg btn-light">
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
