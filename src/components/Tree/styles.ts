import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* width: 100vw; */
  height: auto;

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    margin: 50px 0;
    /* transform: perspective(5000px) rotateY(55deg); */
    transition: 1s;

    &:hover {
      /* transform: perspective(5000px) rotateY(5deg) translateX(80px); */
    }

    .content {
      /* width: 500px; */
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;

      .title {
        display: flex;
        flex-direction: row;
        text-align: center;
        height: 50px;
        width: 60vw;
        align-items: center;
        justify-content: start;
        background: var(--secundaria);
        border-radius: 40px 28px 28px 40px;
        border: 0;

        @media (max-width: 760px) {
          width: 80vw;
        }

        h1 {
          font-size: 20px;
          font-size: 48px;
          -webkit-text-stroke: 1px #eee;
          color: transparent;
          align-self: center;
          margin-left: 32px;

          @media (max-width: 760px) {
            font-size: 28px;
          }
        }

        .number {
          display: flex;
          overflow: hidden;
          height: 58px;
          width: 58px;
          z-index: 1;
          align-items: center;
          justify-content: center;

          background: var(--gradhumanas);
          border-radius: 28px;
          /* transition: 0.3s; */

          h2 {
            /* -webkit-text-stroke: 2.2px #eee; */
            font-size: 40px;
            font-weight: 200;
            color: white;
          }
        }

        #numberSelected {
          background: var(--gradhumanas);
        }
      }

      .topics {
        display: flex;
        background-color: var(--claro);
        overflow: hidden;
        width: 54vw;
        /* height: 300px; */
        border-radius: 0 0 8px 8px;
        padding: 8px;
        /* white-space: nowrap; */
        /* overflow: hidden; */

        @media (max-width: 760px) {
          width: 68vw;
        }

        ol {
          list-style: none;
          display: list-item;
          font-size: 16px;
          /* overflow: hidden; */
          color: #fff;
          height: auto;
          font-weight: 400;
          /* margin: 8px 0 0px; */

          transition: 3s;

          li {
            margin-left: 28px;

            a {
              text-overflow: ellipsis;

              font-size: 18px;
              color: #eee;
              font-weight: 500;
              cursor: pointer;
              transition: 0.3s;

              @media (max-width: 600px) {
                font-size: 14px;
              }

              &:hover {
                color: #ddd;
              }
            }
          }
        }
      }
    }
  }
`;
