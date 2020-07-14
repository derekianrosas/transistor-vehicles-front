import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import VehicleRecordManager from "./vehicle-record-manager";
import ParkingGarage from "./parking-garage";
import NavigationBar from "./nav-bar";
import VehicleArticles from "./vehicle-articles";
import Home from "./home";
import Auth from "./login/auth";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/login" component={Auth} />
          </Switch>
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
          <Switch>
            <Route path="/parking-garage" component={ParkingGarage} />
          </Switch>
          <Switch>
            <Route path="/vehicle-articles" component={VehicleArticles} />
          </Switch>
          <Switch>
            <Route path="/vehicle-manager" component={VehicleRecordManager} />
          </Switch>
        </Router>
      </div>
    );
  }
}
