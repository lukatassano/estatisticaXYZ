import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Sobrenos from "./pages/sobrenos";
import Gradhumanas from "./pages/gradhumanas";
// import Gradexatas from "./pages/gradexatas";
// import Ensinomedio from "./pages/ensinomedio";
import GradeHumanasConteudo from "./pages/gradhumanas/conteudo/template";

import Tree from "./components/Tree";
import Logo from "./components/Logo";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/sobre-nos" component={Sobrenos} />
      <Route exact path="/grade-humanas" component={Gradhumanas} />
      <Route path="/grade-humanas/conteudo" component={GradeHumanasConteudo} />
      <Route path="/tree" component={Tree} />
      <Route exact path="/logo" component={Logo} />
      {/* <Route path="/grade-exatas" component={Gradexatas} />
      <Route path="/ensino-medio" component={Ensinomedio} /> */}
    </BrowserRouter>
  );
};

export default Routes;
