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
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="vehicle-records-manager-wrapper">
        <div className="form-container">
          <header className="main-header">
            <h1>
              <span>Vehicle</span> Record Submit
            </h1>
            <p>
              On this page you can submit your very one vehicle record, please
              limit this to electric vehicles only!
            </p>
          </header>
          <div className="submit-message"></div>
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
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
            <div className="description-text">
              <textarea
                cols="30"
                rows="10"
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button
                onSubmit={this.handleSubmit}
                className="btn"
                type="submit"
              >
                Save Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
