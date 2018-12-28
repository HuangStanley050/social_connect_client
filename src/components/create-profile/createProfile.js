import React, { Component } from "react";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";

class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: "",
    company: "",
    website: "",
    location: "",
    status: "",
    hobbiess: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    errors: {}
  };
  render() {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    error: state.error
  };
};

export default connect(mapStateToProps)(CreateProfile);
