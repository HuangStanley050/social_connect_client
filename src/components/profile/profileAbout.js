import React from "react";
import isEmpty from "../../validation/isEmpty";

const ProfileAbout = props => {
  const { profile } = props;
  const firstname = profile.user.name.trim().split(" ")[0];
  const hobbies = profile.hobbies.map(hobby => {
    return (
      <div key={hobby} className="p-3">
        <i className="fa fa-check" />
        {hobby}
      </div>
    );
  });
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-light mb-3">
          <h3 className="text-center  text-primary">{firstname}'s Bio</h3>
          <p className="lead">
            {isEmpty(profile.bio) ? (
              <span>{firstname} does not have a bio</span>
            ) : (
              <span>{profile.bio}</span>
            )}
          </p>
          <hr />
          <h3 className="text-center text-primary">Hobbies</h3>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {hobbies}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;
