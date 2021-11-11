import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Catalog from "../Pages/Catalog";
import Product from "../Pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/san-pham" component={Product} />
      {/* <Route path="/catalog/:slug" component={Product} /> */}
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
