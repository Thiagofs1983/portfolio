import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/projects" component={ Projects } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
