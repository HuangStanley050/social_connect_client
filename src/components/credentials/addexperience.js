import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaGroup from "../common/TextAreaField";
import { add_experience } from "../../store/actions/experience";

class AddExperience extends React.Component {
  state = {
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
    disabled: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };
    this.props.addExperience(expData, this.props.history);
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
    let title_error = null;
    let company_error = null;
    let from_error = null;
    if (this.props.error.errors) {
      //console.log(this.props.error);
      if (this.props.error.errors.company)
        company_error = this.props.error.errors.company;
      if (this.props.error.errors.title)
        title_error = this.props.error.errors.title;
      if (this.props.error.errors.from)
        from_error = this.props.error.errors.from;
    }
    return (
      <div className="section add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Your Experience</h1>
              <p className="lead text-center">
                Add any job that you might have had in the past
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    value={this.state.title}
                    onChange={this.handleInput}
                    placeholder="* Job Title"
                    name="title"
                    error={title_error}
                  />
                </div>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    placeholder="* Company"
                    name="company"
                    value={this.state.company}
                    onChange={this.handleInput}
                    error={company_error}
                  />
                </div>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.location}
                    placeholder="Location"
                    name="location"
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
                    placeholder="Job Description"
                    onChange={this.handleInput}
                    name="description"
                    info="Some of your responsabilities, etc"
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
    addExperience: (data, history) => dispatch(add_experience(data, history))
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
)(AddExperience);
