import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { clientId, clientSecret } from "../../config/github";
import axios from "axios";

class ProfileGithub extends Component {
  state = {
    clientId: clientId,
    clientSecret: clientSecret,
    count: 5,
    sort: "created: asc",
    repos: []
  };

  componentDidMount() {
    const username = this.props.username;
    const { clientId, clientSecret, sort, count } = this.state;
    axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
      )
      .then(res => this.setState({ repos: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;
    const repoList = repos.map(repo => {
      return (
        <div key={repo.id} className="card card-body mb-2">
          <div className="row">
            <div className="col-md-6">
              <h4>
                <a href={repo.html_url} className="text-info" target="_blank">
                  {" "}
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div className="col-md-6">
              <span className="badge badge-info mr-1">
                Stars: {repo.stargazers_count}
              </span>
              <span className="badge badge-secondary mr-1">
                Watchers: {repo.watchers_count}
              </span>
              <span className="badge badge-success">
                Forks: {repo.forks_count}
              </span>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoList}
      </div>
    );
  }
}

export default ProfileGithub;
