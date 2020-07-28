import React from "react";
// import { Link } from "react-router-dom";

import Header from "../../components/Header";

import "./styles.css";
// import { Container } from './styles';

const sobrenos: React.FC = () => {
  return (
    <>
      <Header to="/" title="Página inicial" />

      <div id="nos">
        <div className="texto">
          <h1>Somos Estudantes!</h1>
          <h3>
            <br></br>
            Sediados em Porto Alegre, RS, somos um time apaixonado pelo
            conhecimento difundido e gratuito. Conheça um pouco mais da nossa
            equipe!
          </h3>
        </div>

        <div className="grade">
          <div className="cont" id="luka">
            <img src="../../assets/luka.jpg" alt="" className="avatar"></img>
            <h2>
              Luka Avila <br></br> Tassano
            </h2>
            {/* <!-- <p className="cargo">CTO</p> --> */}
            <p>
              Estudante de desenvolvimento Web (Front-end e Back-end).
              Desenvolver em JavaScript/Typescript, React, React Native e
              Node.js.
            </p>
            <div className="contato">
              <a href="mailto:">
                <img src="../../assets/@escuro.svg"></img>
              </a>
              <a href="https://lukatassano.herokuapp.com/" target="_blank">
                <img src="../../assets/wwwescuro.svg"></img>
              </a>
              <a href="https://github.com/lukatassano" target="_blank">
                <img src="../../assets/githubescuro.svg" alt=""></img>
              </a>
              <a
                href="https://www.linkedin.com/in/luka-avila-tassano-06aa52160/"
                target="_blank"
              >
                <img src="../../assets/linkedinescuro.svg"></img>
              </a>
            </div>
          </div>

          <div className="cont" id="guilherme">
            <img src="../../assets/gui.jpg" alt="" className="avatar"></img>
            <h2>
              Guilherme Elias <br></br>Rodriguez Doering
            </h2>

            {/* <!-- <p className="cargo">CEO</p> --> */}
            <p>
              Estudante do curso de Bacharelado em Estatística da Universidade
              Federal do Rio Grande do Sul. Programador (e estudante) de Python
              e R, além de HTML e CSS.
            </p>

            <div className="contato">
              <a href="mailto:elias.doering@ufrgs.br">
                <img src="../../assets/@escuro.svg"></img>
              </a>
              {/* <!-- <a href="https://geliasrd.github.io/" target="_blank">
                      <img src="../../assets/wwwescuro.svg"></img> --> */}
              {/* </a> */}
              <a href="https://github.com/geliasrd" target="_blank">
                <img src="../../assets/githubescuro.svg"></img>
              </a>
              {/* <!-- <a href="https://www.linkedin.com/in/guilherme-elias-rodriguez-doering-a473511b2/" target="_blank">
                      <img src="../../assets/linkedinescuro.svg"></img> --> */}
              {/* </a> */}
            </div>
          </div>

          <div className="cont" id="chico">
            <img src="../../assets/chico.jpg" alt="" className="avatar"></img>
            <h2>Francisco Barabosa Pires</h2>

            {/* <!-- <p className="cargo">Produtor de Conteúdo</p> --> */}
            <p>
              Estudante do curso de Bacharelado em Estatística da Universidade
              Federal do Rio Grande do Sul. Estudante de programação de R nas
              horas vagas. Em seu tempo livre dedica-se a produção de produtos
              coloniais e belas artes.
            </p>

            <div className="contato">
              <a href="mailto:franciscopires2000@gmail.com">
                <img src="../../assets/@escuro.svg"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-barbosa-pires-b2b6b51a0/"
                target="_blank"
              >
                <img src="../../assets/linkedinescuro.svg"></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}

      <div className="agradecimentos">
        <h2>Agradecimentos:</h2>
        <ul>
          <li>
            {" "}
            <a href="https://www.instagram.com/debemgab/">
              Gabriel de Bem: Logo do Estatística XYZ
            </a>
          </li>
        </ul>
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

            <li>
              <a href="">
                <img src="../../assets/discord.svg"></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default sobrenos;
