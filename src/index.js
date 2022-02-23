import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Careers from './components/Careers';
import Limbo from './components/Limbo';
import Project from './components/Project';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
    <Route path='/careers' element={<Careers/>} />
    <Route path='/limbo' element={<Limbo/>} />
    <Route path='/project' element={<Project/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


