import React, { Component } from "react";
import "aos/dist/aos.css";

export default class ArticlesRender extends Component {
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

  render() {
    const { data } = this.state;
    return (
      <main className="container">
        {data.map((data) => (
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
        ))}
      </main>
    );
  }
}
