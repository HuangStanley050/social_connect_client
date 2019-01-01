import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter, Link } from "react-router-dom";
import { create_profile, fetch_profile } from "../../store/actions/profile";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaField";
import SelectListGroup from "../common/SelectListGroup";
import InputGroup from "../common/InputGroup";
import isEmpty from "../../validation/isEmpty";

class EditProfile extends Component {
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

  componentDidMount() {
    console.log("edit profile mounted");
    //console.log(this.props.profile.profile);

    //validate the profile fiedls coming back if it's empty then give empty string
    const handle = this.props.profile.profile.handle;
    const status = this.props.profile.profile.status;
    const hobbiesCSV = this.props.profile.profile.hobbies.join(",");

    const company = !isEmpty(this.props.profile.profile.company)
      ? this.props.profile.profile.company
      : "";
    const website = !isEmpty(this.props.profile.profile.website)
      ? this.props.profile.profile.website
      : "";
    const location = !isEmpty(this.props.profile.profile.location)
      ? this.props.profile.profile.location
      : "";
    const githubusername = !isEmpty(this.props.profile.profile.githubusername)
      ? this.props.profile.profile.githubusername
      : "";
    const bio = !isEmpty(this.props.profile.profile.bio)
      ? this.props.profile.profile.bio
      : "";

    const social = !isEmpty(this.props.profile.profile.social)
      ? this.props.profile.profile.social
      : {};
    const twitter = !isEmpty(social.twitter)
      ? this.props.profile.profile.social.twitter
      : "";
    const facebook = !isEmpty(social.facebook)
      ? this.props.profile.profile.social.facebook
      : "";
    const linkedin = !isEmpty(social.linkedin)
      ? this.props.profile.profile.social.linkedin
      : "";
    const youtube = !isEmpty(social.youtube)
      ? this.props.profile.profile.social.youtube
      : "";
    const instagram = !isEmpty(social.instagram)
      ? this.props.profile.profile.social.instagram
      : "";
    this.setState({
      handle: handle,
      company: company,
      website: website,
      location: location,
      status: status,
      skills: hobbiesCSV,
      githubusername: githubusername,
      bio: bio,
      twitter: twitter,
      facebook: facebook,
      linkedin: linkedin,
      youtube: youtube,
      instagram: instagram
    });
  }

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

    this.props.create(profileData);
  };

  handleInput = e => {
    //console.log("input changed");
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
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
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Your Profile</h1>

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
    create: data => dispatch(create_profile(data)),
    fetchProfile: () => dispatch(fetch_profile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
