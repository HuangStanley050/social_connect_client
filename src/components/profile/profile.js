import React, { Component } from "react";
import ProfileHeader from "./profileHeader";
import ProfileAbout from "./profileAbout";
import ProfileCreds from "./profileCreds";
import ProfileGithub from "./profileGithub";
import Spinner from "../common/spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetch_profile_handle } from "../../store/actions/profile";

class Profile extends Component {
  componentDidMount() {
    this.props.get_handle(this.props.match.params.handle);
  }

  componentDidUpdate() {
    if (this.props.error.errors) {
      this.props.history.push("/not-found");
    }
  }

  render() {
    const { profile, loading } = this.props.profile;

    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link className="btn btn-light mb-3 float-left" to="/profiles">
                Back to Profiles
              </Link>
            </div>
            <div className="col-md-6" />
          </div>

          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileCreds
            education={profile.education}
            experience={profile.experience}
          />
          {profile.githubusername ? (
            <ProfileGithub username={profile.githubusername} />
          ) : null}
        </div>
      );
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_handle: profileId => dispatch(fetch_profile_handle(profileId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
