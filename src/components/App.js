import React, { Component, useState } from "react";
import "../styles/App.css";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <div id="main">
          <Switch>
            {/* <Route path="/locationDisplay" exact component={locationDisplay} /> */}
            <Route path="/About" exact component={About} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
