import React from "react";

import { Link } from "react-router-dom";

import Header from "../../components/Header";

import "./styles.css";

// import { Container } from "./styles";

const home: React.FC = () => {
  return (
    <>
      <Header to="/sobre-nos" title="Sobre nós" />

      <div className="texto">
        <h1>
          Uma plataforma para ensino de estatística, de alunos para alunos.
        </h1>
        <h3>
          &emsp; &emsp; Estatística XYZ é uma plataforma voltada para a difusão
          do ensino em estatística, sendo um projeto particular de um grupo de
          jovens alunos. Queremos auxiliar, não apenas os estudantes da área de
          estatística e matemática, mas todos os estudantes ou profissionais que
          buscam aprender e utilizar as ferramentas e os conceitos que a
          estatística disponibiliza para poder interpretar e entender melhor o
          mundo em que vivemos. &emsp; &emsp; Observamos que muitas pessoas têm
          dificuldades no aprendizado e aplicação do conteúdo de estatística,
          seja no trabalho, faculdade, escola ou até na vida. E por isso,
          decidimos fazer a nossa parte e desenvolver conteúdo de qualidade e
          acessível, disponibilizando-o de maneira gratuita para todos na
          internet. &emsp; &emsp; Sabemos que diferentes áreas do conhecimento
          necessitam diferentes abordagens dos tópicos da estatística. Levando
          isso em consideração, alocamos nossos materiais em diferentes cursos,
          cada um visando preparar da maneira mais adequada seu público-alvo.
        </h3>
      </div>

      <div className="gradecursos">
        <div className="bloco" id="ensinomedio">
          <Link className="link" to="">
            <div className="curso">
              <h1>Ensino Médio & ENEM</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat voluptas porro reiciendis inventore accusamus quae
                aliquid tenetur, necessitatibus, quos ex debitis odio repellat
                dolorum aliquam voluptatem error? Harum, facere ipsa!
              </p>
            </div>
          </Link>
        </div>

        <div className="bloco" id="gradhumanas">
          <Link className="link" to="/grade-humanas">
            <div className="curso">
              <h1>Graduação em Humanas</h1>
              <p>
                Enfoque na parte prática da estatística, tendo como prioridade o
                desenvolvimento do aluno para a compreender e interpretar
                pesquisas.
              </p>
              <ul>
                <li>Conceitos Básicos</li>
                <li>Estatística Descritiva</li>
                <li>Probabilidade</li>
                <li>Amostragem</li>
                <li>
                  Inferência Estatística
                  <ul className="sub">
                    <li>Estimação de um parâmetro</li>
                    <li>Teste de hipóteses</li>
                    <li>Análise de correlação</li>
                  </ul>
                </li>
                <li>Exercícios</li>
              </ul>
            </div>
          </Link>
        </div>

        <div className="bloco" id="gradexatas">
          <Link className="link" to="">
            <div className="curso">
              <h1>Graduação em Exatas</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                facilis culpa ipsum, reprehenderit est voluptatum libero autem,
                debitis amet voluptatem impedit rem incidunt quam quisquam
                minima adipisci rerum nulla atque?
              </p>
            </div>
          </Link>
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
                <img src="src/assets/@.svg"></img>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/geliasrd/estatisticaXYZ"
                target="_blank"
              >
                <img src="src/assets/github.svg"></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default home;
