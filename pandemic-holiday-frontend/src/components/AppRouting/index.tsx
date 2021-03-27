import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CovidData } from "../CovidData";
import { TravelData } from "../TravelData";

export const AppRouting = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/covid">covid</Link>
          </li>
          <li>
            <Link to="/travel">travel</Link>
          </li>
        </ul>

        <hr />

        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Switch>
          <Route exact path="/covid">
            <CovidData />
          </Route>
          <Route path="/travel">
            <TravelData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
