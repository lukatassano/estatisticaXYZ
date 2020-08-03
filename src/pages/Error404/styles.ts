import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* padding: 18px 0 0 0; */
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  img {
    width: 400px;
  }

  svg {
    height: 200px;
  }

  h1 {
    font-size: 54px;
    text-align: center;
    font-weight: 200;
  }

  .buttons {
    display: flex;
    /* flex-direction: column; */

    button {
      background: transparent;
      border-radius: 100px;
      border: 2px solid #000;
      /* margin-bottom: 45px; */
      padding: 18px;
      width: 280px;
      height: auto;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background: #008080;
      }
    }
  }
`;
