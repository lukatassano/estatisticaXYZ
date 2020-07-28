import React from "react";

import { useHistory } from "react-router-dom";

import "./styles.css";
// import { Container } from "./styles";

interface Props {
  to: string;
  title: string;
}

const Header: React.FC<Props> = ({ to, title }) => {
  const history = useHistory();

  function handleSubmit() {
    history.push(`${to}`);
  }

  return (
    <header>
      <div className="tit">
        {/* <img src="src/assets/iconeclaro.svg" alt="" /> */}
        <h1>Estatística XYZ</h1>
      </div>

      <div className="botao">
        <button onClick={handleSubmit}>{title}</button>
      </div>
    </header>
  );
};

export default Header;
