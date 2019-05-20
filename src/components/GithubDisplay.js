import React, { Component } from "react";
import GithubInput from "./GithubInput";
import ListGroup from "./ListGroup";
import JumboTron from "./JumboTron";
import { getUserData } from "../github-api";

class GithubDisplay extends Component {
  state = {
    user: {}
  };
  handleSubmit = inputUsername => {
    getUserData(inputUsername.input).then(res => {
      this.setState({
        user: res
      });
    });
  };
  render() {
    return (
      <div className="container">
        <JumboTron />
        <div className="row">
          <div className="col">
            <GithubInput handleSubmit={this.handleSubmit} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ListGroup name="Organizations" items={this.state.user.orgs} />
          </div>
          <div className="col">
            <ListGroup name="Repositories" items={this.state.user.repos} />
          </div>
        </div>
      </div>
    );
  }
}
export default GithubDisplay;
