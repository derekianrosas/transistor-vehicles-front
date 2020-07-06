import React, { Component } from "react";
import axios from "axios";

export default class VehicleRecordManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: {},
      data: [],
      make: "",
      model: "",
      miles: "",
      year: "",
      description: "",
    };
    this.getVehicleRecord = this.getVehicleRecord.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCarImageSubmit = this.handleCarImageSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({
      file: event.target.files[0],
    });
  }

  handleCarImageSubmit() {
    const form = new FormData();
    form.append("name", this.state.file.name);
    form.append("type", this.state.file.type);
    form.append("data", this.state.file);

    fetch("http://127.0.0.1:5000/file/add", { method: "POST", body: form })
      .then((response) => {
        response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  buildForm() {
    let formData = new FormData();

    formData.append("make", this.state.make);
    formData.append("model", this.state.model);
    formData.append("miles", this.state.miles);
    formData.append("year", this.state.year);
    formData.append("description", this.state.description);

    return formData;
  }

  handleSubmit(event) {
    axios
      .post(
        "http://127.0.0.1:5000/vehicle_record/add_vehicle",
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

  getVehicleRecord() {
    fetch("http://127.0.0.1:5000/vehicle_record/get_all_vehicle_records", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    console.log("event", event);
    this.getVehicleRecord();
  }

  render() {
    return (
      <div className="vehicle-records-manager-wrapper">
        <div className="form-container">
          <h1>Vehicle Form</h1>
          <form
            onSubmit={() => {
              this.handleCarImageSubmit();
              this.handleSubmit();
            }}
          >
            <div>
              <input
                type="text"
                name="make"
                placeholder="Make"
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
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className="car-image-wrapper">
              <input onChange={this.handleInput} type="file" />
            </div>
            <div>
              <button type="submit">Save Vehicle</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
