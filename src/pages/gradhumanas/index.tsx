import React from "react";
import { useHistory } from "react-router-dom";

import colors from "../../colors";

import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

import "./styles.css";

// import { Container } from './styles';

const gradhumanas: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();

  function handleSubmit() {
    history.push("/grade-humanas/conteudo");
  }

  return (
    <>
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

      <div className="contexto">
        <h1>Graduação em Humanas</h1>

        <h3>
          {" "}
          &emsp; &emsp; Enfoque na parte prática da estatística, tendo como
          prioridade o desenvolvimento do aluno para a compreender e interpretar
          pesquisas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Laborum voluptatum iste fugiat natus at molestias ratione labore sequi
          nam facilis incidunt, excepturi suscipit nostrum explicabo consequatur
          molestiae minima expedita error? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Perspiciatis minus suscipit dicta
          maiores veniam adipisci accusamus fuga in animi sed! Maxime, modi.
          Fugit doloribus cum ducimus? Quae est tenetur voluptatem! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Alias aspernatur ex dolor
          quia ea? Rerum, perferendis quod reprehenderit, ipsam recusandae odit
          sequi voluptatem illum deserunt blanditiis consequuntur ad similique
          adipisci?
        </h3>
      </div>

      <div className="conteudos">
        <div className="conteudo">
          <a className="titulo">
            <div className="numero">
              <h2>1</h2>
            </div>
            <h1>Conceitos Básicos</h1>
          </a>
          <div className="topicos">
            <ol>
              <li>
                <a onClick={handleSubmit}>
                  TESTE DE HIPOTESE BLA BLA BLA BLA BLA BLA BAL BLA
                </a>
              </li>

              <li>
                <a href=""> </a>
              </li>

              <li>
                <a href=""> </a>
              </li>
            </ol>
          </div>
        </div>

        <div className="conteudo">
          <a className="titulo">
            <div className="numero">
              <h2>2</h2>
            </div>
            <h1>Estatística Descritiva</h1>
          </a>
          <div className="topicos"></div>
        </div>

        <div className="conteudo">
          <a className="titulo">
            <div className="numero">
              <h2>3</h2>
            </div>
            <h1>Probabilidade</h1>
          </a>
          <div className="topicos"></div>
        </div>

        <div className="conteudo">
          <a className="titulo">
            <div className="numero">
              <h2>4</h2>
            </div>
            <h1>Amostragem </h1>
          </a>
          <div className="topicos"></div>
        </div>

        <div className="conteudo">
          <a className="titulo">
            <div className="numero">
              <h2>5</h2>
            </div>
            <h1>Inferência Estatística</h1>
          </a>
          <div className="topicos"></div>
        </div>

        <div className="conteudo">
          <a className="titulo">
            <div className="numero">
              <h2>6</h2>
            </div>
            <h1>Exercícios</h1>
          </a>
          <div className="topicos"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default gradhumanas;
