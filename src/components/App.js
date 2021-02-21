import React from "react";
import {Switch, Route} from "react-router-dom";

import NavBar from "./NavBar";
import Landing from "./Landing";
import About from "./About";
import Team from "./Team";
import Box from "./Box";
import Contact from "./Contact";
import Footer from "./Footer";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/our-team" component={Team} />
        <Route exact path="/little-box-of-hope" component={Box} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
