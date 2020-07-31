import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

import list from "../../articles";

const Tree: React.FC = () => {
  const history = useHistory();

  function handleSubmit(href: string) {
    history.push(`/grade-humanas/${href}`);
  }

  return (
    <Container>
      <div className="contents">
        {list.map((curso) => (
          <div className="content">
            <a className="title">
              <div className="number">
                <h2>{curso.number}</h2>
              </div>
              <h1>{curso.title}</h1>
            </a>
            <div className="topics">
              <ol>
                {curso.articles.map((article) => (
                  <li onClick={() => handleSubmit(article.href)}>
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
