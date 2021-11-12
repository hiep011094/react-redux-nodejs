import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./redux/reducers";
import Saga from "./redux/sagas";

import Layout from "./Components/Layout";
import "./sass/index.scss";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Saga);

ReactDOM.render( 
    <Provider store={store}>
    <Layout />
    </Provider>,
    document.getElementById("root")
);