import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* height: 100vh; */
  /* width: 100vw; */
  margin-left: 100px;
  margin-top: 30px;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    margin-left: 10px;
  }

  svg {
    width: 400px;

    @media (max-width: 640px) {
      width: 200px;
    }

    @media (max-width: 350px) {
      width: 10px;
    }

    .estatistica {
      fill: ${({ color }) => color};
    }

    .x {
      /* fill: ${({ color }) => color}; */
      fill: var(--ensinomedio);
    }
    .y {
      /* fill: ${({ color }) => color}; */
      fill: var(--gradhumanas);
    }
    .z {
      /* fill: ${({ color }) => color}; */
      fill: var(--gradexatas);
    }

    .logo {
      fill: ${({ color }) => color};
      /* fill: var(--gradexatas); */
    }
  }

  @media (max-width: 600px) {
    /* margin: 0 20px; */
  }
`;
