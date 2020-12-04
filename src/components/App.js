import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";

// importar el layout que contiene todo los elementos comunes en las paginas
//en este caso el Navbar
import Layout from "../components/Layout";

//esta forma de crear componentes se utiliza para crear componentes que no
// utilicen estados4
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* ruta Home */}
          <Route exact path="/" component={Home} />
          {/* ruta para listar badges */}
          <Route exact path="/badges" component={Badges} />
          {/* ruta new badge */}
          <Route exact path="/badges/new" component={BadgeNew} />
          {/* ruta de editar */}
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          {/* ruta Detalles */}
          <Route
            exact
            path="/badges/:badgeId"
            component={BadgeDetailsContainer}
          />
          {/* ruta 404  */}
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
