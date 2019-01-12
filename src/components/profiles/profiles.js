import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../common/spinner";
import { fetch_profiles } from "../../store/actions/profile";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (loading || profiles === null) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = <h1>Profile Items</h1>;
      } else {
        profileItems = <h4>No Profiles found</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Profiles</h1>
              <p className="lead text-center">Browse and connect</p>
              {profileItems}
            </div>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfiles: () => dispatch(fetch_profiles())
  };
};

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profiles);
