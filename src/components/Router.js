import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

import Nowshowing from "../NowShowing";


export default () => (
  <Router>
    <>
      <Header />
        <Switch>
          <Route path="/" exact component={Nowshowing} />
          <Route path="/movie" exact component={Nowshowing} />
        </Switch>
    </>
  </Router>
);
