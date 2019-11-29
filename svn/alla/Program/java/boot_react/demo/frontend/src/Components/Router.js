import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Mhome from "../Routes/MHome";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/m" exact component={Mhome} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
