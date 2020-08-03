import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./pages/home";
import Sobrenos from "./pages/sobrenos";
import Gradhumanas from "./pages/gradhumanas";
// import Gradexatas from "./pages/gradexatas";
// import Ensinomedio from "./pages/ensinomedio";
import GradeHumanasConteudo from "./pages/gradhumanas/conteudo";
import Error404 from "./pages/Error404";

import Tree from "./components/Tree";
import Logo from "./components/Logo";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre-nos" component={Sobrenos} />
        <Route exact path="/grade-humanas" component={Gradhumanas} />
        <Route
          path="/grade-humanas/conteudo"
          component={GradeHumanasConteudo}
        />
        <Route path="/tree" component={Tree} />
        <Route exact path="/logo" component={Logo} />
        <Route component={Error404} />
        {/* <Route path="/grade-exatas" component={Gradexatas} />
      <Route path="/ensino-medio" component={Ensinomedio} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
