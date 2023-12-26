import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/header';
import Intro from './Intro/intro';
import "./style.css"
import Result from './Result/result';
import Material from './Material/material';
import Book from './Book/book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Result />
    <Material />
    <Book />
  </React.StrictMode>
);

