import React, { FormEvent } from "react";
import { useHistory } from "react-router-dom";

import { Botao } from "./styles";

interface Props {
  to: string;
  title: string;
  color: string;
}

const Button: React.FC<Props> = ({ to, title, color }) => {
  const history = useHistory();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    history.push(`${to}`);
  }

  return (
    <Botao onClick={handleSubmit} color={color}>
      <p>{title}</p>
    </Botao>
  );
};

export default Button;
