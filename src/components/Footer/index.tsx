import React from "react";

import Email from "../../assets/@.svg";
import Github from "../../assets/github.svg";

// import "./styles.css";
import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>Estatística XYZ</h2>
      </div>

      <div>
        <ul>
          <li>
            <a href="mailto:elias.doering@ufrgs.br">
              <img src={Email} alt="Email do Guilherme"></img>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/geliasrd/estatisticaXYZ"
              target="_blank"
            >
              <img src={Github} alt="Github do projeto Estatística X Y Z"></img>
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
