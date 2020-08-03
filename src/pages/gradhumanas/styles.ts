import styled from "styled-components";

export const Container = styled.div`
  .texto {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 100px;

    h1 {
      color: var(--secundaria);
      font-weight: 100;
      color: #444;
      font-size: 70px;
      opacity: 100%;

      @media (max-width: 600px) {
        font-size: 40px;
        width: 95vw;
      }
    }

    h3 {
      margin-top: 38px;
      font-size: 24px;
      color: #444;
      font-weight: 700;
      text-align: start;
      width: 70vw;
      font-weight: 200;

      @media (max-width: 600px) {
        font-size: 18px;
        width: 90vw;
      }
    }
  }

  .conteudos {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
  }

  .conteudos .conteudo {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 68%;
    align-items: center;
    margin: 10px;
  }

  .conteudos .conteudo .titulo {
    display: flex;
    flex-direction: row;
    text-align: center;
    flex: 1;
    height: 100px;
    width: 1200px;
    align-items: center;
    justify-content: start;
    background: var(--secundaria);
    border-radius: 40px 28px 28px 40px;
    border: 0;
  }

  .conteudos .conteudo .titulo h1 {
    font-size: 86px;
    -webkit-text-stroke: 1.8px #eee;
    color: transparent;
    margin-left: 38px;
    text-align: center;
    justify-content: space-between;
  }

  .conteudos .conteudo .titulo h2 {
    -webkit-text-stroke: 2.2px #eee;
    font-size: 178px;
    color: transparent;
  }

  .conteudos .conteudo .titulo .numero {
    display: flex;
    overflow: hidden;
    height: 110px;
    width: 100px;
    align-items: center;
    justify-content: center;

    background: var(--gradhumanas);
    border-radius: 28px 0px 0px 28px;
  }
  .conteudos .conteudo .topicos {
    position: flex;
    display: flex;
    background-color: var(--claro);
    width: 1000px;
    /* height: 300px; */
    border-radius: 0 0 18px 18px;
    padding: 20px 0 20px 30px;
  }

  .conteudos .conteudo .topicos ol {
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    line-height: 35px;
  }

  .conteudos .conteudo .topicos ol li {
    margin: 16px 0 0 16px;
    transform: translateZ(200px);
  }

  .conteudos .conteudo .topicos ol li a {
    font-size: 22px;
    color: #eee;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;
  }

  .conteudos .conteudo .topicos ol li a:hover {
    color: #ddd;
  }

  /* body {
  transition: 2s;
  transform: perspective(600px) rotateY(-10deg);
} */
`;
