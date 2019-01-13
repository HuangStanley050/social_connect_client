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
  render() {
    return <h1>{this.props.match.params.handle}</h1>;
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
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
