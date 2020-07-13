import React, { Component } from "react";

export default class ParkingGarage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
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
              <h1>Vehicle Record{data.id}</h1>
              <p>{data.description}</p>
              <p>{data.make}</p>
              <p>{data.model}</p>
              <p>{data.miles}</p>
              <p>{data.year}</p>
              <img src={data.file_type} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
