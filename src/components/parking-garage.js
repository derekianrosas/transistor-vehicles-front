import React, { Component } from "react";
import axios from "axios";

export default class ParkingGarage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
    this.deleteVehicleRecord = this.deleteVehicleRecord.bind(this);
  }
  getVehicleRecord() {
    fetch("http://127.0.0.1:5000/vehicle-record/get", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data: data,
        })
      )
      .catch((error) => console.log(error));
  }

  deleteVehicleRecord(data) {
    axios
      .delete(`http://127.0.0.1:5000/vehicle-record/delete-vehicle/${data.id}`)
      .then((response) => {
        this.setState({
          data: this.state.data.filter((item) => {
            return item.id !== data.id;
          }),
        });
        return response.data;
      })
      .catch((error) => {
        console.log("HandleDeleteClick error", error);
      });
  }

  componentDidMount() {
    console.log("event", event);
    this.getVehicleRecord();
  }

  render() {
    const { data } = this.state;
    return (
      <div className="vehicle-record-wrapper">
        <div className="vehicle-info">
          <h1>Vehicle Record</h1>
          <p>Here you will find all vehicle records in database</p>
          {data.map((data) => (
            <div>
              <h1>{data.model}</h1>
              <p>{data.description}</p>
              <p>{data.manufacturer}</p>
              <p>{data.miles}</p>
              <p>{data.year}</p>
              <a onClick={() => this.deleteVehicleRecord(data)}>Delete</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
