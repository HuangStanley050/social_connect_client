import React, { Component } from "react";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaField";
import SelectListGroup from "../common/SelectListGroup";
import InputGroup from "../common/InputGroup";

class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: "",
    company: "",
    website: "",
    location: "",
    status: "",
    hobbies: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    errors: {}
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("form submitted");
  };
  handleInput = e => {
    //console.log("input changed");
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { errors, displaySocialInputs } = this.state;
    let socialInputs;
    const options = [
      { label: "* Select Profession", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Teacher", value: "Teacher" },
      { label: "Professional", value: "Professional" },
      { label: "Student", value: "Student" },
      { label: "Administrator", value: "Administrator" },
      { label: "Technician", value: "Technician" },
      { label: "Other", value: "Other" }
    ];
    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.handleInput}
            error={errors.twitter}
          />
          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.handleInput}
            error={errors.facebook}
          />
          <InputGroup
            placeholder="Instagram Profile URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.handleInput}
            error={errors.instagram}
          />
          <InputGroup
            placeholder="Youtube Profile URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.handleInput}
            error={errors.youtube}
          />
          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.handleInput}
            error={errors.linkedin}
          />
        </div>
      );
    }
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <a href="dashboard.html" className="btn btn-light">
                Go Back
              </a>
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    value={this.state.handle}
                    onChange={this.handleInput}
                    placeholder="* Profile handle"
                    name="handle"
                    error={errors.handle}
                    info="A unique handle for your profile URL. Your full name,
                    company name, nickname."
                  />
                </div>
                <div className="form-group">
                  <SelectListGroup
                    placeholder="status"
                    value={this.state.status}
                    name="status"
                    error={errors.status}
                    onChange={this.handleInput}
                    info="Give us an idea of where you are at in your career"
                    options={options}
                  />
                </div>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.company}
                    placeholder="Company"
                    error={errors.company}
                    name="company"
                    info="Could be your own company or one you work for"
                  />
                </div>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    onChange={this.handleInput}
                    placeholder="Website"
                    value={this.state.website}
                    name="website"
                    error={errors.website}
                    info="Could be your own or a company website"
                  />
                </div>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    value={this.state.location}
                    onChange={this.handleInput}
                    placeholder="Location"
                    name="location"
                    info="City & state suggested (eg. Boston, MA)"
                    error={errors.location}
                  />
                </div>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    value={this.state.hobbies}
                    onChange={this.handleInput}
                    error={errors.hobbies}
                    placeholder="Hobbies"
                    name="hobbies"
                    info="Please use comma separated values (eg.
                    Cooking,Skating,Drawing,Sport)"
                  />
                </div>
                <div className="form-group">
                  <TextFieldGroup
                    type="text"
                    error={errors.githubusername}
                    value={this.state.githubusername}
                    onChange={this.handleInput}
                    placeholder="Github Username"
                    name="githubusername"
                    info="If you want your latest repos and a Github link, include
                    your username"
                  />
                </div>
                <div className="form-group">
                  <TextAreaFieldGroup
                    value={this.state.bio}
                    onChange={this.handleInput}
                    error={errors.bio}
                    placeholder="A short bio of yourself"
                    name="bio"
                    info="Tell us a little about yourself"
                  />
                </div>

                <div className="mb-3">
                  <button
                    onClick={() =>
                      this.setState(prevState => {
                        return {
                          displaySocialInputs: !prevState.displaySocialInputs
                        };
                      })
                    }
                    type="button"
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
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

export default connect(mapStateToProps)(CreateProfile);
