import React, { Component } from "react";

export default class CarImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: {},
      data: [],
    };
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

  render() {
    return (
      <div className="car-image-wrapper">
        <input onChange={this.handleInput} type="file" />
        <button onClick={this.handleCarImageSubmit} type="submit">
          Submit Car Image
        </button>
      </div>
    );
  }
}
