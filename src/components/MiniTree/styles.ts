import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: auto; */

  .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    margin: 50px 0;
    transform: perspective(5000px) rotateY(55deg);
    transition: 1s;

    &:hover {
      transform: perspective(5000px) rotateY(5deg) translateX(80px);
    }

    .content {
      /* width: 500px; */
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;

      &:hover .topics ol {
        margin-top: 8px;
        margin-bottom: 8px;
        height: auto;
        max-height: 1000px;
      }

      .title {
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

        h1 {
          font-size: 20px;
          font-size: 50px;
          -webkit-text-stroke: 1px #eee;
          color: transparent;
          align-self: center;
          margin-left: 32px;
        }

        .number {
          display: flex;
          overflow: hidden;
          height: 58px;
          width: 58px;
          z-index: 1;
          align-items: center;
          justify-content: center;

          background: var(--claro);
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
        width: 250px;
        /* height: 300px; */
        border-radius: 0 0 8px 8px;
        /* padding: 0px px 0 0px; */
        /* white-space: nowrap; */
        /* overflow: hidden; */

        ol {
          list-style: none;
          display: list-item;
          font-size: 16px;
          /* overflow: hidden; */
          color: #fff;
          max-height: 0;
          font-weight: 400;
          /* margin: 8px 0 0px; */
          transition: 2s;
          /* transition: margin 0.2s; */

          li {
            margin-left: 28px;

            a {
              text-overflow: ellipsis;

              font-size: 14px;
              color: #eee;
              font-weight: 500;
              cursor: pointer;
              transition: 0.3s;

              &:hover {
                color: #ddd;
              }
            }

            #articleSelected {
              color: #444;
              cursor: not-allowed;
            }
          }
        }
      }

      #topicSelected ol {
        max-height: 1000px;
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
  }
`;
