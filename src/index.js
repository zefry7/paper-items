import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/header';
import Intro from './Intro/intro';
import "./style.css"
import Result from './Result/result';
import Material from './Material/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Result />
    <Material />
  </React.StrictMode>
);

