import React from "react";
import Moment from "moment";
import { connect } from "react-redux";
//import Moment from "react-moment";
import { delete_experience } from "../../store/actions/experience";

const Experience = props => {
  let experience = null;
  if (props.experience) {
    experience = props.experience.map(exp => {
      return (
        <tr key={exp._id}>
          <td>{exp.company}</td>
          <td>{exp.title}</td>
          <td>
            {Moment(exp.from).format("YYYY/MM/DD")} -{" "}
            {exp.to === null ? "Now" : Moment(exp.to).format("YYYY/MM/DD")}
          </td>
          <td>
            <button
              onClick={e => props.deleteExp(exp._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }
  return (
    <div>
      <h4 className="mb-2">Experience Credentials</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experience}</tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteExp: expID => dispatch(delete_experience(expID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Experience);
