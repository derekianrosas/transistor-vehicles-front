import React, { Component } from "react";
import axios from "axios";

export default class VehicleRecordManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      manufacturer: "",
      model: "",
      miles: "",
      year: "",
      description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({
      file: event.target.files[0],
    });
  }

  buildForm() {
    let formData = new FormData();

    formData.append("manufacturer", this.state.manufacturer);
    formData.append("model", this.state.model);
    formData.append("miles", this.state.miles);
    formData.append("year", this.state.year);
    formData.append("description", this.state.description);

    return formData;
  }

  handleSubmit(event) {
    axios
      .post(
        "http://127.0.0.1:5000/vehicle-record/add-vehicle",
        this.buildForm()
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("handle submit error", error);
      });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="vehicle-records-manager-wrapper">
        <h2>Parking Garage</h2>
        <div className="form-container">
          <h1>Vehicle Form</h1>
          <form
            onChange={this.handleChange}
            onSubmit={() => {
              this.handleSubmit();
            }}
          >
            <div>
              <input
                type="text"
                name="manufacturer"
                placeholder="Manufacturer"
                value={this.state.make}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="model"
                placeholder="Model"
                value={this.state.model}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="miles"
                placeholder="Miles"
                value={this.state.miles}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={this.state.year}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Save Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
