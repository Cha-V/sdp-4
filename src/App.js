import "./App.css";
// f59178ab70df48bc83797911eebc20d9

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Loading } from "./components/Loading";
//react-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/">
              <News
                key={"general"}
                pageSize={9}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Business">
              <News
                key={"business"}
                pageSize={9}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/Science">
              <News
                key={"science"}
                pageSize={9}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/Entertainment">
              <News
                key={"entertainment"}
                pageSize={9}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/Sports">
              <News
                key={"sports"}
                pageSize={9}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/Tech">
              <News
                key={"tech"}
                pageSize={9}
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/Health">
              <News
                key={"health"}
                pageSize={9}
                country="in"
                category="health"
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
function About() {
  return (
    <div>
      <html>
        <head></head>
        <body>
          <div class="about">
            <h1>
              TimeBrief is a one stop news portal that accumulates news from all
              the news sites divided into categories for ease of usage.
            </h1>
            <br></br>
            <h1>
              This project is developed as a part of Skill Development Project -
              4 at KLU
            </h1>
            <br></br>
            <h1>Our team consists of:</h1>
            <br></br>
            <h1>Karthik Reddy Anumula</h1>
            <br></br>
            <h1>Venkateswar Challagulla</h1>
            <br></br>
            <h1>Hemanth Sai Chintada</h1>
            <br></br>
            <h1>
              This project is developed using React, news API, django and
              deployed through AWS
            </h1>
          </div>
        </body>
      </html>
    </div>
  );
}
