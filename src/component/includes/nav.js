import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './../pages/home';
import About from './../pages/about';
import Topics from './../pages/topics';
import SearchBox from './../includes/searchbox';

function MainNavigation(){
  return (
    <Router>
        <div className="nav">
          <ul>
              <li><CustomLink activeOnlyWhenExact={true} to="/" label="Home" /></li>
              <li><CustomLink to="/about" label="About" /></li>
              <li><CustomLink to="/topics" label="Topics" /></li>
          </ul>
          <SearchBox></SearchBox>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
    </Router>
  );
}



function CustomLink({ label, to, activeOnlyWhenExact }) {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
          <div className={match ? "active" : ""}>
            <Link to={to}>{label}</Link>
          </div>
        )}
      />
    );
  }


export default MainNavigation;
