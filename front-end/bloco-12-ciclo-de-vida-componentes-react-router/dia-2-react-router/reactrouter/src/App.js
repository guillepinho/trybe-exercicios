import './App.css';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/About';
import HowTo from './components//HowTo';
import Profile from './components//Profile';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link><span> </span>
        <Link to="/about">About</Link><span> </span>
        <Link to="/howto">How To</Link><span> </span>
        <Link to="/profile/titanic">Profile Titanic</Link><span> </span>
        <Link to="/profile/perolanegra">Profile Perola Negra</Link><span> </span>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
          {/* <Redirect to="/dashboard" /> */}
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/howto" component={HowTo} />
        <Route exact path="/profile/:ship" render={(props) => <Profile {...props} name="Guille" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
