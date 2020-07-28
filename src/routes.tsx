import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Sobrenos from "./pages/sobrenos";
import Gradhumanas from "./pages/gradhumanas";
// import Gradexatas from "./pages/gradexatas";
// import Ensinomedio from "./pages/ensinomedio";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/sobre-nos" component={Sobrenos} />
      <Route path="/grade-humanas" component={Gradhumanas} />
      {/* <Route path="/grade-exatas" component={Gradexatas} />
      <Route path="/ensino-medio" component={Ensinomedio} /> */}
    </BrowserRouter>
  );
};

export default Routes;
