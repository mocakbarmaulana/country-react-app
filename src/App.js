import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import DetailCountryPage from "./Pages/DetailCountryPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/country/:alphaCode"
            exact
            component={DetailCountryPage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
