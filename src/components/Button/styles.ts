import styled from 'styled-components';

export const Botao = styled.div`
  display: flex;
  width: 140px;
  height: 40px;
  /* margin: 5px; */
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border: 0;
  border-bottom: 5px solid transparent;
  border-left: 5px solid transparent;
  border-radius: 50px;
  /* background-color: ${({ color }) => color}; */
  cursor: pointer;
  color: #555;
  font-weight: bold;
  font-size: 16px;
  opacity: 50%;
  transition: 0.3s;

  p {
    transition: 0.3s;
  }

  &:hover {
    opacity: 100%;
    /* color: #333; */
    border-bottom: 5px solid ${({ color }) => color};
    border-left: 5px solid ${({ color }) => color};
    box-shadow: 5px -5px 15px ${({ color }) => color};

    p {
      transform: perspective(100px) translate3d(2px, -2px, 0);
    }
  }

  &:active {
    border-bottom: 5px solid ${({ color }) => color}50;
    border-left: 5px solid ${({ color }) => color}50;
    box-shadow: 5px -5px 15px ${({ color }) => color}50;

    p {
      transform: perspective(100px) translate3d(-1px, 1px, 0);
    }
  }
`;
