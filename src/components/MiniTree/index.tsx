import React from "react";

import { Container } from "./styles";

import list from "../../articles";

// interface List {
//   title: string;
//   href: string;
//   articles: Array<Article>;
// }

// interface Article {
//   title: string;
//   href: string;
// }

const MiniTree: React.FC = () => {
  const selected = {
    course: "curso4",
    article: "artigo2",
  };

  return (
    <Container>
      <div className="contents">
        {list.map((curso) => (
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
                    <a
                      id={
                        article.title === selected.article
                          ? "articleSelected"
                          : ""
                      }
                    >
                      {article.title}
                    </a>
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

export default MiniTree;
