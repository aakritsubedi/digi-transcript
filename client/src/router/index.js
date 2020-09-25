import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "views/Home";
import Order from "views/Order";
import Verify from "views/Verify";
import Header from "components/Header";
import Footer from "components/Footer";

import * as route from "constants/routes";

function Router() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
        <div className="h-16 mb-4">
          <Header />
        </div>
        <div>
          <Switch>
            <Route exact path={route.HOME} component={Home} />
            <Route path={route.ORDER} component={Order} />
            <Route path={route.VERIFY} component={Verify} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Router;
