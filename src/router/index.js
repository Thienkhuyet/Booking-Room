import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <div>king</div>
        </Route>
      </Switch>
    </Router>
  );
}
