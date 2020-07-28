import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  bottom: 0;
  width: 100%;
  height: 70px;
  border: 0;
  margin-top: 60px;
  align-items: center;
  justify-content: space-between;
  background-color: var(--fundo);
  margin-bottom: 50px;

  h2 {
    font-size: 38px;
    margin-left: 80px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-right: 80px;
    padding: 0;

    li {
      a {
        display: flex;
        flex: 1;
        margin: 50px 20px;

        img {
          height: 40px;
          width: 40px;
          transition: 0.3s;
          opacity: 50%;

          :hover {
            opacity: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    justify-content: space-around;

    h2 {
      margin-left: 0;
      font-size: 18px;
    }

    ul {
      margin: 0;
    }

    ul li a {
      margin: 0 10px;
    }

    ul li a img {
      width: 28px;
      height: 28px;
    }
  }
`;
