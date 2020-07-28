import React from "react";
import { GoGraph } from "react-icons/go";

import { Container } from "./styles";

interface Props {
  color: string;
}

const Logo: React.FC<Props> = ({ color }) => {
  return (
    <Container color={color} className="tit">
      <GoGraph size="38" color={color} />
      <h1>Estatística XYZ</h1>
    </Container>
  );
};

export default Logo;
