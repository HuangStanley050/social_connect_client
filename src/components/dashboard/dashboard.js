import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_profile, delete_account } from "../../store/actions/profile";
import Spinner from "../common/spinner.js";
import { Redirect, Link } from "react-router-dom";
import ProfileActions from "./profileactions";
import Education from "./education";
import Experience from "./experience";

class DashBoard extends Component {
  componentDidMount() {
    this.props.getProfile();
  }
  onDeleteAccount = e => {
    this.props.deleteAccount();
  };
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let redirect = null;
    let dashboardContent;

    if (
      !this.props.auth.isAuthenticated &&
      Object.keys(this.props.auth.user).length === 0
    ) {
      redirect = <Redirect to="/login" />;
    }

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        //user has a profile
        //then go on to display profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileActions />
            {/*<Link className="btn btn-lg btn-info" to="/create-profile">
              Edit Profile
            </Link>*/}
            <Experience experience={this.props.profile.profile.experience} />
            <Education education={this.props.profile.profile.education} />
            <div style={{ marginBottom: "60px" }}>
              <button onClick={this.onDeleteAccount} className="btn btn-danger">
                Delete Account
              </button>
            </div>
          </div>
        );
      } else {
        //user is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet created your profile</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        {redirect}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">DashBoard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: () => dispatch(fetch_profile()),
    deleteAccount: () => dispatch(delete_account())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
