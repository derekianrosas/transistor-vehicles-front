import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import VehicleRecordManager from "./vehicle-record-manager";
import ParkingGarage from "./parking-garage";
import NavigationBar from "./nav-bar";
import VehicleArticles from "./vehicle-articles";
import Home from "./home";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/parking-garage" component={ParkingGarage} />
            <Route path="/vehicle-articles" component={VehicleArticles} />
            <Route
              key="vehicle-record-manager"
              path="/vehicle-manager"
              component={VehicleRecordManager}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
