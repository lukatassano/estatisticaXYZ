import React from "react";

// import { Container } from './styles';

const gradhumanas: React.FC = () => {
  return (
    <>
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
                <a href="../gradhumanas/conteudo/template.html">
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

      <footer>
        <div>
          <h2>Estatística XYZ</h2>
        </div>

        <div>
          <ul>
            <li>
              <a href="mailto:elias.doering@ufrgs.br">
                <img src="../../assets/@.svg"></img>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/geliasrd/estatisticaXYZ"
                target="_blank"
              >
                <img src="../../assets/github.svg"></img>
              </a>
            </li>

            {/* <!-- <li>
                <a href="">
                    <img src="../../assets/discord.svg"></img>
                </a>
            </li> --> */}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default gradhumanas;
