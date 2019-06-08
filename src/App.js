import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/404Page';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/global.css';

function App() {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route component={Page404} />
    </Router>
  );
}

export default App;
