import React, { Component } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";

export default class ParkingGarage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
    this.deleteVehicleRecord = this.deleteVehicleRecord.bind(this);
  }
  getVehicleRecord() {
    fetch("https://capback-dir.herokuapp.com/vehicle-record/get", {
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
      .delete(
        `https://capback-dir.herokuapp.com//vehicle-record/delete-vehicle/${data.id}`
      )
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
    this.getVehicleRecord();
    AOS.init({
      duration: 2500,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <header className="main-header">
            <h1>
              <span>Parking</span> Garage
            </h1>
            <p>
              On this page you can find information on all user input vehicle
              records, including the ones you posted!
            </p>
          </header>
          {data.map((data) => (
            <div className="container">
              <div data-aos="slide-up" className="card">
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
