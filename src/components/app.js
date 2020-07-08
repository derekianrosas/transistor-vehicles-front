import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VehicleRecordManager from "./vehicle-record-manager";
import NavigationBar from "./nav-bar";


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/vehicle-manager" component={VehicleRecordManager} />
          </Switch>
        </Router>
      </div>
    );
  }
}
