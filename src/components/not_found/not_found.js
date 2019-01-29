import React from "react";
import { clear_error } from "../../store/actions/errors";
import { connect } from "react-redux";

class NotFound extends React.Component {
  componentDidMount() {
    this.props.clear_error();
  }
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <h1 className="display-4">Page Not found</h1>
        <p>This page doesn't exist</p>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    clear_error: () => dispatch(clear_error())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(NotFound);
