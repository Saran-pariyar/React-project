import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; //we first installed bootstrap using npm and now we import it
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Todo from "./components/Todo";
import Api from "./components/Api";
import Contact from "./components/Contact";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {/* we have to write exact inside route otherwise the Switch will send us to nearest path i.e. / */}
        <Route exact path="/" component={Home} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/api" component={Api} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />{" "}
        {/* we will redirect to / if we don't have given path */}
      </Switch>
    </>
  );
};

export default App;
