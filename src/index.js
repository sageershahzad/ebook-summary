import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configurestore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
//Provider is a higher-order component that provides your Redux store data to child components

//store instantiated
const store = configurestore();


render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider >,
  document.getElementById("app")
);
