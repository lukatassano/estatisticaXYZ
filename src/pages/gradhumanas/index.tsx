import React from 'react';
// import { useHistory } from "react-router-dom";

// import colors from "../../colors";

import Header from '../../components/Header';
import Tree from '../../components/Tree';
import Footer from '../../components/Footer';

// import "./styles.css";

import { Container } from './styles';

const gradhumanas: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const history = useHistory();

  window.scrollTo(0, 0);

  // function handleSubmit() {
  //   history.push("/grade-humanas/conteudo");
  // }

  return (
    <Container>
      <Header />

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
