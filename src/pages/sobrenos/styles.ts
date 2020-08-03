import styled from "styled-components";

export const Container = styled.div`
  .nos {
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
      .grade {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 80px;
        list-style: none;
        width: 100%;
        margin-top: 200px;
        background-color: var(--secundaria);
        
        @media (max-width: 1250px) {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 830px) {
          grid-template-columns: repeat(1, 1fr);
        }

        #luka {
          background-color: var(--ensinomedio);
          align-items: left;
          
          @media (max-width: 1085px) {
            align-items: center;
          }   
        }

        #guilherme {
          background-color: var(--gradhumanas);
          align-items: center;
        }

        #chico {
          background-color: var(--gradexatas);
          align-items: flex-end;

          @media (max-width: 1085px) {
            align-items: center;
          }
        }

        .cont {
          display: flex;
          flex-direction: column;
          height: 550px;
          width: 360px;
          border-radius: 14px;
          background-color: #fff;
          /* margin: 0 50px; */
          padding: 0 20px;
          transform: translateY(-100px);
          transition: 1.8s;
          display: flex;
          margin: 0 auto;

          @media (max-width: 1085px) {
            /* width: 350px; */
            /* height: 250px; */
            /* transform: translateY(-180px); */
            margin-top: 88px;
          }

          @media (max-width: 380px) {
            width: 320px;
          }

          &:hover {
            transform: translateY(-110px);
            box-shadow: 0 0 120px #fff;
          }

          &:hover img.avatar {
            border-radius: 30%;
          }

          img.avatar {
            height: 160px;
            width: 160px;
            border-radius: 50%;
            transition: 0.5s;
            transform: translateY(-70px);
          }

          h2 {
            text-align: center;
            font-size: 34px;
            -webkit-text-stroke: 1.8px #eee;
            color: transparent;
            transform: translateY(-48px);
            height: 75px;
            width: 320px;
          }

          /* .cargo {
            margin-top: 8px;
            align-self: center;
            text-align: justify;
            transform: translateY(-38px);
            color: whitesmoke;
            /* -webkit-text-stroke: 1.8px whitesmoke; 
            font-weight: 800;
            font-size: 30px;
          } */

          p {
            /* mudar depois a margin para 18 */
            margin-top: 38px;
            align-self: center;
            text-align: center;
            transform: translateY(-38px);
            color: whitesmoke;
            font-size: 20px;
          }

          .contato {
            display: flex;
            flex: 1;
            height: 50px;
            justify-content: center;
            align-items: flex-end;
            margin-bottom: 8px;
            align-self: center;

            a {
              display: flex;
              align-items: center;
              justify-content: center;
              background: #00000000;
              border-radius: 50%;
              height: 68px;
              width: 68px;
              margin: 0 10px 10px;
              justify-self: center;
              transition: 0.3s;
              
              @media (max-width: 380px) {
                margin: 0 3px 10px;
              }
              
              &:hover {
                border-radius: 30%;
                background: #ffffff90;
              }

              &:active {
                transform: translateY(3px);
              }

              img {
                height: 48px;
                width: 48px;
                transition: 0.3s;
                border-radius: 50%;
                opacity: 50%;
              }
              
              &:hover img {
                opacity: 100%;
              }        
            }
          }
        }
      }
    }
  }

  .agradecimentos {
    background-color: var(--secundaria);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 40px;
    transform: translateY(-2px);

    h2 {
      color: var(--claro);
      opacity: 80%;
    }

    ul {
      margin-bottom: 28px;

      li {
        list-style: none;
        margin-top: 38px;
        text-align: center;
        /* width: 688px; */
        color: var(--fundo);
        /* font-size: 22px; */
        text-decoration: none;
        transition: 0.3s;

        a {
          color: var(--fundo);
          font-size: 22px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.3s;

          &:visited {
            color: var(--fundo);
          }

          &:hover {
            color: var(--claro);
          }
        }
      }
    }
  }

  @media (max-width: 600px) {

  }
`;
