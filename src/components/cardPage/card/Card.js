import React from "react";
class InputBox extends React.Component {
  state = { username: "" };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.username);
  };
  handleChange = (event) => this.setState({ username: event.target.value });
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button>Add!</button>
      </form>
    );
  }
}
export class Card extends React.Component {
  render() {
    let profileStyle = { margin: "1rem" };
    let imgStyle = { width: "75px" };
    let infoStyle = { display: "inline-block", marginLeft: "12px" };
    let nameStyle = { fontSize: "125%", fontWeight: "bold" };

    return (
      <div style={profileStyle}>
        <img
          src="https://via.placehold.it/75"
          alt="profile.."
          style={imgStyle}
        />
        <div style={infoStyle}>
          <div style={nameStyle}>This is {this.props.name}</div>
          <div>
            <InputBox />
          </div>
        </div>
      </div>
    );
  }
}
