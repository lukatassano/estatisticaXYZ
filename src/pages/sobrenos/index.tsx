import React from 'react';
// import colors from '../../colors';
// import { Link } from "react-router-dom";

import Header from '../../components/Header';
// import Logo from "../../components/Logo";
// import Button from "../../components/Button";
import Footer from '../../components/Footer';

import Luka from '../../assets/avatar/luka.jpg';
import Gui from '../../assets/avatar/gui.jpg';
import Chico from '../../assets/avatar/chico.jpg';

import Github from '../../assets/githubescuro.svg';
import Linkedin from '../../assets/linkedinescuro.svg';
import Email from '../../assets/@escuro.svg';
import Site from '../../assets/wwwescuro.svg';

// import "./styles.css";
import { Container } from './styles';

const sobrenos: React.FC = () => {
  window.scrollTo(0, 0);

  return (
    <Container>
      <Header />

      <div className="nos">
        <div className="texto">
          <h1>Somos Estudantes!</h1>
          <h3>
            <br />
            Sediados em Porto Alegre, RS, somos um time apaixonado pelo
            conhecimento difundido e gratuito. Conheça um pouco mais da nossa
            equipe!
          </h3>
        </div>

        <div className="grade">
          <div className="cont" id="luka">
            <img src={Luka} alt="Avatar do Luka" className="avatar" />
            <h2>Luka Avila</h2>
            {/* <p className="cargo">CTO</p> */}
            <p>
              Estudante de desenvolvimento full stack (front-end, back-end e
              mobile). Especialidades JavaScript/Typescript, React, React Native
              e Node.js.
            </p>
            <div className="contato">
              <a href="mailto:lukatassano@estatistica.xyz">
                <img src={Email} alt="Email do Luka" />
              </a>
              <a href="https://lukatassano.com/" target="_blank">
                <img src={Site} alt="Site do Luka" />
              </a>
              <a href="https://github.com/lukatassano" target="_blank">
                <img src={Github} alt="Github do Luka" />
              </a>
              <a
                href="https://www.linkedin.com/in/luka-avila-tassano-06aa52160/"
                target="_blank"
              >
                <img src={Linkedin} alt="LinkedIn do Luka" />
                {/* <FaLinkedinIn size="54" color="#000000" /> */}
              </a>
            </div>
          </div>

          <div className="cont" id="guilherme">
            <img src={Gui} alt="Avatar do Guilherme" className="avatar" />
            <h2>
              Guilherme Elias
              <br />
              Rodriguez Doering
            </h2>

            {/* <!-- <p className="cargo">CEO</p> --> */}
            <p>
              Estudante do curso de Bacharelado em Estatística da Universidade
              Federal do Rio Grande do Sul. Programador (e estudante) de Python
              e R, além de HTML e CSS.
            </p>

            <div className="contato">
              <a href="mailto:geliasrd@estatistica.xyz">
                <img src={Email} alt="Email do Guilherme" />
              </a>
              {/* <!-- <a href="https://geliasrd.github.io/" target="_blank">
                      <img src="../../assets/wwwescuro.svg"></img> --> */}
              {/* </a> */}
              <a href="https://github.com/geliasrd" target="_blank">
                <img src={Github} alt="Github do Guilherme" />
              </a>
              {/* <!-- <a href="https://www.linkedin.com/in/guilherme-elias-rodriguez-doering-a473511b2/" target="_blank">
                      <img src="../../assets/linkedinescuro.svg"></img> --> */}
              {/* </a> */}
            </div>
          </div>

          <div className="cont" id="chico">
            <img src={Chico} alt="Avatar do Francisco" className="avatar" />
            <h2>Francisco Barabosa Pires</h2>

            {/* <!-- <p className="cargo">Produtor de Conteúdo</p> --> */}
            <p>
              Estudante do curso de Bacharelado em Estatística da Universidade
              Federal do Rio Grande do Sul. Estudante de programação de R nas
              horas vagas. Em seu tempo livre dedica-se a produção de produtos
              coloniais e belas artes.
            </p>

            <div className="contato">
              <a href="mailto:francisco.pires@estatistica.xyz">
                <img src={Email} alt="Email do Francisco" />
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-barbosa-pires-b2b6b51a0/"
                target="_blank"
              >
                <img src={Linkedin} alt="LinkedIn do Francisco" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="agradecimentos">
        <h2>Agradecimentos:</h2>
        <ul>
          <li>
            <a href="https://www.instagram.com/debemgab/">
              Gabriel de Bem: Logo do Estatística XYZ
            </a>
          </li>
        </ul>
      </div>

      <Footer />
    </Container>
  );
};

export default sobrenos;
