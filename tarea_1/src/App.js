import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignIn from "./pages/sign-in-page/sign-in-page.component";
import MissingPage from "./pages/missing-page/missing-page.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: "",
    };
  }

  //* Declared here to fix method not updating in time
  changeUser = (user) => {
    this.setState({ currentUser: user }, () => console.log(this.state));
  };
  signOut = null;

  componentDidMount() {
    //* Replaced Firebase logic for simplicity
    this.signOut = () => {
      this.setState({ currentUser: "" });
    };
  }

  componentWillUnmount() {
    this.changeUser = null;
    this.signOut = null;
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} signOut={this.signOut} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {
          /*
           * Removed Sign Up page for simplicity
           * Replaced component with render to allow passing props
           */}
          <Route
            path="/signin"
            render={() => <SignIn changeUser={this.changeUser} />}
          />
          <Route path="*" component={MissingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
