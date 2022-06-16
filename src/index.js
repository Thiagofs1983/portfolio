import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './Routes';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

ReactDOM.render(
  <Routes>
    <App />
    <Projects />
    <About />
    <Contact />
  </Routes>, 
document.getElementById('root')
);