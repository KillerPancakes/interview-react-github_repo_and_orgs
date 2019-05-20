import React, { Component } from "react";

class GithubInput extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      input: ""
    };
    this.state = this.initialState;
  }
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  render() {
    const { input } = this.state;
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
        </div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={this.submitForm}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default GithubInput;
