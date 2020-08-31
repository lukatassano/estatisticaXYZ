import styled from 'styled-components';

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

  .gradecursos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    list-style: none;
    width: 100%;
    padding: 50px 0;
    margin-top: 200px;
    align-items: center;
    justify-content: center;
    background-color: var(--secundaria);

    @media (max-width: 1250px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 830px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .bloco {
      display: flex;
      transition: 0.4s;
      outline: none;
      border-radius: 8px;
      color: black;
      margin: 0 auto;
      transform: translateY(-130px);

      @media (max-width: 1085px) {
        /* width: 250px; */
        /* height: 250px; */
        margin-top: 20px;
      }

      @media (max-width: 1200px) {
        /* width: 250px; */
        /* margin: 20px 3%; */
      }

      &:hover {
        transform: translateY(-145px);
      }

      .link {
        display: flex;
        padding: 40px 20px;
        height: 550px;
        width: 360px;
      }

      @media (max-width: 400px) {
        height: auto;
        width: 300px;
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
    margin-left: 18px;
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

`;
