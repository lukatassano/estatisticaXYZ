import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;

  h1 {
    margin-left: 12px;
    color: ${(props) => props.color};
    /* color: var(--secundaria); */
  }

  @media (max-width: 600px) {
    margin: 0 20px;

    h1 {
      margin-left: 12px;
      font-size: 16px;
    }
  }
`;
