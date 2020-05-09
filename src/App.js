import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Mycourse from "./pages/mycourse";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/mycourse">
          <Mycourse />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
