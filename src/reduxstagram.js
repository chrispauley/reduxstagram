import React from "react";
import ReactDOM from "react-dom";

import styles from "../src/styles/style.scss";
import Main from "./components/Main";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";

import { Provider } from "react-redux";
import store, { history } from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const router = (
  <Provider store={store}>
    <Router>
      <section>
        <Main />
        <Switch>
          <Route exact path="/" component={PhotoGrid} />
          <Route path="/view/:postId" component={Single} />
          <Route component={NoMatch} />
        </Switch>
      </section>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
// console.log('hello there..')
