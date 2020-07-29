import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .contents {
    display: flex;
    /* position: fixed; */
    flex-direction: column;
    align-items: center;
    width: 230px;
    margin: 50px 0;
    transform: perspective(5000px) rotateY(55deg);
    transition: 1s;
  }

  .contents:hover {
    transform: perspective(5000px) rotateY(5deg) translateX(80px);
  }

  .contents .content {
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }

  .contents .content .title {
    display: flex;
    flex-direction: row;
    text-align: center;
    height: 50px;
    width: 300px;
    align-items: center;
    justify-content: start;
    background: var(--secundaria);
    border-radius: 40px 28px 28px 40px;
    border: 0;
  }

  .title h1 {
    font-size: 20px;
    font-size: 60px;
    -webkit-text-stroke: 1px #eee;
    color: transparent;
    margin-left: 22px;
    text-align: center;
    justify-content: space-between;
  }

  .title h2 {
    /* -webkit-text-stroke: 2.2px #eee; */
    font-size: 40px;
    font-weight: 200;
    color: white;
  }

  .title .number {
    display: flex;
    overflow: hidden;
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;

    background: var(--claro);
    border-radius: 28px;
    transition: 0.3s;
  }

  .title #numberSelected {
    background: var(--gradhumanas);
  }

  .topics {
    display: flex;
    background-color: var(--claro);
    width: 250px;
    /* height: 300px; */
    border-radius: 0 0 18px 18px;
    /* padding: 4px 0 0 4px; */
  }

  .topics ol {
    display: list-item;
    font-size: 16px;
    overflow: hidden;
    color: #fff;
    height: 0px;
    font-weight: 400;
    /* margin: 8px 0 22px; */
    transition: 0.5s;
  }

  .content:hover .topics ol {
    height: 100px;
  }

  #topicSelected ol {
    display: list-item;
    font-size: 16px;
    overflow: hidden;
    color: #fff;
    height: 100px;
    font-weight: 400;
    margin: 8px 0 22px;
    transition: 0.5s;
  }

  .topics ol li {
    margin-left: 28px;
  }

  .topics ol li a {
    font-size: 14px;
    color: #eee;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;
  }

  .topics ol li a:hover {
    color: #ddd;
  }
`;
