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
      <div>
        <div>
          <h1>Vehicle Records</h1>
          <h3>Here you will find all vehicle records in database</h3>
          {data.map((data) => (
            <div className="container">
              <div className="card">
                <h3>{data.model}</h3>
                <p>
                  <strong>Description:</strong> {data.description}
                </p>
                <p>
                  <strong>Make:</strong> {data.manufacturer}
                </p>
                <p>
                  <strong>Range:</strong> {data.miles}
                </p>
                <p>
                  <strong>Year:</strong> {data.year}
                </p>
                <a
                  className="btn3"
                  onClick={() => this.deleteVehicleRecord(data)}
                >
                  Scrap
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
