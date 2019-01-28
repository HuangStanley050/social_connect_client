import React from "react";
import Moment from "moment";

const ProfileCreds = props => {
  const experience = props.experience.map(exp => {
    return (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          {Moment(exp.from).format("YYYY/MM/DD")} -{" "}
          {exp.to === null ? "Now" : Moment(exp.to).format("YYYY/MM/DD")}
        </p>
        <p>
          {!exp.location ? null : (
            <span>
              <strong>Location: </strong>
              {exp.location}
            </span>
          )}
        </p>
        <p>
          <strong>Position:</strong> {exp.title}
        </p>
        <p>
          {!exp.description ? null : (
            <span>
              <strong>Description: </strong>
              {exp.description}
            </span>
          )}
        </p>
      </li>
    );
  });

  const education = props.education.map(edu => {
    return (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          {Moment(edu.from).format("YYYY/MM/DD")} -{" "}
          {edu.to === null ? "Now" : Moment(edu.to).format("YYYY/MM/DD")}
        </p>
        <p>
          {!edu.degree ? null : (
            <span>
              <strong>Degree: </strong>
              {edu.degree}
            </span>
          )}
        </p>
        <p>
          <strong>Field of Study:</strong> {edu.fieldofstudy}
        </p>
        <p>
          {!edu.description ? null : (
            <span>
              <strong>Description: </strong>
              {edu.description}
            </span>
          )}
        </p>
      </li>
    );
  });

  return (
    <div className="row">
      <div className="col-md-6">
        <h3 className="text-center text-primary">Experience</h3>
        {props.experience.length > 0 ? (
          <ul className="list-group">{experience}</ul>
        ) : (
          <p className="text-center">No Experience Listed</p>
        )}
      </div>

      <div className="col-md-6">
        <h3 className="text-center text-primary">Education</h3>
        {props.education.length > 0 ? (
          <ul className="list-group">{education}</ul>
        ) : (
          <p className="text-center">No Education listed</p>
        )}
      </div>
    </div>
  );
};

export default ProfileCreds;
