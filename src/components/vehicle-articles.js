import React, { Component } from "react";
import ArticlesRender from "./articles-render";

export default class VehicleArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  getVehicleArticles() {
    fetch(
      "http://newsapi.org/v2/everything?q=electric-vehicles&apiKey=0e79732a7c6c401b9f716cc2d13937ac",
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          articles: data.articles,
        })
      );
  }

  componentDidMount() {
    this.getVehicleArticles();
    console.log(VehicleArticles);
  }

  render() {
    return <ArticlesRender articles={this.state.articles} />;
  }
}
