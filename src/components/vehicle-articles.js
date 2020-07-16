import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ArticlesRender from "./articles-render";

export default class VehicleArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      totalCount: 0,
      currentPage: 1,
    };
    this.getVehicleArticles = this.getVehicleArticles.bind(this);
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll, false);
  }

  onScroll() {
    if (this.state.articles.length === this.state.totalCount) {
      return;
    }

    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.getVehicleArticles();
    }
  }

  getVehicleArticles() {
    console.log("test");
    this.setState({
      currentPage: this.state.currentPage,
    });
    fetch(
      "http://newsapi.org/v2/everything?q=electric-vehicles&pageSize=10&apiKey=0e79732a7c6c401b9f716cc2d13937ac",
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
    AOS.init({
      duration: 2500,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  render() {
    return (
      <div>
        <header className="main-header">
          <h1>
            <span>Electric</span> Articles
          </h1>
          <p>
            On this page you will find all of the latest news articles regarding
            all electric vehicles!
          </p>
        </header>
        <ArticlesRender articles={this.state.articles} />
      </div>
    );
  }
}
