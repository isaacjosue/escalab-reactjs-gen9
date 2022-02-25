import React from "react";
import { withRouter } from "react-router-dom";
import "./sign-in.styles.css";

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleEvent = (event) => {
    try {
      switch (event.type) {
        case "submit":
          event.preventDefault();

          const { changeUser, history } = this.props;
          changeUser(this.state.email);

          history.push("/");

          this.setState({ email: "", password: "" });
          break;

        case "change":
          const { name, value } = event.target;

          this.setState({ [name]: value }, () => console.log(this.state));
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div id="sign-in">
        <h1>Sign In</h1>
        <form onSubmit={this.handleEvent} id="sign-in-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleEvent}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleEvent}
            required
          />
          <input id="submit" type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
