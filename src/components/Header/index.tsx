import React from "react";

import Logo from "../Logo";
import Button from "../Button";

import colors from "../../colors";

// import color from '../../colors'

import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo color={colors.secundaria} />
      {/* <img src={logo} alt="" /> */}

      <div className="buttons">
        <Button to="/" title="Ínicio" color={colors.secundaria} />
        <Button to="/sobre-nos" title="Sobre nós" color={colors.secundaria} />
      </div>
    </Container>
  );
};

export default Header;
