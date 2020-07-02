import React, { Component } from "react";

import VehicleRecordManager from "./vehicle-record-manager";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <VehicleRecordManager />
      </div>
    );
  }
}
