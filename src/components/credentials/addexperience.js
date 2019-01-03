import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaGroup from "../common/TextAreaGroup";

class AddExperience extends React.Component {
  state = {
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: "",
    description: "",
    disabled: false
  };
  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExperience);
