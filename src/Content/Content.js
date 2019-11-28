import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import DbApi from "../Dbapi/Dbapi";

class Content extends Component {
  render() {
    return (
      <div class="content">
        <div className="menu navbar navbar-fixed-top">
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
              <Link to="/">About</Link>
            </li>
            <li className="list-group-item">
              <Link to="/dbapi">DB API</Link>
            </li>
          </ul>
        </div>
        <div className="App-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/DbApi" component={DbApi} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Content;
