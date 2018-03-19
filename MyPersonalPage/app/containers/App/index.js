/*
 *
 * App
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import NotFound from 'containers/NotFound';
import Projects from 'containers/Projects';
import Contact from 'containers/Contact';
import Resume from 'containers/Resume';

import './style.css';
import './styleM.css';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/home' render={() => <Home />} />
        <Route exact path='/projects' render={() => <Projects />} />
        <Route exact path='/contact' render={() => <Contact />} />
        <Route exact path='/resume' render={() => <Resume />} />
        <Route path='*' render={() => <NotFound />} />
      </Switch>
    );
  }
}
