import styled from 'styled-components';

export const Container = styled.div`
  .tit h1 {
    color: var(--gradhumanas);
  }

  .tit {
    display: flex;
    flex-direction: row;
  }

  .tit img {
    height: 38px;
    width: 38px;
    margin-right: 10px;
  }

  div button {
    margin: 0 5px;
    padding: 10px 15px;
    border: 0;
    border-radius: 8px;
    background-color: var(--gradhumanas);
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    opacity: 100%;
    transition: 0.3s;
  }

  .container {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-top: 90px;
  }

  .container .texto {
    display: flex;
    flex-direction: column;
    padding: 40px 30px;
    width: 48vw;
    text-align: justify;
    background-color: whitesmoke;
    margin: 0 8px 0 0px;
    border-radius: 10px;
  }

  .container .texto h1 {
    color: var(--secundaria);
  }

  .container .texto h2,
  h3,
  h4,
  h5 {
    color: var(--gradhumanas);
  }

  .container .texto p {
    color: #444;
    font-weight: 400;
    font-size: 18px;
  }

  .container .texto p img {
    float: right;
    width: 120px;
    margin: 10px;
  }

  .container .ad {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 2000px;
    width: 16vw;
    margin: 0 20px 0 0;
    background-color: #999;
    border-radius: 10px;
  }

  .container .ad img {
    margin: 50px 50px 10px 10px;
    width: 350px;
  }
`;
