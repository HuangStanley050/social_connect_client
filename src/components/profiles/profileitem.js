import React from "react";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/isEmpty";

const ProfileItem = props => {
  const { profile } = props;
  return (
    <div className="card card-body bg-light mb-3">
      <div className="row">
        <div className="col-2">
          <img className="rounded-circle" src={profile.user.avatar} />
        </div>
        <div className="col-lg-6 col-md-4 col-8">
          <h3>{profile.user.name}</h3>
          <p>
            {profile.status}{" "}
            {isEmpty(profile.company) ? null : (
              <span>at {profile.company}</span>
            )}
          </p>
          <p>
            {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
          </p>
          <Link to={`/profile/${profile.handle}`} className="btn btn-info">
            View Profile
          </Link>
        </div>
        <div className="col-md-4 d-none d-lg-block">
          <h4>Hobbies</h4>
          <ul className="list-group">
            {profile.hobbies.slice(0, 4).map((hobby, index) => {
              return (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {hobby}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
