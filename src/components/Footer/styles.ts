import styled from "styled-components";
import colors from "../../colors";

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

  @media (max-width: 600px) {
    justify-content: space-around;
  }

  .centro {
    display: block;
    /* position: fixed; */
    /* left: 50vw; */

    width: 48px;
    height: auto;
    transform: translateX(-110px);
    /* align-self: center; */
    opacity: 50%;

    path {
      fill: var(--secundaria);
      stroke: none;
    }

    @media (max-width: 1100px) {
      display: none;
    }
  }

  .logo {
    /* font-size: 38px; */
    /* margin-left: 80px; */
    margin-left: 50px;
    width: 400px;

    @media (max-width: 670px) {
      width: 200px;
    }

    path {
      fill: var(--secundaria);
      opacity: 50%;
      stroke: none;
    }

    @media (max-width: 600px) {
      margin-left: 0;
      font-size: 18px;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-right: 80px;
    padding: 0;

    @media (max-width: 600px) {
      margin: 0;
    }

    li {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #00000000;
        border-radius: 50%;
        height: 58px;
        width: 58px;
        flex: 1;
        margin: 50px 5px;
        transition: 0.3s;

        @media (max-width: 600px) {
          height: 44px;
          width: 44px;
          margin: 0 5px;
        }

        &:hover {
          border-radius: 30%;
          background: ${colors.secundaria}90;
        }

        &:hover svg path {
          fill: #eee;
        }

        &:active {
          transform: translateY(3px);
        }

        svg {
          height: 40px;
          width: 40px;
          transition: 0.3s;

          @media (max-width: 600px) {
            width: 32px;
            height: 32px;
          }

          path {
            transition: 0.3s;
            fill: ${colors.secundaria}90;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    ul li a img {
      width: 28px;
      height: 28px;
    }
  }
`;
