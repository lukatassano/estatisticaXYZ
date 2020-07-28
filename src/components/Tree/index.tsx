import React from "react";

import { Container } from "./styles";

import { lista } from "../../articles";

interface List {
  title: string;
  href: string;
  article: Array<Article>;
}

interface Article {
  title: string;
  href: string;
}

const Tree: React.FC = () => {
  return (
    <Container>
      <div className="contents">
        {lista.map((curso) => (
          <div className="content">
            <a className="title">
              <div
                className="number"
                id={curso.title === "curso" ? "numberSelected" : ""}
              >
                <h2>{curso.number}</h2>
              </div>
              <h1>{curso.title}</h1>
            </a>
            <div
              className="topics"
              id={curso.title === "curso" ? "topicSelected" : ""}
            >
              <ol>
                {curso.articles.map((article) => (
                  <li>
                    <a>{article.title}</a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Tree;
