import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Routes from "../Routes/Routes";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="l-wapper">
            <Header {...props} />
            <div className="main">
              <Routes />
            </div>
            <Footer {...props} />
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
