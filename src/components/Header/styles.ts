import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex: 1;
  height: 100px;
  justify-content: space-between;

  .buttons {
    display: flex;
    margin: 18px 18px 0 0;

    @media (max-width: 530px) {
      flex-direction: column;
    }
  }
`;
