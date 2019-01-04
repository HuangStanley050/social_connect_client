import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaGroup from "../common/TextAreaField";
import { add_education } from "../../store/actions/education";

class AddEducation extends React.Component {
  state = {
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
    disabled: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };
    this.props.addEducation(eduData, this.props.history);
  };

  handleInput = e => {
    //console.log("input changed");
    this.setState({ [e.target.name]: e.target.value });
  };

  onCheck = e => {
    this.setState({
      current: !this.state.current,
      disabled: !this.state.disabled
    });
  };

  render() {
    let school_error = null;
    let degree_error = null;
    let from_error = null;
    let fieldofstudy_error = null;
    if (this.props.error.errors) {
      //console.log(this.props.error);
      if (this.props.error.errors.school)
        school_error = this.props.error.errors.school;
      if (this.props.error.errors.degree)
        degree_error = this.props.error.errors.degree;
      if (this.props.error.errors.from)
        from_error = this.props.error.errors.from;
      if (this.props.error.errors.fieldofstudy)
        fieldofstudy_error = this.props.error.errors.fieldofstudy;
    }
    return (
      <div className="section add-education">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Your Education</h1>
              <p className="lead text-center">
                Add any school, bootcamp, etc that you have attended
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    value={this.state.school}
                    onChange={this.handleInput}
                    placeholder="* School or Bootcamp"
                    name="school"
                    error={school_error}
                  />
                </div>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    placeholder="* Degree or Certificate"
                    name="degree"
                    value={this.state.degree}
                    onChange={this.handleInput}
                    error={degree_error}
                  />
                </div>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.fieldofstudy}
                    placeholder="Field of Study"
                    name="fieldofstudy"
                    error={fieldofstudy_error}
                  />
                </div>
                <h6>From Date</h6>
                <div className="form-group">
                  <TextFieldGroup
                    type="date"
                    value={this.state.from}
                    onChange={this.handleInput}
                    error={from_error}
                    name="from"
                  />
                </div>
                <h6>To Date</h6>
                <div className="form-group">
                  <TextFieldGroup
                    type="date"
                    value={this.state.to}
                    onChange={this.handleInput}
                    name="to"
                    disabled={this.state.disabled ? "disabled" : ""}
                  />
                </div>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id="current"
                  />
                  <label className="form-check-label" htmlFor="current">
                    Current Job
                  </label>
                </div>
                <div className="form-group">
                  <TextAreaGroup
                    value={this.state.description}
                    placeholder="Program Description"
                    onChange={this.handleInput}
                    name="description"
                    info="Tell us about your experience and what you have learned"
                  />
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEducation: (data, history) => dispatch(add_education(data, history))
  };
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEducation);
