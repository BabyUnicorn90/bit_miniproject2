import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

import Favorites from "../routes/Favorites";
import MovieList from "../routes/MovieList";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/movie" exact component={MovieList} />
        <Route path="/user" component={Favorites} />
      </Switch>
    </>
  </Router>
);
