import React, { Component } from "react";
import "aos/dist/aos.css";

export default class ArticlesRender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="container">
        {this.props.articles.map((articles) => (
          <section data-aos="flip-up" className="card">
            <img src={articles.urlToImage} alt="" />
            <div>
              <h3>{articles.title}</h3>
              <p>{articles.description}</p>
              <a href={articles.url} className="btn2">
                Read Article
              </a>
            </div>
          </section>
        ))}
      </main>
    );
  }
}
