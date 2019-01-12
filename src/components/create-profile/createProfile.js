import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { create_profile } from "../../store/actions/profile";
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
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      hobbies: this.state.hobbies,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };
    //console.log(profileData);
    this.props.create(profileData, this.props.history);
    //console.log("Create profile submitted");
    //console.log(this.props.profile);
  };

  handleInput = e => {
    //console.log("input changed");
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let redirect = null; //===========>this is for after the profile has been created successfully
    let handle_error = null;
    let status_error = null;
    let hobbies_error = null;
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

    if (
      this.props.profile.profile === null &&
      !this.props.auth.isAuthenticated
    ) {
      redirect = <Redirect to="/dashboard" />;
    }

    if (this.props.error.errors) {
      if (this.props.error.errors.handle)
        handle_error = this.props.error.errors.handle;
      if (this.props.error.errors.status)
        status_error = this.props.error.errors.status;
      if (this.props.error.errors.hobbies)
        hobbies_error = this.props.error.errors.hobbies;
      //console.log(handle_error, status_error, hobbies_error);
    }

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
        {redirect}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
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
                    error={handle_error}
                    info="A unique handle for your profile URL. Your full name,
                    company name, nickname."
                  />
                </div>
                <div className="form-group">
                  <SelectListGroup
                    placeholder="status"
                    value={this.state.status}
                    name="status"
                    error={status_error}
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
                    error={hobbies_error}
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
    auth: state.auth,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    create: (data, history) => dispatch(create_profile(data, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProfile);
