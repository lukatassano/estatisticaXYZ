import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import colors from "../../colors";

import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Tree from "../../components/Tree";
import Footer from "../../components/Footer";

// import "./styles.css";

import { Container } from "./styles";

const gradhumanas: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();

  window.scrollTo(0, 0);

  function handleSubmit() {
    history.push("/grade-humanas/conteudo");
  }

  return (
    <Container>
      <header>
        <Logo color={colors.gradhumanas} />

        <div className="buttons">
          <Button
            to="/sobre-nos"
            title="Sobre nós"
            color={colors.gradhumanas}
          />
          <Button to="/" title="Página inicial" color={colors.gradhumanas} />
        </div>
      </header>

      <div className="texto">
        <h1>Graduação em Humanas</h1>
        <h3>
          &emsp; &emsp; Enfoque na parte prática da estatística, tendo como
          prioridade o desenvolvimento do aluno para a compreender e interpretar
          pesquisas.
        </h3>
      </div>

      <Tree />

      <Footer />
    </Container>
  );
};

export default gradhumanas;
