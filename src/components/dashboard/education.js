import React from "react";
import Moment from "moment";
import { connect } from "react-redux";
//import Moment from "react-moment";
import { delete_education } from "../../store/actions/education";

const Education = props => {
  let education = null;
  if (props.education) {
    education = props.education.map(edu => {
      return (
        <tr key={edu._id}>
          <td>{edu.school}</td>
          <td>{edu.degree}</td>
          <td>
            {Moment(edu.from).format("YYYY/MM/DD")} -{" "}
            {edu.to === null ? "Now" : Moment(edu.to).format("YYYY/MM/DD")}
          </td>
          <td>
            <button
              onClick={e => props.deleteEdu(edu._id)}
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
      <h4 className="mb-2">Education Credentials</h4>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{education}</tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEdu: eduID => dispatch(delete_education(eduID))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Education);
