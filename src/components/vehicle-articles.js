import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default class VehicleArticles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  getVehicleArticles() {
    fetch("https://capbacknews-dir.herokuapp.com/news-article/get-articles", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data: data,
        })
      );
  }

  componentDidMount() {
    this.getVehicleArticles();
    AOS.init({
      duration: 2500,
    });
  }

  render() {
    const { data } = this.state;
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

        {data.map((data) => (
          <main className="container">
            <section data-aos="flip-up" className="card">
              <img src={data.urlToImage} alt="" />
              <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <a href={data.url} className="btn2">
                  Read Article
                </a>
              </div>
            </section>
          </main>
        ))}
      </div>
    );
  }
}
