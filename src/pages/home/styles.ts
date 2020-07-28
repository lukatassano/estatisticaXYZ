import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    flex: 1;
  }

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
    }

    h3 {
      margin-top: 38px;
      font-size: 24px;
      color: #444;
      font-weight: 700;
      text-align: start;
      width: 70vw;
      font-weight: 200;
    }
  }

  .gradecursos {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 50px 0;
    margin-top: 200px;
    align-items: center;
    justify-content: center;
    background-color: var(--secundaria);
  

  .bloco {
    display: flex;
    transition: 0.4s;
    outline: none;
    border-radius: 8px;
    color: black;
    margin: 0 50px;
    transform: translateY(-130px);

    &:hover {
      transform: translateY(-145px);
    }

    .link {
      display: flex;
      padding: 40px 20px;
      height: 550px;
      width: 360px;
    }
  }


  /* .bloco .link {
    display: flex;
    padding: 40px 20px;
    height: 550px;
    width: 360px;
  } */

  .bloco .link .curso {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* transition: 0.4s; */
  }

  .bloco .link .curso h1 {
    /* border: 1px solid white; */
    font-size: 38px;
    -webkit-text-stroke: 1.8px #eee;
    color: transparent;
  }

  .bloco .link .curso p {
    color: #eee;
  }

  .bloco .link .curso ul {
    color: #eee;
  }

  .bloco a .curso ul .sub {
    margin-left: 18px;
  }

  #ensinomedio {
    background-color: var(--ensinomedio);
  }

  #gradhumanas {
    background-color: var(--gradhumanas);
  }

  #gradexatas {
    /* border: 2px solid var(--gradexatas); */
    background-color: var(--gradexatas);
  }

  @media (max-width: 600px) {
    .texto h3 {
      width: 250px;
      text-align: start;
    }

    .gradecursos {
      flex-direction: column;
    }

    .bloco {
      width: 250px;
      margin-top: 20px;
    }
  }
`;
